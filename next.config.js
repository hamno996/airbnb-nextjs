/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["links.papareact.com"],
    },
    env: {
        mapbox_key: "pk.eyJ1IjoiaGFtbm8iLCJhIjoiY2xjNTBiZ2I5MDV6bzNvc2FibWV6dm9tbSJ9.PqZUmn6UuJZOlNdnHXy9dQ",
    },
};

module.exports = nextConfig;