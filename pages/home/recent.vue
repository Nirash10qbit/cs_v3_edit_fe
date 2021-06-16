<template>
  <div>
    <h5>Recent</h5>
    <div
      :class="containerClass"
      class="page-section">
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
              v-slot:cell(thead)="data">
              <b-media
                class="align-items-center"
                vertical-align="center">
                <fmv-avatar
                  slot="aside"
                  :src="data.item.image"
                  :alt="data.item.course"
                  landscape
                  class="overlay overlay--primary">
                  <template v-slot:after-img>
                    <span class="overlay__content rounded" />
                  </template>
                </fmv-avatar>
                <b-link
                  class="text-body">
                  <strong>{{ data.item.course }}</strong>
                </b-link><br>
                <small class="text-muted mr-1">
                  {{ $t('Invoice') }}
                  <b-link
                    :to="routeTo('layout-instructor-invoice')"
                    style="color: inherit;"
                    v-text="data.item.document" />
                  - &dollar;{{ data.item.amount }} USD
                </small>
              </b-media>
            </template>

            <template
              v-slot:cell(course)="data">
              <b-media
                class="align-items-center"
                vertical-align="center">
                <fmv-avatar
                  slot="aside"
                  :src="data.item.image"
                  :alt="data.item.course"
                  landscape
                  class="overlay overlay--primary">
                  <template v-slot:after-img>
                    <span class="overlay__content rounded" />
                  </template>
                </fmv-avatar>
                <b-link
                  class="card-title">
                  <strong>{{ data.item.course }}</strong>
                </b-link>
                <small
                  class="text-muted">
                  Invoice # {{ data.item.revenue }} 
                </small>
                <small
                  class="text-muted">
                  -$ {{ data.item.amount }} USD
                </small>
                
              </b-media>
            </template>

            <template
              v-slot:cell(fees)="data">
              <div
                v-if="data.item.fees"
                class="text-70">
                &dollar;{{ data.item.fees }} USD
              </div>
              <md-icon
                v-else
                class="text-muted">remove</md-icon>
            </template>

            <template
              v-slot:cell(revenue)="data">
              <div
                v-if="data.item.revenue"
                class="text-70">
                &dollar;{{ data.item.revenue }} USD
              </div>
              <md-icon
                v-else
                class="text-muted">remove</md-icon>
            </template>

          </b-table>
        
          <div class="card-footer d-flex align-items-center">
            <pager class="m-0" />
            <!-- <div class="ml-auto">
              Total <md-icon>remove</md-icon> <strong>&dollar;6,129 USD</strong>
            </div> -->
          </div>
        </b-card>
      </div>
    </div>
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
            key: 'course',
            label: 'Course',
            sortable: true,
   
          },
          {
            key: 'document',
            label: 'Document',
            sortable: true,
             thStyle: {
              display: 'none'
            }
          },

          {
            key: 'purchased_at',
            label: 'Date',
            sortable: true,
            thStyle: {
              display: 'none'
            }
          }
        ],
      items: [
 {
            purchased_at: '12 Nov 2018',
            course: 'CSYD-220 Unable to connect to video call inbuilt browser',
            image: '/images/paths/angular_routing_200x168.png',
            document: 'Edited',
            amount: 89,
            fees: 120,
            revenue: 8737
          },
          {
            purchased_at: '13 Nov 2018',
            course: "CSYD-179 Associate Pro-issue when sining up",
            image: '/images/paths/angular_testing_200x168.png',
            document: 'Connected',
            amount: 89,
            fees: null,
            revenue: null
          },
          {
            purchased_at: '14 Nov 2018',
            course: 'CSYD-179 Associate Pro-issue when sining up',
            image: '/images/paths/typescript_200x168.png',
            document: 'Edited',
            amount: 89,
            fees: null,
            revenue: null
          },
      ],}
    }
}
  
</script>
