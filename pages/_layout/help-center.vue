<template>
  <luma-help-center-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaHelpCenterPage} from 'vue-luma'

  export default {
    components: {
      LumaHelpCenterPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Help Center')
      }
    },
    data () {
      return {
        title: this.$t('Help Center')
      }
    },
    computed: {
      guest() {
        return true
      }
    }
  }
</script>
