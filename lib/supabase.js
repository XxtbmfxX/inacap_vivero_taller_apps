import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

export const supabase = createClient(
 "https://gmqsanwdflqjboqryynz.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcXNhbndkZmxxamJvcXJ5eW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY1NzA4NDcsImV4cCI6MjAzMjE0Njg0N30.ezQ8J3vsWqjD1LuqhENTGmguYcrGo3hwnCkLlbjqWic",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
)


AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

