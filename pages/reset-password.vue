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
      <b-card>

        <!-- form -->

        <b-form
          @submit.prevent="resetPassword">


          <!-- email -->
          <b-form-group label-for="email">
            <template v-slot:label>
              Email
            </template>
            <b-form-input
              id="email"
              v-model="form.email"
              type="text"
              :state="this.errors && this.errors.email ? false : null"
              placeholder="Enter Email" />
            <b-form-invalid-feedback
              v-if="errors && errors.email"
              id="email-feedback">
              {{ errors.email[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- password -->
          <b-form-group label-for="password">
            <template v-slot:label>
              Password
            </template>
            <b-form-input
              id="password"
              v-model="form.password"
              type="password"
              :state="this.errors && this.errors.password ? false : null"
              placeholder="Enter password" />
            <b-form-invalid-feedback
              v-if="errors && errors.password"
              id="password-feedback">
              {{ errors.password[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- Comfirm password -->
          <b-form-group label-for="input-password">
            <template v-slot:label>
              Confirmed Password
            </template>
            <b-form-input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              :state="this.errors && this.errors.password_confirmation ? false : null"
              placeholder="Enter password" />
            <b-form-invalid-feedback
              v-if="errors && errors.password_confirmation"
              id="password_confirmation-feedback">
              {{ errors.password_confirmation[0] }}
            </b-form-invalid-feedback>
          </b-form-group>

          <!-- button-->
          <div
            class="d-flex justify-content-end">
            <b-button
              type="submit"
              variant="primary"
              class=" ml-2">
              Set Password
            </b-button>
          </div>
        </b-form>
      </b-card>

      <!--footer-->
      <div
        class="d-flex justify-content-center mt-3">
        Back to
        <nuxt-link
          :to="{ path: '/auth/login'}"
          class="px-1 ">
          <u>Sign in</u>
        </nuxt-link>
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
        email: this.$route.query.email || '',
        password: '',
        password_confirmation: '',
        token: this.$route.query.token || '',
      }
    }
  },
  mounted() {
    console.log(this.$route.query)
  },
  methods:{
     async resetPassword() {
       try{
         await this.$axios.get('sanctum/csrf-cookie')
         await this.$axios.post('reset-password', this.form)
         await this.$router.replace({path: '/auth/login'})
       }catch (error) {
         if(error.response.status === 422) {
           this.errors = error.response.data.errors;
         }
       }
    }
  }
}
</script>
