// This file provides backward compatibility for function calls
// All functions should be migrated to use Supabase Edge Functions

import { supabase } from '@/lib/supabase'

/**
 * Wrapper function to call Supabase Edge Functions
 * Mimics base44.functions API
 */
export const invokeFunction = async (functionName, params = {}) => {
  const { data, error } = await supabase.functions.invoke(functionName, {
    body: params
  })
  
  if (error) throw error
  return data
}

// Export function wrappers for backward compatibility
// These will need to be implemented as Supabase Edge Functions
// Add specific functions as needed for the website

// For backward compatibility with base44.functions pattern
export const functions = {
  invoke: invokeFunction
}
