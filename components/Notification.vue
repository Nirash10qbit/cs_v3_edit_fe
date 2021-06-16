<template>
  <div>
    <fmv-perfect-scrollbar 
      class="position-relative">
      <b-list-group flush>
        <b-list-group-item
          v-for="item in notificatios"
          :key="item.id"
          :to="{ path: '/teams/1'}">
          <span>
            <fmv-avatar
              slot="aside"
              :src="item.image"
              landscape
              class="overlay overlay--primary mr-2" />
          </span>
          <span
            v-text="item.name" />
        </b-list-group-item>
      </b-list-group>
    </fmv-perfect-scrollbar>
  </div>
</template>

<script>
  import {FmvPerfectScrollbar} from 'fmv-layout'

  export default {
    components: {
      FmvPerfectScrollbar,

    },
       data() {
      return {
        isInstructor: null,
        notificatios: [
          {
            id: 1,
            image:'/images/paths/angular_routing_200x168.png',
            name: 'New One',
          },
          {
            id: 2,
            image:'/images/paths/typescript_200x168.png',
            name:'Chairsyde',
          },
        
        ],

      }
    },
  }
</script>