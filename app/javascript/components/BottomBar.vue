<template>
  <v-footer
    color="primary lighten-1"
    padless
    absolute
  >
    <v-row
      justify="center"
      no-gutters
      class="center"
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="footer-div center primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Apesyntax</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>

export default {
  name: 'bottombar',
  data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact US',
      ],
    }),
}

</script>


<style scoped>



.center {
    justify-content: center !important;
    text-align: -webkit-center;
}

.v-btn, .primary {
  color: #ffffff !important;
}

.v-footer {
  background: #101010 !important;
}

.footer-div {
  background: #3f4042 !important;
  padding: 2px !important;
}

.row {
    display: table-column-group !important;
  }

</style>
