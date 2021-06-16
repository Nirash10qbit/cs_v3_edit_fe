<template>
  <div
    class="d-flex align-items-center"
    style="min-height: 100vh">
    <div
      class="col-sm-8 col-md-6 col-lg-4 mx-auto"
      style="min-width: 300px">
      <div
        class="mb-2 mt-5 d-flex justify-content-center"
        width="30pt"
        height="30pt">
        <img
          src="~/assets/images/favicon.png"
          width="50">
      </div>
      <div class="d-flex justify-content-center mb-2 navbar-light">
        <!-- Brand -->
        <h4>CHAIRSYDE</h4>
      </div>
      <!--    form-->
      <b-card>
        <b-form
          class="auth-login-form mt-2"
          @submit.prevent="confirmPassword">


          <!-- password -->
          <b-form-group label-for="input-password">
            <template v-slot:label>
              Password
            </template>
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              :state="this.errors && this.errors.password ? false : null"
              placeholder="Enter password" />
            <b-form-invalid-feedback
              v-if="errors && errors.password"
              id="input-password-feedback">
              {{ errors.password[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- button-->
          <div class="d-flex justify-content-end">
            <b-button
              type="submit"
              variant="primary"
              class="">
              Confirm Password
            </b-button>
          </div>

        </b-form>
      </b-card>

      <!--  Footer-->
      <div
        class="d-flex justify-content-center">
        <p>
          Back to
          <nuxt-link
            :to="{ path: '/auth/profile'}"
            class="px-1 mt-2">
            <u>profile</u>
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      errors:{},
      form: {
        password: '',
      }
    }
  },
  methods:{
    async confirmPassword(){
      try{
        await this.$axios.get('sanctum/csrf-cookie')
        await this.$axios.post('user/confirm-password', this.form)
        this.$router.replace({name: this.$route.query.return || 'index'})

      }catch (error) {
        if(error.response.status === 422) {
          this.errors = error.response.data.errors;
        }
      }
    }
  }
}
</script>
