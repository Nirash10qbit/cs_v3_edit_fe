<template>
  <div>
    <b-row>
      <b-col
        md="12"
        class="mt-3 mb-4">
        <h5>Switch to</h5>
        <b-row>
          <b-col
            cols="12"
            md="2">
            <div class="d-flex justify-content-center">
              <img

                src="../../assets/images/time.png"
                width="80"
                height="80">
            </div>
            <div class="d-flex justify-content-center mt-2">
              <h6>BOOKING</h6>
            </div>
          </b-col>
          <b-col
            cols="12"
            md="2">
            <div class="d-flex justify-content-center">
              <img

                src="../../assets/images/12.png"
                width="80"
                height="80">
            </div>
            <div class="d-flex justify-content-center mt-2">
              <h6>EDUCATION CONTENT</h6>
            </div>
          </b-col>
          <b-col
            cols="12"
            md="2">
            <div class="d-flex justify-content-center">
              <img

                src="../../assets/images/email.png"
                width="80"
                height="80">
            </div>
            <div class="d-flex justify-content-center mt-2">
              <h6>SUMMERY EMAIL</h6>
            </div>
          </b-col>
          <b-col
            cols="12"
            md="2">
            <div class="d-flex justify-content-center">
              <img

                src="../../assets/images/video.png"
                width="80"
                height="80">
            </div>
            <div class="d-flex justify-content-center mt-2">
              <h6>LIVE SESSION</h6>
            </div>
          </b-col>
          <b-col
            cols="12"
            md="2">
            <div class="d-flex justify-content-center ">
              <img

                src="../../assets/images/doc.png"
                width="80"
                height="80">
            </div>
            <div class="d-flex justify-content-center mt-2">
              <h6>VIDEO CONSULTATION</h6>
            </div>
          </b-col>
        </b-row>

        <!-- form -->


      </b-col>
    </b-row>
  </div>
</template>


<script>


export default {
  layout: 'fixed',
  components: {
  },

  data() {
    return {
      errors:{},
      form: {
        password: '',
      },

    }
  },
  methods: {
  }
}
</script>


