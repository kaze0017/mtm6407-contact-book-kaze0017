<template>
  <div class="wrapper">
    <form @submit.prevent="addContact">
      <h2>Add New Contact</h2>
      <div class="form-group row">
        <label class="col-sm-2">Gender</label>
        <div class="col-sm-10">
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
      <div class="form-group row">
        <label for="firstname" class="col-sm-2">First Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.firstName"
            class="form-control"
            id="firstname"
            placeholder="Enter name"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="lastname" class="col-sm-2">Last Name</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.lastName"
            class="form-control"
            id="lastname"
            placeholder="Enter last name"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-2">Email</label>
        <div class="col-sm-10">
          <input
            type="email"
            v-model="contact.email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="phone" class="col-sm-2">Phone</label>
        <div class="col-sm-10">
          <input
            type="text"
            v-model="contact.phone"
            class="form-control"
            id="phone"
            placeholder="Enter phone"
          />
        </div>
      </div>
      <div class="btns-container-row">
        <button type="submit" class="btn btn-success">
          <img src="../assets/add.svg" alt="" />
        </button>
        <div class="btn btn-primary">
          <router-link to="/"
            ><img src="../assets/book.svg" alt=""
          /></router-link>
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
