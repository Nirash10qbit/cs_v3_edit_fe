<template>
  <luma-blog-post-page 
    :title="title"
    :container-class="containerClass" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaBlogPostPage} from 'vue-luma'

  export default {
    components: {
      LumaBlogPostPage,
    },
    extends: Page,
    async asyncData({ app }) {
      return {
        title: app.i18n.t('Blog Post')
      }
    },
    data () {
      return {
        title: this.$t('Blog Post')
      }
    },
    computed: {
      guest() {
        return true
      }
    }
  }
</script>
