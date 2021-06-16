<template>
  <luma-instructor-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaInstructorCoursesPage} from 'vue-luma'

  export default {
    components: {
      LumaInstructorCoursesPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Manage Courses')
      }
    },
    data() {
      return {
        title: this.$t('Manage Courses')
      }
    }
  }
</script>
