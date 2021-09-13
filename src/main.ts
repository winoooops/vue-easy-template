import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

// import components
import '@/components/card';

createApp(App)
  .use(store, key)
  .use(router)
  .mount('#app');
