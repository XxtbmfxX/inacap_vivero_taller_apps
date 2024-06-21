import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gmqsanwdflqjboqryynz.supabase.co'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcXNhbndkZmxxamJvcXJ5eW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NzA4NDcsImV4cCI6MjAzMjE0Njg0N30.ezQ8J3vsWqjD1LuqhENTGmguYcrGo3hwnCkLlbjqWic"


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

