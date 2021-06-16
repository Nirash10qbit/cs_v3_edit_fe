<template>
  <div>
    <!-- Back button & create subscription button -->

    <div class="px-4 bg-white mt-n3">
      <b-row class="d-flex">
        <b-col class="mr-auto">

          <div class="d-flex flex-row">
            <div class="p-2">
              <b-button
                class="btn-sm-block border-1"
                variant="white"
                :to="{ path: '/home'}">
                <md-icon class="">
                  arrow_back_ios
                </md-icon>
              </b-button>
            </div>
            <div class="pt-3">
              <h5>
                All Teams
              </h5>
            </div>
          </div>
        </b-col>
        <b-col class="pt-2">
          <b-button
            class="btn-sm-block float-right border-1"
            variant="primary"
            :to="{ path: '/teams/team_create'}">
            <md-icon class="mr-1">
              add
            </md-icon>
            <span>
              Add New Team
            </span>
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-container
      md="12"
      class="mt-5">

      <div>
        <b-card>
          <b-table
            ref="table"
            :items="items"
            :fields="fields"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            head-variant="light"
            class="table-nowrap"
            responsive>
            <template
              v-slot:head(purchased_at)>
        &nbsp;
            </template>

            <template
              v-slot:cell(purchased_at)="data">
              <small class="text-muted text-uppercase">{{ data.item.purchased_at }}</small>
            </template>

            <template
              v-slot:head(thead)>
              <a
                v-for="field in hiddenFields"
                :key="field.key"
                :class="sortByClass(field.key)"
                class="sort"
                href="#"
                @click.stop.prevent="sortByKey($event, field)"
                v-text="field.label" />
            </template>

            <template
              v-slot:cell(team)="data">
              <b-media
                class="align-items-center"
                vertical-align="center">
                <fmv-avatar
                  slot="aside"
                  :src="data.item.image"
                  :alt="data.item.team"
                  landscape
                  class="overlay overlay--primary">
                  <template v-slot:after-img>
                    <span class="overlay__content rounded" />
                  </template>
                </fmv-avatar>
                <b-link
                  class="card-title">
                  <strong>{{ data.item.team_name }}</strong>
                </b-link>
                <small
                  class="text-muted">
                  {{ data.item.members }}  Members 
                </small>
              </b-media>
            </template>

            
            <template
              v-slot:cell(members_avatar)>
              <div>
                <b-avatar-group size="35px">
                  <b-avatar
                    src="~/assets/images/avatars/13.png"
                    variant="info" />
                  <b-avatar
                    text="JA"
                    variant="info" />
                  <b-avatar
                    src="~/assets/images/avatars/2.png" />
                  <b-avatar
                    src="~/assets/images/avatars/5.png" />
                  <b-avatar
                    src="~/assets/images/avatars/11.png" />
                  <b-avatar
                    src="~/assets/images/avatars/6.png" />
                </b-avatar-group>
              </div>
            </template>


            <template
              v-slot:cell(action)>
              <span>
                <b-dropdown
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret>
                  <template v-slot:button-content>
                    <md-icon>
                      more_vert
                    </md-icon>
                  </template>
                  <b-dropdown-item
                    :to="{ path: '/teams/1'}">
                    <md-icon>edit</md-icon>
                    <span>Edit</span>
                  </b-dropdown-item>
                  <b-dropdown-item>
                    <md-icon>delete</md-icon>
                    <span>Delete</span>
                  </b-dropdown-item>
                </b-dropdown>
              </span>
            
              
            </template>        

          </b-table>
        
          <div class="card-footer d-flex align-items-center">
            <pager class="m-0" />
          </div>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Page,PageHeader,PageSeparator} from 'vue-luma'

  export default {
    layout: 'fixed',
    // middleware: ['auth'],
    components:{
      // PageSeparator,
      //PageHeader
    },
    extends: Page,

    computed:{
      ...mapGetters({'loggedUser':'auth/loggedUser'}),
    },
    methods: {
  async onRowDoubleClick(params) {
    await this.$router.replace({path:'/teams/1'})
    },
    },
    head() {
      return {
        title: `${this.$t('Bookings')} - ${this.$store.state.brand}`
      }
    },
    // eslint-disable-next-line vue/order-in-components
    data() {
    return {
      perPage: 10,
      pageOptions: [3, 5, 10],
      totalRows: 1,
      currentPage: 1,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      filterOn: [],
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
      fields:
        [
         {
            key: 'team',
            label: 'Team',
            sortable: true,
   
          },
          {
            key: 'owner',
            label: 'Owner',
            sortable: false,
            //  thStyle: {
            //   display: 'none'
            // }
          },
         {
            key: 'members_avatar',
            label: 'Members',
            sortable: false,
            //  thStyle: {
            //   display: 'none'
            // }
          },
          {
            key: 'purchased',
            label: 'Date',
            sortable: false,
            //  thStyle: {
            //   display: 'none'
            // }
          },

          {
            key: 'action',
            label: 'Action',
            sortable: false,
            // thStyle: {
            //   display: 'none'
            // }
          }
        ],
      items: [
 {
            purchased: '12 Nov 2018',
            team_name: 'New One',
            image: '/images/paths/angular_routing_200x168.png',
            owner: 'Ajmal',
            amount: 89,
            fees: 120,
            members: 8
          },
          {
            purchased: '13 Nov 2018',
            team_name: "Chairsyde",
            image: '/images/paths/angular_testing_200x168.png',
            owner: 'Me',
            amount: 89,
            fees: null,
            members: 10
          },
          {
            purchased: '14 Nov 2018',
            team_name: 'CSYD Associate Pro',
            image: '/images/paths/typescript_200x168.png',
            owner: 'Nimal',
            amount: 89,
            fees: null,
            members: 5
          },
      ],}
    }
}
  
</script>
