<template>
  <h2>{{ contact.name }}</h2>
  <p>{{ contact.email }}</p>
  <p>{{ contact.phone }}</p>
  <div class="btn">
    <router-link :to="`/edit/${id}`">Edit</router-link>
  </div>
</template>

<script>
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
      console.log(JSON.parse(data).filter((contact) => contact.id == this.id));
      this.contact = JSON.parse(data).filter(
        (contact) => contact.id == this.id
      )[0];
    } else {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  },
};
</script>
