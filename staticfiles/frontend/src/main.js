// import only the necessary dependencies
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import DashboardComponent from './components/DashboardComponent.vue'
import CampaignsComponent from './components/CampaignsComponent.vue'
import LandingsComponent from './components/LandingsComponent.vue'
import OffersComponent from './components/OffersComponent.vue'
import PartnerProgramsComponent from './components/PartnerProgramsComponent.vue'
import TrafficSourcesComponent from './components/TrafficSourcesComponent.vue'
import DomainsComponent from './components/DomainsComponent.vue'

const routes = [
  { path: '/admin', component: DashboardComponent },
  { path: '/admin/campaigns', component: CampaignsComponent },
  { path: '/admin/landings', component: LandingsComponent },
  { path: '/admin/offers', component: OffersComponent },
  { path: '/admin/partner-programs', component: PartnerProgramsComponent },
  { path: '/admin/traffic-sources', component: TrafficSourcesComponent },
  { path: '/admin/domains', component: DomainsComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// create the app and mount it
createApp(App).use(router).mount('#app')