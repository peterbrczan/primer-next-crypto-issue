/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // https://stackoverflow.com/questions/67333737/add-crypto-browserify-to-gatsby-project
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        "crypto": require.resolve('crypto-browserify')
      }
    }

    return config
  }
}

module.exports = nextConfig
