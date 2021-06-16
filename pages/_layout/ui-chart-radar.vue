<template>
  <luma-ui-chart-radar-page
    :title="title"
    :breadcrumb="breadcrumb"
    :container-class="containerClass"
    :layout-has-sticky-navbar="$root.layoutName === 'fixed' || $root.layoutName === 'sticky'" />
</template>

<script>
  import Page from '~/components/Page'
  import {LumaUiChartRadarPage} from 'vue-luma'

  export default {
    components: {
      LumaUiChartRadarPage
    },
    extends: Page,
    async asyncData() {
      return {
        title: 'Radar Chart'
      }
    },
    data() {
      return {
        title: 'Radar Chart'
      }
    }
  }
</script>
