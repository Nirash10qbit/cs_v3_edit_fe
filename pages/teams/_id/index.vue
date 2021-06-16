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
                :to="{ path: '/teams/team_list'}">
                <md-icon class="">
                  arrow_back_ios
                </md-icon>
              </b-button>
            </div>
            <div class="pt-3">
              <h5>
                Team Members
              </h5>
            </div>
          </div>
        </b-col>
        <b-col class="pt-2">
          <b-button
            class="btn-sm-block float-right border-1"
            variant="primary"
            :to="{ path: '/teams/create'}">
            <md-icon class="mr-1">
              add
            </md-icon>
            <span>
              Add Members
            </span>
          </b-button>
        </b-col>
      </b-row>
    </div>

    <b-container
      md="12"
      class="mt-4">
      <!-- Search Button -->

      <div class="p-2 px-4 bg-white border-top-3">
        <b-row class="d-flex">
          <b-col class="mr-auto">
            <div class="d-flex flex-row">
              <div class="p-1">
                <div
                  class="flex search-form form-control-rounded search-form--light"
                  style="min-width: 400px;">
                  <b-form-input
                    v-model="searchTerm"
                    type="text"
                    class="d-inline-block"
                    placeholder="Search Member name / Id " />
                  <b-btn
                    class="pr-3"
                    type="submit"
                    variant="flush">
                    <md-icon v-text="'search'" />
                  </b-btn>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="p-3">
        <b-card>
          <div>
            <div class="custom-search d-flex justify-content-center">
              <b-form-group>
                <div>
                  <b-list-group-item
                    v-for="item in notificatios"
                    :key="item.id">
                    <h4><span v-text="item.name" /> Team Members</h4>
                  </b-list-group-item>
                </div>
              </b-form-group>
            </div>

            <!-- table -->
            <vue-good-table
              :columns="columns"
              :rows="rows"
              :rtl="direction"
              :search-options="{
                enabled: true,
                externalQuery: searchTerm }"
              :select-options="{
                enabled: true,
                selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
                selectionInfoClass: 'custom-class',
                selectionText: 'rows selected',
                clearSelectionText: 'clear',
                disableSelectInfo: true, // disable the select info panel on top
                selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
              }"
              :pagination-options="{
                enabled: true,
                perPage:pageLength
              }"
              @on-row-dblclick="onRowDoubleClick">
              <template
                slot="table-row"
                slot-scope="props">

                <!-- Column: Name & Avatar-->
                <span
                  v-if="props.column.field === 'fullName'"
                  class="text-nowrap">
                  <b-avatar
                    size="35"
                    
                    src="~/assets/images/13.png" 
                    class="mx-1" />
                  <span class="text-nowrap">{{ props.row.firstName }} {{ props.row.lastName }}</span>
                </span>

                <!-- Column: Status -->
                <span v-else-if="props.column.field === 'status'">
                  <b-badge :variant="statusVariant(props.row.status)">
                    {{ props.row.status }}
                  </b-badge>
                </span>

                <!-- Column: Action -->
                <span v-else-if="props.column.field === 'action'">
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
                      <b-dropdown-item>
                        <md-icon>edit</md-icon>
                        <span>Edit</span>
                      </b-dropdown-item>
                      <b-dropdown-item>
                        <md-icon>delete</md-icon>
                        <span>Delete</span>
                      </b-dropdown-item>
                    </b-dropdown>
                  </span>
                </span>

                <!-- Column: Common -->
                <span v-else>
                  {{ props.formattedRow[props.column.field] }}
                </span>
              </template>

              <!-- pagination -->
              <template
                slot="pagination-bottom"
                slot-scope="props">
                <div class="d-flex justify-content-between flex-wrap">
                  <div class="d-flex align-items-center mb-0 mt-1">
                    <span class="text-nowrap ">
                      Showing 1 to
                    </span>
                    <b-form-select
                      v-model="pageLength"
                      :options="['3','5','10']"
                      class="mx-1"
                      @input="(value)=>props.perPageChanged({currentPerPage:value})" />
                    <span class="text-nowrap"> of {{ props.total }} entries </span>
                  </div>
                  <div>
                    <b-pagination
                      :value="1"
                      :total-rows="props.total"
                      :per-page="pageLength"
                      first-number
                      last-number
                      align="right"
                      prev-class="prev-item"
                      next-class="next-item"
                      class="mt-1 mb-0"
                      @input="(value)=>props.pageChanged({currentPage:value})">
                      <template #prev-text>
                        <feather-icon
                          icon="ChevronLeftIcon"
                          size="18" />
                      </template>
                      <template #next-text>
                        <feather-icon
                          icon="ChevronRightIcon"
                          size="18" />
                      </template>
                    </b-pagination>
                  </div>
                </div>
              </template>
            </vue-good-table>
          </div>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table';
export default {
  layout:"fixed",
  components: {
  VueGoodTable,
},

  // middleware: ['auth', 'verified'],
  data() {
    return {
      pageLength: 3,
      dir: false,
      columns: [
        {
          label: 'Name',
          field: 'fullName',
          sortable: true,

        },
        {
          label: 'Email',
          field: 'email',
          sortable: false,
        },
        {
          label: 'Date',
          field: 'startDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
          sortable: false,
        },
        {
          label: 'Phone Number',
          field: 'mobile',
          sortable: false,
        },
        {
          label: 'Status',
          field: 'status',
          sortable: false,
        },
        {
          label: 'Action',
          field: 'action',
          sortable: false,
        },
      ],
         rows: [
          {
              firstName:'Ajay',
              lastName:'Jason',
              email:'ajay447@gmail.com',
              startDate:'2021-1-31',
              mobile:'9494416626',
              status:1,
          },
           {
               firstName:'Kamal',
              lastName:'Barath',
              email:'kamal@gmail.com',
              startDate:'2021-2-3',
              mobile:'9493516543',
              status:1,
          },
          {
              firstName:'Amal',
              lastName:'Samiir',
              email:'amal@gmail.com',
              startDate:'2021-03-12',
              mobile:'9445716123',
              status:'1',
          },
           {
               firstName:'Devid',
              lastName:'Perera',
              email:'devid@gmail.com',
              startDate:'2021-03-30',
              mobile:'9492416626',
              status:'1',
          },
      ],
        notificatios: [
          {
            id: 1,
            image:'/images/paths/angular_routing_200x168.png',
            name: 'New One',
          },
        ],
      searchTerm: '',
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
        {
          1: 'primary',
          2: 'success',
          3: 'danger',
          4: 'warning',
          5: 'info',
        }],
    }
  },
  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current      : 'light-primary',
        Professional : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Applied      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
  },
  methods: {
  async onRowDoubleClick(params) {
    await this.$router.replace({path:'/teams/'})
  }
},
}
</script>
