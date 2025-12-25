import { supabaseService } from '@/services/supabaseService'
import { supabase } from '@/lib/supabase'

// Integrations wrapper for backward compatibility
export const Core = {
  UploadFile: async ({ file, bucket = 'attachments', path }) => {
    const fileName = path || `${Date.now()}-${file.name}`
    return await supabaseService.uploadFile(bucket, fileName, file)
  },
  
  InvokeLLM: async (params) => {
    console.warn('Core.InvokeLLM is deprecated. Migrate to Supabase Edge Function.')
    const { data, error } = await supabase.functions.invoke('invoke-llm', {
      body: params
    })
    if (error) throw error
    return data
  },
  
  SendEmail: async (params) => {
    console.warn('Core.SendEmail is deprecated. Migrate to Supabase Edge Function.')
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: params
    })
    if (error) throw error
    return data
  }
}

// Export individual functions for backward compatibility
export const InvokeLLM = Core.InvokeLLM
export const SendEmail = Core.SendEmail
export const UploadFile = Core.UploadFile
