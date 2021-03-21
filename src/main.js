import { createApp } from 'vue';
import VCalendar from 'v-calendar';
import App from './App.vue'
import './index.css';
import store from "./store/store";

const app = createApp(App);
app.use(store);
app.use(VCalendar);
app.mount('#app');