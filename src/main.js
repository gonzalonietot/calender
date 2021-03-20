import { createApp } from 'vue'
import { SetupCalendar, Calendar, DatePicker } from 'v-calendar';
import App from './App.vue'
import './index.css'

createApp(App)
    .use(SetupCalendar, {})
    .component('Calendar', Calendar)
    .component('DatePicker', DatePicker)
    .mount('#app')
