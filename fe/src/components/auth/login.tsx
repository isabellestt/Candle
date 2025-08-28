import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import { supabase, useAuth } from "../../utils/auth/useAuth"

export default function Login() {
    const { session } = useAuth()

    if (!session) {
        return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={['google']}
        />)
    }
    else {
        return (<div>Logged in!</div>)
    }
}

