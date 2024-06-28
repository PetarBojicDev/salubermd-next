/** @type {import('next').NextConfig} */
import withNextIntl from 'next-intl/plugin';
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  }
};

const withNextIntlModule = withNextIntl('./i18n.ts');

export default withNextIntlModule(nextConfig);