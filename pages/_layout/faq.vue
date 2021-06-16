<template>
  <luma-faq-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaFaqPage} from 'vue-luma'

  export default {
    components: {
      LumaFaqPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('FAQ')
      }
    },
    data () {
      return {
        title: this.$t('FAQ')
      }
    },
    computed: {
      guest() {
        return true
      }
    }
  }
</script>
