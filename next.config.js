/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        mdxRs:true,
        serverComponentsExternalPackages:["mongoose"]
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['img.clerk.com'],
    },
}
module.exports = nextConfig