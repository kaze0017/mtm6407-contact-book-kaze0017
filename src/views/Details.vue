<template>
  <div class="wrapper">
    <h2>Contact Details</h2>
    <div class="contact-details-container">
      <img :src="contact.picture" alt="" />
      <p><strong>FirstName: </strong>{{ contact.firstName }}</p>
      <p><strong>LastName: </strong>{{ contact.lastName }}</p>
      <p><strong>Email: </strong>{{ contact.email }}</p>
      <p><Strong>Phone: </Strong>{{ contact.phone }}</p>
      <div class="btns-container-column">
        <div class="btn edit-btn">
          <router-link :to="`/edit/${id}`">Edit</router-link>
        </div>
        <div class="btn back-btn">
          <router-link to="/">All Contacts </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./details.css";
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    contact: [],
  }),
  created: function () {
    let data = localStorage.getItem("contacts");
    if (data) {
      this.contact = JSON.parse(data).filter(
        (contact) => contact.id == this.id
      )[0];
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  },
};
</script>
