import { signIn } from '../auth';
import { AuthError } from "next-auth"
import { redirect } from "next/navigation"

export default function SignIn({ provider }) {
    return (
        <form
            action={async () => {
                "use server"
                try {
                    await signIn(provider.id)
                } catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    if (error instanceof AuthError) {
                        return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`)
                    }

                    // Otherwise if a redirects happens NextJS can handle it
                    // so you can just re-thrown the error and let NextJS handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error
                }
            }}
        >
            <button type="submit">
                <span>Sign in with {provider.name}</span>
            </button>
        </form>
    )
}
