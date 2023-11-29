<template>
  <div class="wrapper">
    <div class="btns-container-row">
      <div class="delete-btn btn" @click="deleteSelectedContacts">
        Delete Selected
      </div>
      <div class="reset-btn btn" @click="resetContactsToDefault">
        Reset Contacts
      </div>
      <div class="add-btn btn">
        <router-link to="/add">Add Contact</router-link>
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
