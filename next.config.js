/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/airbnbclone",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
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
