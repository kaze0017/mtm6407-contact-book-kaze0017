<template>
  <div class="wrapper">
    <div class="gallery">
      <div v-for="letter in lettersToDisplay" :key="letter">
        <div
          class="letter-group"
          v-if="
            filteredContacts.some(
              (contact) =>
                contact.lastName[0].toLowerCase() === letter.toLowerCase()
            )
          "
        >
          <h2 class="letter-title">{{ letter.toUpperCase() }}</h2>
          <Contact
            v-for="filteredContact in filteredContacts.filter(
              (contact) =>
                contact.lastName[0].toLowerCase() === letter.toLowerCase()
            )"
            :key="filteredContact.id"
            :contact="filteredContact"
            @select:selectedContact="addToselectedContacts"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./contacts.css";
import alphabet from "../data/alphabet";
import Contact from "./Contact.vue";
export default {
  name: "Contacts",
  data() {
    return {
      alphabet,
      selectedContacts: [],
      lettersToDisplay: [],
    };
  },
  props: ["filteredContacts"],
  components: {
    Contact,
  },
  methods: {
    addToselectedContacts(id) {
      if (this.selectedContacts.includes(id)) {
        this.selectedContacts = this.selectedContacts.filter(
          (contactId) => contactId !== id
        );
      } else {
        this.selectedContacts.push(id);
      }
      this.$emit("update:selectedContacts", this.selectedContacts);
    },
  },
  watch: {
    filteredContacts: {
      handler: function (newFilteredContacts) {
        const uniqueLetters = new Set();
        newFilteredContacts.forEach((contact) => {
          const firstLetter = contact.lastName[0].toLowerCase();
          uniqueLetters.add(firstLetter);
        });

        this.lettersToDisplay = Array.from(uniqueLetters).sort();
      },
      immediate: true,
    },
  },
};
</script>
