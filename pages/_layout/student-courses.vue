<template>
  <luma-student-courses-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :results-heading-sidebar-toggle="resultsHeadingSidebarToggle" />
</template>

<script>
  import Page from '~/components/Page'
  import {
    LumaStudentCoursesPage,
    LibraryDrawer,
    LibrarySidebar
  } from 'vue-luma'

  export default {
    components: {
      LumaStudentCoursesPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Browse Courses')
      }
    },
    data () {
      return {
        title: this.$t('Browse Courses')
      }
    },
    computed: {
      guest() {
        return true
      },
      subLayout() {
        return this.$root.layoutName === 'fixed'
      },
      subLayoutDrawer() {
        return this.$root.layoutName === 'fixed' 
          ? LibrarySidebar
          : LibraryDrawer
      },
      subLayoutDrawerId() {
        return 'library-drawer'
      },
      resultsHeadingSidebarToggle() {
        return this.$root.layoutName === 'fixed' ? 'mobile' : true
      }
    }
  }
</script>
