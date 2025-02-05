import NextAuth, { type NextAuthConfig } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: '/signin',
		signOut: '/signout',
		error: '/signin/error', // Error code passed in query string as ?error=
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},
		async session({ session, token, user }) {
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			return token;
		},
	},
	session: {
		strategy: 'jwt',
	},
	debug: process.env.NODE_ENV === 'development',
};

// ✅ Correctly export `handler` instead of `handlers`
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
