import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: any = {
  eslint: {
    ignoreDuringBuilds: true
  }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
