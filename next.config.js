/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/airbnbclone",
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
