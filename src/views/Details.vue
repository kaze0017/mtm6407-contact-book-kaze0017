<template>
  <div class="wrapper">
    <div class="contact-details-container">
      <form>
        <h2>Contact Details</h2>
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
              disabled
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
              disabled
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
              disabled
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
              disabled
            />
          </div>
        </div>
        <div class="btns-container-row">
          <div class="btn btn-info">
            <router-link :to="`/edit/${id}`"
              ><img src="../assets/edit.svg" alt=""
            /></router-link>
          </div>
          <div class="btn btn-primary">
            <router-link to="/"
              ><img src="../assets/book.svg" alt=""
            /></router-link>
          </div>
          <div class="btn btn-danger" @click="deleteContatc">
            <img src="../assets/trash.svg" alt="" />
          </div>
        </div>
      </form>
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
  methods: {
    deleteContatc() {
      let data = JSON.parse(localStorage.getItem("contacts"));
      let newData = data.filter((contact) => contact.id != this.id);
      localStorage.setItem("contacts", JSON.stringify(newData));
      this.$router.push("/");
    },
  },
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
