import type { NextConfig } from "next";
import { getPluginConfig } from "./lib/get-plugin-config";

const pluginConfig = await getPluginConfig()

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
