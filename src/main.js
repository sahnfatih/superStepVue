// main.js

import { createApp } from 'vue';
import App from './layouts/default.vue'; 
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
