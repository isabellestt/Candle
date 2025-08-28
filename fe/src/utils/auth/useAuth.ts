import { createClient, type Session } from '@supabase/supabase-js'
import { useEffect, useState } from "react"

export const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL!, import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!)

export function useAuth() {
    const [session, setSession] = useState<Session | null>(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
        return () => subscription.unsubscribe()
    }, [])
    return { session }  
}