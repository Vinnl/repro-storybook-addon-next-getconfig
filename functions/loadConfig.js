import getConfig from 'next/config'

export function loadConfig() {
  return getConfig().publicRuntimeConfig;
}
