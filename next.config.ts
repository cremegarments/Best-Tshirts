import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // Use the compiler API supported by our TypeScript 5 toolchain.
  experimental: {useTypeScriptCli: false},
};
export default nextConfig;
