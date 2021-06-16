<template>
  <div>
    <div class="p-2 px-4 bg-white mt-n3">
      <b-row class="d-flex">
        <b-col class="mr-auto">

          <div class="d-flex flex-row">
            <div class="p-2">

              <!--  back button-->
              <b-button
                class="btn-sm-block border-1"
                variant="white"
                :to="{ path: '/teams/1'}">
                <md-icon>
                  arrow_back_ios
                </md-icon>
              </b-button>

            </div>
            <div class="pt-3">
              <h5>
                Landing page
              </h5>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
    <b-container
      md="8"
      class="mt-4">

      <!--  Member Details-->

      <b-row>
        <b-col
          md="4"
          class="mt-2">
          <h5>Member Details</h5>
        </b-col>
        <b-col
          md="8"
          class="mt-2">
          <b-card>
            <b-form>
              <b-row>
                <b-col>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Member Id
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    First Name
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Last Name
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Email
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Phone
                  </dt>
                </b-col>
                <b-col
                  class="pt-1">
                  <dd>16BjkiSX5Q7tIJfC</dd>
                  <dd>Ajay</dd>
                  <dd>Jason</dd>
                  <dd>ajay447@gmail.com</dd>
                  <dd>9494416626</dd>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>

      <!--  Configurations-->
      <b-row>
        <b-col
          md="4"
          class="mt-2">
          <h5>Configurations</h5>
        </b-col>
        <b-col
          md="8"
          class="mt-2">
          <b-card>
            <b-form>
              <b-row>
                <b-col>
                  <div
                    class="d-flex justify-content-center">
                    Landing page
                  </div>
                  <div><hr></div>
                  <div>Near bus stand</div>
                  <div>Kovvur - WC2N4DL</div>
                  <div>AP</div>
                  <div>United Kingdom</div>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>

      <!-- team details-->
      <b-row>
        <b-col
          md="4"
          class="mt-2">
          <h5>Team Details</h5>
        </b-col>
        <b-col
          md="8"
          class="mt-2">
          <b-card>
            <b-form>
              <b-row>
                <b-col>
                  <dt
                    class="p-1 d-flex justify-content-end">J
                    SON Meta Data
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Auto Collection
                  </dt>
                  <dt
                    class="p-1 d-flex justify-content-end">
                    Exempt from tax
                  </dt>
                </b-col>
                <b-col class="pt-1">
                  <dd>Add</dd>
                  <dd>on</dd>
                  <dd>No</dd>
                </b-col>
              </b-row>
            </b-form>
          </b-card>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>

export default {
  layout: 'fixed',

  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

