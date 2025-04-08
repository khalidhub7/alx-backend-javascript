#!/usr/bin/env node

const loadBalancer = (chinaDownload,
  USDownload) => (
  Promise.race([USDownload, chinaDownload])
);
export default loadBalancer;
