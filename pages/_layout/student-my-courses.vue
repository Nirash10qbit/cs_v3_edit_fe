<template>
  <luma-student-my-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentMyCoursesPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentMyCoursesPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('My Courses')
      }
    },
    data () {
      return {
        title: this.$t('My Courses')
      }
    }
  }
</script>
