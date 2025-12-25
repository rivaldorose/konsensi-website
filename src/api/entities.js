// This file provides backward compatibility for entity imports
// All entities should be migrated to use supabaseService directly

import { supabaseService } from '@/services/supabaseService'
import { supabase } from '@/lib/supabase'

// Entity wrappers that mimic base44.entities API
const createEntityWrapper = (tableName) => ({
  list: (orderBy = 'created_at', ascending = false) => 
    supabaseService.list(tableName, orderBy.replace('-', ''), !orderBy.startsWith('-')),
  
  filter: (filters) => supabaseService.filter(tableName, filters),
  
  get: (id) => supabaseService.getById(tableName, id),
  
  create: (data) => supabaseService.create(tableName, data),
  
  update: (id, data) => supabaseService.update(tableName, id, data),
  
  delete: (id) => supabaseService.delete(tableName, id),
})

// Export entity wrappers for Konsensi Website
export const Blog = createEntityWrapper('blogs')
export const Newsletter = createEntityWrapper('newsletters')
export const Les = createEntityWrapper('lessons')
export const LesVraag = createEntityWrapper('lesson_questions')
export const GebruikerLesVoortgang = createEntityWrapper('user_lesson_progress')
export const PilotRegistratieGebruiker = createEntityWrapper('pilot_user_registrations')
export const PilotRegistratiePartner = createEntityWrapper('pilot_partner_registrations')
export const PilotPartner = createEntityWrapper('pilot_partners')
export const PilotDownload = createEntityWrapper('pilot_downloads')
export const Update = createEntityWrapper('updates')

// Auth wrapper - use supabase.auth directly
export const User = {
  me: async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null
    const { data: profile } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single()
    return { ...user, ...profile }
  },
  updateMe: async (data) => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) throw new Error('Not authenticated')
    return await supabaseService.update('users', user.id, data)
  }
}
