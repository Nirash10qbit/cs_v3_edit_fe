<template>
  <luma-discussion-page
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaDiscussionPage} from 'vue-luma'

  export default {
    components: {
      LumaDiscussionPage,
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Discussion')
      }
    },
    data () {
      return {
        title: this.$t('Discussion')
      }
    },
    computed: {
      guest() {
        return true
      }
    }
  }
</script>
