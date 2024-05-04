<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/admin">DeinTDS</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item" v-for="item in menuItems" :key="item.name">
              <router-link class="nav-link" :to="item.path" active-class="active">{{ item.name }}</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ username }}
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/admin/profile">My profile</router-link>
                <a class="dropdown-item" href="#" @click="logout">Log Out</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BaseLayout',
  data() {
    return {
      username: 'User', // Replace with actual username
      menuItems: [
        {name: 'Dashboard', path: '/admin'},
        {name: 'Campaigns', path: '/admin/campaigns'},
        {name: 'Landings', path: '/admin/landings'},
        {name: 'Offers', path: '/admin/offers'},
        {name: 'Partner Programs', path: '/admin/partner-programs'},
        {name: 'Traffic Sources', path: '/admin/traffic-sources'},
        {name: 'Domains', path: '/admin/domains'},
      ],
    };
  },
  methods: {
    logout() {
      // Your logout code here
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>