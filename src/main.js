import { createApp } from 'vue'
import App from './App.vue'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
UIkit.use(Icons)

createApp(App).mount('#app')
