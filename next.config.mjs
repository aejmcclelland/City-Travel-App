/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		// NOTE: Use VERCEL_URL to dynamically set NEXTAUTH_URL for Vercel deployments,
		// falling back to localhost for local development.
		NEXTAUTH_URL: process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: 'http://localhost:3000',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
		],
	},
	experimental: {
		esmExternals: 'loose', // <-- add this
		serverComponentsExternalPackages: ['mongoose'], // <-- and this
	},
	// and the following to enable top-level await support for Webpack
	webpack: (config) => {
		config.experiments = {
			topLevelAwait: true,
		};
		return config;
	},
};

export default nextConfig;
