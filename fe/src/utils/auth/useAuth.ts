import { createClient, type Session } from '@supabase/supabase-js'
import { useEffect, useState } from "react"
import type { Profile } from '../../types/profile'

export const supabase = createClient(import.meta.env.VITE_PUBLIC_SUPABASE_URL!, import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!)

export function useAuth() {
    const [session, setSession] = useState<Session | null>(null)
    const [profile, setProfile] = useState<Profile | null>(null)
    const apiUrl = import.meta.env.VITE_PUBLIC_API_URL;
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

    useEffect(() => {
        const getProfile = async () => {
            const res = await fetch(`${apiUrl}/api/getProfile/${session?.user.id}`)
            const data = await res.json()
            if (res.ok) {
                setProfile(data)
            }
        }
        if (session) {
            getProfile()
        }
    }, [session, apiUrl])

    return { session, profile }  
}