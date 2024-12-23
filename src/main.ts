import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './styles/index.scss';
import 'virtual:uno.css';
import '@unocss/reset/tailwind.css'

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
