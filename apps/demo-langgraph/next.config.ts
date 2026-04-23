import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: [
    "@hitl-kit/core",
    "@hitl-kit/react",
    "@hitl-kit/langgraph",
    "@hitl-kit/ai-sdk",
  ],
};

export default config;
