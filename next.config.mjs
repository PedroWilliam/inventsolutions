/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
      locales: ['en-US', 'pt-BR'],
      defaultLocale: 'pt-BR',
    },
    output: 'standalone'
};

export default nextConfig;
