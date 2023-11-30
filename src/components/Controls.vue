<template>
  <div class="wrapper">
    <div class="btns-container-row">
      <div class="btn btn-danger" @click="deleteSelectedContacts">
        <img class="icon" src="../assets/trash.svg" alt="" />
      </div>
      <div class="btn btn-info" @click="resetContactsToDefault">
        <img class="icon" src="../assets/reset.svg" alt="" />
      </div>
      <div class="btn btn-success">
        <router-link to="/add">
          <img class="icon" src="../assets/add.svg" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import "./controls.css";
export default {
  name: "Controls",
  props: ["filteredContacts", "selectedContacts"],
  methods: {
    deleteSelectedContacts() {
      let contacts = this.filteredContacts.filter(
        (contact) => !this.selectedContacts.includes(contact.id)
      );
      this.$emit("update:filteredContacts", contacts);
      this.$emit("update:selectedContacts", []);
    },
    resetContactsToDefault() {
      this.$emit("update:resultContacts");
    },
  },
};
</script>
