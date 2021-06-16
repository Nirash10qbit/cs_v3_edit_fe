<template>
  <fixed-layout
    :container-class="containerClass"
    :drawer-align="mainDrawerAlign"
    :sidebar-type="sidebarType"
    :sidebar-variant="sidebarVariant"
    :sidebar-brand="$store.state.brand"
    :sidebar-search="sidebarSearch"
    sidebar-search-form-class="search-form--black"
    :sidebar-brand-class="sidebarBrandClass"
    :sidebar-menu="$store.getters['sidebarMenuConfig/layoutMenu']"
    :header-class="headerClass"
    :header-effects="headerEffects"
    :header-image="headerImage"
    :header-content-class="headerContentClass"
    :header-condenses="headerCondenses"
    :header-content-component="headerContentComponent"
    :header-content-component-props="headerContentComponentProps"
    :sub-layout="subLayout"
    :sub-layout-has-scrolling-region="subLayoutHasScrollingRegion"
    :sub-layout-drawer="subLayoutDrawer"
    :sub-layout-drawer-id="subLayoutDrawerId"
    :sub-layout-drawer-align="subLayoutDrawerAlign"
    :navbar-type="navbarType"
    :navbar-variant="navbarVariant"
    :navbar-container-class="navbarContainerClass"
    :navbar-brand="$store.state.brand"
    :navbar-full-sample-guest-mode="guest"
    :footer-brand="$store.state.brand">

    <!-- Replace Navbar Component -->
    <!-- <template v-slot:navbar>
      <div class="navbar-height bg-white px-3">Replace Navbar Component</div>
    </template> -->
  
    <template
      v-slot:navbar-content>
      <template
        v-if="$auth.loggedIn">
        <b-navbar-brand
          href="#">
          <img
            src="../assets/images/logo-new.png"
            width="200">

        </b-navbar-brand>
        <b-navbar-nav>
          <b-nav-item-dropdown
            right
            toggle-class="d-flex align-items-center dropdown-user-link"
            class="dropdown-user">
            <template #button-content>
              <template v-if="$auth.loggedIn">
                <div class="mr-2">
                  <small>
                    Teams
                  </small>
                </div>
              </template>
              <template v-if="!$auth.loggedIn" />
            </template>

            <b-dropdown-item>
              <Notification />
            </b-dropdown-item>
            <b-dropdown-divider />

            <b-dropdown-item
              :to="{ path: '/teams/team_list'}">
              <span>View all Teams</span>
            </b-dropdown-item>
            <b-dropdown-item
              :to="{ path: '/teams/team_create'}">
              <span>Create Team</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav>
          <div class="p-2 px-4  border-top-3">
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
                        placeholder="Search files" />
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
        </b-navbar-nav>
        <b-navbar-nav
          class="ml-auto">

          <b-nav-item-dropdown
            right
            toggle-class="d-flex align-items-center dropdown-user-link"
            class="dropdown-user">
            <template #button-content>
              <template v-if="$auth.loggedIn">
                <div class="mr-2">
                  <small>
                    {{ $auth.user.name }}
                  </small>
                </div>
              </template>
              <template v-if="!$auth.loggedIn" />

              <b-avatar
                size="40"
                src="../assets/images/13.png"
                variant="light-primary"
                class="badge-minimal" />
            </template>

            <b-dropdown-item
              :to="{ path: '/auth/profile'}">
              <span>Profile</span>
            </b-dropdown-item>

            <b-dropdown-item
              @click="logout">
              <span>Logout</span>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </template>
      <template
        v-if="!$auth.loggedIn">
        <b-navbar-nav />
      </template>
     
    </template>
    <!-- Replace Navbar Content -->
    <!-- <template v-slot:navbar-content>
      Replace Navbar Content
    </template> -->

    <!-- Replace Sidebar Component -->
    <!-- <template v-slot:sidebar>
      Replace Sidebar Component
    </template> -->

    <!-- Replace Sidebar Content -->
    <!-- <template v-slot:sidebar-content="{sidebar}">
      <div class="sidebar-heading">Replace Sidebar Content</div>
      <pre 
        class="sidebar-text"
        v-text="sidebar.menu" />
    </template> -->

    <!-- Page Content -->
    <nuxt />

    <!-- Footer Content -->
    <!-- <template v-slot:footer-content="footerProps">
      <p class="text-70 brand mb-24pt">
        <img 
          class="brand-icon" 
          :src="footerProps.footerLogo" 
          width="30" 
          :alt="footerProps.footerBrand"> 
        {{ footerProps.footerBrand }}
      </p>

      <p class="text-50 measure-lead-max small">A beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.</p>

      <pre v-text="footerProps" />
    </template> -->

    <!-- Footer Links -->
    <!-- <template v-slot:footer-links>
      <p class="mb-8pt d-flex">
        <a class="text-70 text-underline mr-8pt small">Terms</a>
        <a class="text-70 text-underline small">Privacy</a>
      </p>
    </template> -->

    <!-- Footer Copyright Text -->
    <!-- <template v-slot:footer-copyright-text>
      Copyright 2020 &copy; All rights reserved!
    </template> -->

    <!-- Footer Description Text -->
    <!-- <template v-slot:footer-description-text>
      Hello World!
    </template> -->

    <!-- Replace Footer Component -->
    <!-- <template v-slot:footer>
      Replace Footer Component
    </template> -->

    <!-- App Settings -->
    <template v-slot:after-layout>
      <client-only>
        <app-settings
          v-if="$store.state.settings.ui && $route.params.layout" />
      </client-only>
    </template>

  </fixed-layout>
</template>

<script>
  import {FixedLayout} from 'vue-luma'
  import AppSettings from '~/components/Settings'
  import Notification from '~/components/Notification'
  import mainDrawerMixin from '~/mixins/main-drawer'
  import sidebarConfigMixin from '~/mixins/sidebar-config'
  import navbarConfigMixin from '~/mixins/navbar-config'
  import layoutConfigMixin from '~/mixins/layout-config'
  import subLayoutMixin from '~/mixins/sub-layout'

  export default {
    components: {
      FixedLayout,
      AppSettings,
      Notification,
    },
    mixins: [
      mainDrawerMixin,
      sidebarConfigMixin,
      navbarConfigMixin,
      layoutConfigMixin,
      subLayoutMixin,
    ],
    data() {
      return {
        headerClass: null,
        headerEffects: 'waterfall',
        headerImage: null,
        headerContentClass: null,
        headerCondenses: false,
        headerContentComponent: null,
        headerContentComponentProps: null,
        guest: false
      }
    },
    computed: {
      sidebarSearch() {
        return true
      },
      sidebarBrandClass() {
        return null
      },
      sidebarConfigKey() {
        return this.mainDrawerSidebar
      },
    },
    created() {
      this.$root.$on('luma::guest', guest => this.guest = guest)
      this.$root.$on('luma::headerClass', headerClass => this.headerClass = headerClass)
      this.$root.$on('luma::headerEffects', headerEffects => this.headerEffects = headerEffects)
      this.$root.$on('luma::headerImage', headerImage => this.headerImage = headerImage)
      this.$root.$on('luma::headerContentClass', headerContentClass => this.headerContentClass = headerContentClass)
      this.$root.$on('luma::headerCondenses', headerCondenses => this.headerCondenses = headerCondenses)
      this.$root.$on('luma::headerContentComponent', headerContentComponent => this.headerContentComponent = headerContentComponent)
      this.$root.$on('luma::headerContentComponentProps', headerContentComponentProps => this.headerContentComponentProps = headerContentComponentProps)
    },
        methods:{
      logout: async function () {
        await this.$auth.logout()
        await this.$router.replace({path: '/auth/login'})
      }
    }
  }
</script>
