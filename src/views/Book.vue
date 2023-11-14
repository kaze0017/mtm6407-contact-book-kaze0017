<template>
  <h1>Book</h1>
  <div class="gallery">
    <div class="card"><router-link :to="`/add`">add new +</router-link></div>
    <div class="card" v-for="contact in contacts" :key="contact.id">
      <router-link :to="`/details/${contact.id}`">
        <h2>{{ contact.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
import contacts from "../data/contacts.js";
export default {
  data() {
    return {
      contacts,
    };
  },
  created() {
    let data = localStorage.getItem("contacts");
    if (data) {
      this.contacts = JSON.parse(data);
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  },
};
</script>
