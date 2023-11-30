<template>
  <div class="book-container">
    <h2>All Contacts</h2>
    <SearchField
      :contacts="contacts"
      @update:filteredContacts="updateFilteredContacts"
    />
    <Controls
      :filteredContacts="filteredContacts"
      :selectedContacts="selectedContacts"
      @update:filteredContacts="updateFilteredContacts"
      @update:selectedContacts="updateSelectedContacts"
      @update:resultContacts="resetContacts"
    />
    <Contacts
      :filteredContacts="filteredContacts"
      @update:selectedContacts="updateSelectedContacts"
    />
  </div>
</template>

<script>
// import contacts from "../data/contacts.js";
import SearchField from "../components/SearchField.vue";
import Contacts from "../components/Contacts.vue";
import Contact from "../components/Contact.vue";
import Controls from "../components/Controls.vue";
import initialDb from "../utils/initialDb.js";
export default {
  data() {
    return {
      contacts: [],
      search: "",
      filteredContacts: [],
      selectedContacts: [],
    };
  },
  created() {
    (async () => {
      let data = localStorage.getItem("contacts");
      if (data) {
        this.contacts = this.sortContacts(JSON.parse(data));
      } else {
        let apiContacts = await initialDb();
        apiContacts.forEach((contact) => {
          this.contacts.push({
            id: contact.id.value,
            firstName: contact.name.first,
            lastName: contact.name.last,
            phone: contact.phone,
            email: contact.email,
            address: contact.location.city,
            picture: contact.picture.large,
          });
        });

        let sortedContacts = this.sortContacts(this.contacts);
        this.filteredContacts = sortedContacts;
        localStorage.setItem("contacts", JSON.stringify(sortedContacts));
      }
      this.filteredContacts = this.contacts;
    })();
  },

  methods: {
    sortContacts(contacts) {
      let sortedContacts = contacts.sort(function (a, b) {
        const lastNameA = a.lastName.toUpperCase();
        const lastNameB = b.lastName.toUpperCase();
        if (lastNameA < lastNameB) {
          return -1;
        }
        if (lastNameA > lastNameB) {
          return 1;
        }
        return 0;
      });
      return sortedContacts;
    },
    updateFilteredContacts(newFilteredContacts) {
      this.filteredContacts = newFilteredContacts;
    },

    deleteSelectedContact() {
      let newContacts = this.contacts.filter(
        (contact) => !this.selectedContacts.includes(contact.id)
      );
      this.contacts = newContacts;
      this.filteredContacts = newContacts;
      localStorage.setItem("contacts", JSON.stringify(newContacts));
      this.selectedContacts = [];
    },
    updateSelectedContacts(newSelectedContacts) {
      this.selectedContacts = newSelectedContacts;
    },
    async resetContacts() {
      localStorage.removeItem("contacts");
      localStorage.removeItem("apiContacts");

      let apiContacts = await initialDb();
      let contacts = [];
      apiContacts.forEach((contact) => {
        contacts.push({
          id: contact.id.value,
          firstName: contact.name.first,
          lastName: contact.name.last,
          phone: contact.phone,
          email: contact.email,
          address: contact.location.city,
          picture: contact.picture.large,
        });
      });
      this.filteredContacts = [];
      this.selectedContacts = [];

      this.contacts = this.sortContacts(contacts);
      this.filteredContacts = this.sortContacts(contacts);
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
    },
  },

  components: { SearchField, Contact, Contacts, Controls },
};
</script>
