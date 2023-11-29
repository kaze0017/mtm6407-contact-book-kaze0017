<template>
  <div class="wrapper">
    <h2>Edit Contact</h2>

    <form @submit.prevent="editContact">
      <div class="form-group">
        <label for="firstname">First Name: </label>
        <input
          type="text"
          v-model="contact.firstName"
          class="form-control"
          id="firstname"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name: </label>
        <input
          type="text"
          v-model="contact.lastName"
          class="form-control"
          id="lastname"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Email: </label>
        <input
          type="email"
          v-model="contact.email"
          class="form-control"
          id="email"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone: </label>
        <input
          type="text"
          v-model="contact.phone"
          class="form-control"
          id="phone"
        />
      </div>
      <div class="btns-container-row">
        <button type="submit" class="btn submit-btn">Submit</button>
        <div class="back-btn btn">
          <RouterLink :to="`/details/${id}`">Back</RouterLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import "./edit.css";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contact: {},
      contacts: [],
    };
  },
  created: function () {
    this.contacts = JSON.parse(localStorage.getItem("contacts"));
    this.contact = this.contacts.filter((contact) => contact.id == this.id)[0];
  },
  methods: {
    editContact: function () {
      let data = localStorage.getItem("contacts");
      if (data) {
        this.contacts = JSON.parse(data);
        this.contacts = this.contacts.map((contact) => {
          if (contact.id == this.id) {
            return this.contact;
          }
          return contact;
        });
        localStorage.setItem("contacts", JSON.stringify(this.contacts));
      }
      this.$router.push({ path: `/details/${this.id}` });
    },
  },
  components: { RouterLink },
};
</script>
