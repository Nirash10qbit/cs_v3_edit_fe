<template>
  <luma-forgot-password-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaForgotPasswordPage} from 'vue-luma'

  export default {
    components: {
      LumaForgotPasswordPage
    },
    extends: Page,
    layout: 'blank',
    async asyncData() {
      return {
        title: 'Forgot Password?'
      }
    },
    data() {
      return {
        title: 'Forgot Password?'
      }
    }
  }
</script>
