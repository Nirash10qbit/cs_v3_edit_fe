<template>
  <div>
    <h5>Frequent</h5>

    <div
      :class="containerClass"
      class="page-section">
      <div>

        <div class="row card-group-row">
          <div
            v-for="item in development"
            :key="item.id"
            class="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
            <course-card
              :image="item.image"
              :title="item.title"
              :author="item.author"
              :position="item.position"
              :reveals="false"
              card-class="card-group-row__card"
              class="d-flex w-100 email-card" />
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Page,PageHeader,PageSeparator, CourseCard} from 'vue-luma'

  export default {
    layout: 'sticky',
    // middleware: ['auth'],
    components:{
        CourseCard,
      // PageSeparator,
      // PageHeader
    },
    extends: Page,
    data(){
        return {
            development: [
              {
                  image: '../../assets/images/video.png',
                title: 'Gum Disease',
                author: 'Dr. Velda - Senger LLC',
                time: '0:30 PM - 12:30 AM'
              }, {
                  image: '',
                title: 'Broken Tooth',
                author: 'Dr. Velda - Senger LLC'
              }, {
                  image: '',
                title: 'Abscess',
                author: 'Dr. Velda - Senger LLC'
              }, {
                  image: '',
                title: 'Cosmetic',
                author: 'Dr. Velda - Senger LLC',
                position: 'left'
              }
            ],
        }
    },
    computed:{
      ...mapGetters({'loggedUser':'auth/loggedUser'}),
    },
    head() {
      return {
        title: `${this.$t('Bookings')} - ${this.$store.state.brand}`
      }
    },
}

</script>

<style lang="scss">
.email-card {
  .js-image {
    display: none !important;
  }

  .b-rating {
    display: none !important;
  }
}
</style>
