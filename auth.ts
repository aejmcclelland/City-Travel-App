// import NextAuth from 'next-auth';
// import Google from 'next-auth/providers/google';
// import Credentials from 'next-auth/providers/credentials';
// import type { Provider } from 'next-auth/providers';

// const providers: Provider[] = [
// 	Google,
// 	Credentials({
// 		credentials: { password: { label: 'Password', type: 'password' } },
// 		authorize(c) {
// 			if (c.password !== 'password') return null;
// 			return {
// 				id: 'test',
// 				name: 'Test User',
// 				email: 'test@example.com',
// 			};
// 		},
// 	}),
// ];

// export const providerMap = providers.map((provider) => {
// 	if (typeof provider === 'function') {
// 		const providerData = provider();
// 		return { id: providerData.id, name: providerData.name };
// 	} else {
// 		return { id: provider.id, name: provider.name };
// 	}
// });

// export const config = {
// 	providers: [Google],
// 	pages: {
// 		signIn: '/signin',
// 		signOut: '/attractions',
// 	},
// };

// export const { handlers, auth, signIn, signOut } = NextAuth(config);

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextApiRequest, NextApiResponse } from 'next';

const options = {
	providers: [GoogleProvider],
	pages: {
		signIn: '/signin',
		signOut: '/signout',
		error: '/signin/error', // Error code passed in query string as ?error=
	},
	callbacks: {
		async signIn({ user, account, profile, email, credentials }) {
			// Add your sign-in logic here
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
	// Configure session strategy
	session: {
		strategy: 'jwt',
	},
	// Enable debug messages in the console if you are having problems
	debug: process.env.NODE_ENV === 'development',
};
// Assign the handler function to a variable
const authHandler = (req: NextApiRequest, res: NextApiResponse) => NextAuth;

// Export the handler variable
export default authHandler;
