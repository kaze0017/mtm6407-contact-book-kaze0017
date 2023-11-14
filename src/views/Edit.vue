<template>
  <form @submit.prevent="editContact">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        v-model="contact.name"
        class="form-control"
        id="name"
        required
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="contact.email"
        class="form-control"
        id="email"
      />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        v-model="contact.phone"
        class="form-control"
        id="phone"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import contacts from "../data/contacts";

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
};
</script>
