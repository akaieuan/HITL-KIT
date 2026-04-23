import type { NextConfig } from "next";

const config: NextConfig = {
  transpilePackages: [
    "@hitl-kit/core",
    "@hitl-kit/react",
    "@hitl-kit/langgraph",
  ],
};

export default config;
