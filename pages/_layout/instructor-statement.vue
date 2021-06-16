<template>
  <luma-instructor-statement-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorStatementPage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorStatementPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Statement')
      }
    },
    data() {
      return {
        title: this.$t('Statement')
      }
    }
  }
</script>
