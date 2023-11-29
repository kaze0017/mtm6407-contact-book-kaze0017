<template>
  <div class="card-container">
    <input type="checkBox" @change="selectContact" />
    <router-link :to="`/details/${contact.id}`">
      <div class="short-contact">
        <img :src="contact.picture" alt="" />

        <p>{{ contact.firstName }} {{ contact.lastName }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import "./contact.css";
export default {
  name: "Contact",
  props: ["contact"],
  data() {
    return {
      message: "Hello World",
    };
  },
  methods: {
    selectContact() {
      this.$emit("select:selectedContact", this.contact.id);
    },
  },
};
</script>
