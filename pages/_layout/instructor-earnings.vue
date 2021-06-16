<template>
  <luma-instructor-earnings-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorEarningsPage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorEarningsPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Earnings')
      }
    },
    data() {
      return {
        title: this.$t('Earnings')
      }
    }
  }
</script>
