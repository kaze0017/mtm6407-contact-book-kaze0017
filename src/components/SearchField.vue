<template>
  <div class="wrapper">
    <div class="search-field">
      <input
        type="text"
        v-model="search"
        @input="filterContacts"
        placeholder="Search"
      />
    </div>
  </div>
</template>

<script>
import "./searchField.css";
export default {
  props: ["contacts"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    filterContacts() {
      let search = this.search.toLowerCase();
      let filteredContacts = this.contacts.filter((contact) => {
        return (
          contact.lastName.toLowerCase().includes(search) ||
          contact.firstName.toLowerCase().includes(search)
        );
      });
      this.$emit("update:filteredContacts", filteredContacts);
    },
  },
};
</script>
