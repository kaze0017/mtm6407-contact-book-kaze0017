<template>
  <div class="wrapper">
    <h2>Add New Contact</h2>
    <form @submit.prevent="addContact">
      <div class="form-group">
        <label>Gender</label>
        <div class="radio-btns-container">
          <div class="form-check form-check-inline">
            <input
              type="radio"
              id="male"
              value="men"
              v-model="contact.gender"
              class="form-check-input"
            />
            <label class="form-check-label" for="male">Male</label>
          </div>

          <div class="form-check form-check-inline">
            <input
              type="radio"
              id="female"
              value="women"
              v-model="contact.gender"
              class="form-check-input"
            />
            <label class="form-check-label" for="female">Female</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="firstname">First Name</label>
        <input
          type="text"
          v-model="contact.firstName"
          class="form-control"
          id="firstname"
          placeholder="Enter name"
          required
        />
      </div>
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input
          type="text"
          v-model="contact.lastName"
          class="form-control"
          id="lastname"
          placeholder="Enter name"
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
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="text"
          v-model="contact.phone"
          class="form-control"
          id="phone"
          placeholder="Enter phone"
        />
      </div>
      <div class="btns-container-row">
        <button type="submit" class="btn submit-btn">Submit</button>
        <div class="btn back-btn">
          <router-link to="/">All Contacts</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    contact: {
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      picture: "",
      gender: "",
    },
    contacts: [],
  }),

  methods: {
    addContact: function () {
      let data = localStorage.getItem("contacts");
      if (data) {
        this.contacts = JSON.parse(data);
        this.contact.id = this.contacts.length + 1;
      } else {
        this.contact.id = 1;
      }
      this.contact.picture = `https://randomuser.me/api/portraits/${this.contact.gender}/${this.contact.id}.jpg`;
      this.contacts.push(this.contact);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      this.$router.push("/");
    },
  },
};
</script>
