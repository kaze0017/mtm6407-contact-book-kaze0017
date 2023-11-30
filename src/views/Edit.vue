<template>
  <div class="wrapper">
    <form @submit.prevent="editContact">
      <h2>Edit Contact</h2>
      <img class="contact-img" :src="contact.picture" alt="" />
      <div class="form-group row">
        <label for="firstname" class="col-sm-2 col-form-label"
          >First Name:
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.firstName"
            class="form-control"
            id="firstname"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="lastname" class="col-sm-2 col-form-label"
          >Last Name:
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.lastName"
            class="form-control"
            id="lastname"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2 col-form-label">Email: </label>
        <div class="col-sm-10">
          <input
            type="email"
            v-model="contact.email"
            class="form-control"
            id="email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-2 col-form-label">Phone: </label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.phone"
            class="form-control"
            id="phone"
          />
        </div>
      </div>
      <div class="btns-container-row">
        <button type="submit" class="btn btn-success">
          <img src="../assets/person-check.svg" alt="" />
        </button>
        <div class="btn btn-primary">
          <RouterLink :to="`/details/${id}`">
            <img src="../assets/back.svg" alt="" />
          </RouterLink>
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
