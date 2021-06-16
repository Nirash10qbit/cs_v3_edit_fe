<template>
  <div>asdas</div>
</template>

<script>
  import Page from '~/components/Page'
  import {LumaLoginPage} from 'vue-luma'

  export default {

    extends: Page,
    layout: 'blank',
    async asyncData() {
      return {
        title: 'Login'
      }
    },
    data() {
      return {
        title: 'Login'
      }
    }
  }
</script>
