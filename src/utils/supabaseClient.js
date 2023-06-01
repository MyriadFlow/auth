import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.REACT_APP_ANON_KEY
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_URL 
export const supabase = createClient(supabaseUrl, supabaseAnonKey)