/* This file serves as a starting point for our app
 * along with configuring essential modules and components
 *
 * NOTE: Make sure to run 'npm install' and 'npm run dev' to launch
 * our frontend in dev mode. To run in prod, run 'npm run prod' and access the stuff
 * in generated dist folder
*/

// Import css styles to affect the appearance globally
import './assets/css/null.css';
import './assets/css/base.css';

// Import essential modules and components
import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';

// Set base url globally for axios
axios.defaults.baseURL = "http://localhost:8080";

// Create application
const app = createApp({
    render: () => h(App)
});

// Make axios globally available through config of the app
app.config.globalProperties.$axios = axios;

// Enable routing
app.use(router);
// Mounting our app into the index.html file (under the hood)
app.mount('#app');