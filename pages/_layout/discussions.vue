<template>
  <luma-discussions-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaDiscussionsPage} from 'vue-luma'

  export default {
    components: {
      LumaDiscussionsPage
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Discussions')
      }
    },
    data () {
      return {
        title: this.$t('Discussions'),
      }
    },
    computed: {
      guest() {
        return true
      }
    }
  }
</script>
