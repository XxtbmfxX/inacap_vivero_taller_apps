import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import Auth from '../components/Auth'
import { View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { router } from 'expo-router';

function irABodega() {
  router.replace('/home');
}


export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)

      irABodega()
    })
  }, [])

  return (
    <View>
      <Auth />
    </View>
  )
}

          // <Link href="/home" style={{ width: "50%",  textAlign: "center", borderBottomWidth: 2, fontSize: 24 }}>
          //   Ir a home
          // </Link>