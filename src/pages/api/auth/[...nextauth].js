import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: "Name", type: "text", placeholder: "jsmith" },
                email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
            },
            async authorize(credentials, req) {
                const { name, email } = credentials;

                // Check if credentials are provided
                if (name && email) {
                    return { name, email }; // Return user object on success
                }

                return null; // Return null if authentication fails
            }
        })
    ],
    pages: {
        signIn: '/auth/login', // Custom sign-in page path
    },
}

export default NextAuth(authOptions)
