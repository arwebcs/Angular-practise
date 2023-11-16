import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.devker.crud',
  appName: 'CRUD',
  webDir: 'dist/crud',
  server: {
    androidScheme: 'https',
  },
};

export default config;
