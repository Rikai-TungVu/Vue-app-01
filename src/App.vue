<template>
  <section>
    <header>
      <h1>My Friends List</h1>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ><!-- Nhận sự kiện được gửi lên từ FriendContact bằng v-on(@) --></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Fri',
          phone: '0123 45678 90',
          email: 'manuel@localhost.com',
          isFavorite: true,
        },
        {
          id: 'julie',
          name: 'Julie Mon',
          phone: '0987 654421 21',
          email: 'julie@localhost.com',
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact (name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };/* Khai báo các biến được add vô list */
      this.friends.push(newFriendContact);
      /* Đẩy dữ liệu mới vào list danh sách có sẵn */
    },
    deleteContact (friendId) {
        this.friends = this.friends.filter(
          (friend) => friend.id != friendId);
      }/* Tìm trong list [friends] vs điều kiện ko xóa nếu friend.id khác friendID*/
  },
};
</script>