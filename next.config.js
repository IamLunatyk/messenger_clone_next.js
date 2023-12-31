/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        swvPlugin: [
            ["next-superjason-plugin", {}]
        ]
    },
    images: {
        domains: [
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ]
    }
}

module.exports = nextConfig
