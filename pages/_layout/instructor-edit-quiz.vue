<template>
  <luma-instructor-edit-quiz-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorEditQuizPage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorEditQuizPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Edit Quiz')
      }
    },
    data() {
      return {
        title: this.$t('Edit Quiz')
      }
    }
  }
</script>
