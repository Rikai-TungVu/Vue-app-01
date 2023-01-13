import { createApp } from 'vue';

import App from './App.vue';
import NewFriend from './components/NewFriend.vue';
/* Import file NewFriend vào file main từ /components/NewFriend.vue*/
import FriendContact from './components/FriendContact.vue';
/* Import file FriendContact vào file main từ FriendContact.vue*/
import './components/FriendStyle.css';
/* Add dự liệu đồ họa */

const app = createApp(App);

app.component('friend-contact', FriendContact);
/* Khai báo thêm element mới friend-contact từ file FriendContact*/
app.component('new-friend', NewFriend);
/* Khai báo thêm element mới new-friend từ file NewFriend*/
app.mount('#app');