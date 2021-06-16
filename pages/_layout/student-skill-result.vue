<template>
  <luma-student-skill-result-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaStudentSkillResultPage} from 'vue-luma'

  export default {
    components: {
      LumaStudentSkillResultPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Path Details')
      }
    },
    data () {
      return {
        title: this.$t('Path Details')
      }
    },
    computed: {
      headerClass() {
        return 'mb-0'
      }
    }
  }
</script>
