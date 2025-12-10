import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    eslint: {
    // Warning: this allows production builds to succeed even with ESLint errors
    ignoreDuringBuilds: true
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);