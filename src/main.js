import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store';

import cookies from './plugins/cookies'
import screen from './plugins/screen'
import localStorage from './plugins/localStorage'

const app = createApp(App);
app.use(screen);
app.use(cookies);
app.use(localStorage);
app.use(store);
app.use(router);
app.mount('#app');
