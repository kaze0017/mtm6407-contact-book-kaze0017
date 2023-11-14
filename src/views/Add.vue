<template>
  <form @submit.prevent="addContact">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        v-model="contact.name"
        class="form-control"
        id="name"
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
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => ({
    contact: {
      id: "",
      name: "",
      email: "",
      phone: "",
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
      this.contacts.push(this.contact);
      console.log(this.contact);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      this.$router.push("/");
    },
  },
};
</script>
