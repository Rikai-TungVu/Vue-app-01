import { createApp } from 'vue';

import App from './App.vue';
import NewFriend from './components/NewFriend.vue'
import FriendContact from './components/FriendContact.vue';
/* Import file FriendContact vào file main*/
import './components/FriendStyle.css';
/* Add dự liệu đồ họa */

const app = createApp(App);

app.component('friend-contact', FriendContact);
/* Khai báo thêm element mới  friend-contact từ file FriendContact*/
app.component('new-friend', NewFriend);

app.mount('#app');
