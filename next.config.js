/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/airbnbclone",
    reactStrictMode: true,
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com"
        ]
    }
}

module.exports = nextConfig
