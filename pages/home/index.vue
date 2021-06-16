<template>
  <div>
    <template v-if="$auth.loggedIn">
      <b-container
        md="8"
        class="mt-3">
        <div><Switchto /></div>
        <div><Frequent /></div>
        <div><Recent /> </div>
      </b-container>
    </template>
  </div>
</template>

<script>
 import Switchto from "~/pages/home/switchto";
 import Frequent from "~/pages/home/frequent";
 import Recent from "~/pages/home/recent";

export default {
  layout: 'fixed',
  components: {
    Switchto,
    Frequent,
    Recent,
  },

  data() {
    return {
    }
  },
  methods: {

  }
}
</script>



