import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
/* Add file FriendContact vào file main*/
import './components/FriendStyle.css';
/* Add dự liệu đồ họa */

const app = createApp(App);

app.component('friend-contact', FriendContact);

app.mount('#app');
