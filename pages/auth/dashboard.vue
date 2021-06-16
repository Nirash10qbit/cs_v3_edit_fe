<template>
  <div>
    Dashboard
  </div>
</template>

<script>
export default {
  layout:"fixed",
  middleware: ['auth', 'verified'],
  async mounted() {

    await this.$axios.get('api/dashboard')

  }
}
</script>
