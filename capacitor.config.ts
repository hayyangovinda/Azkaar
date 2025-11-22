import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.azkaar.app',
  appName: 'Azkaar',
  webDir: 'dist/azkaar/browser',
  server: {
    url: 'http://172.20.10.6:4200',
    cleartext: true
  }
};

export default config;
