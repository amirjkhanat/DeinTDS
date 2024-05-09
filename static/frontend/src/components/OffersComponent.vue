<template>
  <base-layout>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Offers</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#offerModal">
        Add Offer
      </button>
    </div>
<ag-grid-vue
  :rowData="gridOptions.offers"
  :columnDefs="gridOptions.columnDefs"
  style="height: 500px"
  class="ag-theme-quartz"
>
</ag-grid-vue>
    <div class="modal fade" id="offerModal" tabindex="-1" aria-labelledby="offerModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="offerModalLabel">Add Offer</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm" class="form-group">
              <label class="form-label">
                Name:
                <input v-model="newOffer.name" type="text" class="form-control">
              </label>
              <label class="form-label">
                Offer Type:
                <select v-model="newOffer.offerType" @change="handleOfferTypeChange" class="form-select">
                  <option value="html_file">HTML File</option>
                  <option value="redirect">Redirect</option>
                  <option value="preload">Preload</option>
                  <option value="action">Action</option>
                </select>
              </label>
              <label class="form-label" v-if="newOffer.offerType === 'redirect'">
                Redirect URL:
                <input v-model="newOffer.redirectUrl" type="text" class="form-control">
              </label>
              <label class="form-label">
                Partner Program:
                <select v-model="newOffer.partnerProgram" class="form-select">
                  <option v-for="program in partnerPrograms" :value="program.id" :key="program.id">
                    {{ program.name }}
                  </option>
                </select>
              </label>
              <select v-if="newOffer.offerType === 'action'" v-model="newOffer.actionType" @change="handleActionTypeChange" class="form-select">
                <option value="404">404 Not Found</option>
                <option value="redirect">Redirect to another campaign</option>
                <option value="html">Show as HTML</option>
              </select>
              <select v-if="newOffer.offerType === 'action' && newOffer.actionType === 'redirect'" v-model="newOffer.campaign" class="form-select">
                <option v-for="campaign in campaigns" :value="campaign.id" :key="campaign.id">
                  {{ campaign.name }}
                </option>
              </select>
              <input v-if="newOffer.offerType === 'html_file'" type="file" @change="handleFileUpload" class="form-control">
              <input v-if="newOffer.offerType === 'preload'" type="text" v-model="newOffer.preloadUrl" class="form-control">
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" form="offerForm">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component
import ActionButtons from "@/components/Offers/ActionButtons.vue"; // Import the ActionButtons component

export default {
  name: 'OffersComponent',
  components: {
    BaseLayout,
    AgGridVue, // Add Vue Data Grid component
    // eslint-disable-next-line vue/no-unused-components
    ActionButtons, // Add ActionButtons component
  },
  data() {
    return {
      newOffer: {
        name: '',
        offerType: 'html_file',
        partnerProgram: '',
        htmlFile: null,
        redirectUrl: '',
        preloadUrl: '',
        actionType: '',
        campaign: null
    },
      partnerPrograms: [], // define partnerPrograms here
      gridOptions: {
        autoSizeStrategy: {
        type: 'fitGridWidth',
        defaultMinWidth: 100,
        columnLimits: [
            {
                colId: 'id',
                minWidth: 900
            }
        ]
    },

        components: {
          ActionButtons: ActionButtons,
        },
        columnDefs: [
          { field: "id", headerName: "ID" },
          { field: "name", headerName: "Name" },
          { field: "offer_type", headerName: "Offer Type" },
          {
            field: "actions",
            pinned: 'right',
            headerName: "Actions",
            cellRenderer: 'ActionButtons',
            cellRendererParams: (params) => ({
              onEdit: this.onEdit,
              onDelete: this.onDelete,
              onShow: this.onShow,
              data: params.data
            })
          }
        ],
        frameworkComponents: {
          ActionButtons: ActionButtons
        },
      },
    };
  },
  computed: {
    sortedOffers() {
      let arrayCopy = [...this.offers];
      const key = this.sortKey;
      const asc = this.sortAsc;
      arrayCopy.sort(function(a, b) {
        if (a[key] < b[key]) return asc ? -1 : 1;
        if (a[key] > b[key]) return asc ? 1 : -1;
        return 0;
      });
      return arrayCopy;
    }
  },
methods: {
  async fetchOffers() {
    try {
      const response = await fetch('http://127.0.0.1/admin/api/offers/', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      if (!response.ok) { // if HTTP-status is 404, 500 or such
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.gridOptions.offers = data; // Update the offers data here
    } catch (error) {
      console.error('Failed to fetch offers:', error);
    }
  },
  async fetchPartnerPrograms() {
    try {
      const response = await fetch('http://127.0.0.1/admin/api/partner-programs/', {
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      });
      if (!response.ok) { // if HTTP-status is 404, 500 or such
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.partnerPrograms = data;
    } catch (error) {
      console.error('Failed to fetch partner programs:', error);
    }
  },
    fetchCampaigns() {
      // Here you will fetch the campaigns from your API when it's ready
      // For now, you can use dummy data
      this.campaigns = [
        { id: 1, name: 'Campaign 1' },
        { id: 2, name: 'Campaign 2' },
        // ...
      ];
    },
    submitForm() {
      this.offers.push(this.newOffer);
      this.newOffer = {
        name: '',
        offerType: 'html_file',
        partnerProgram: '',
        htmlFile: null,
        redirectUrl: '',
        preloadUrl: '',
        actionType: '',
        campaign: null
      };
    },
    handleOfferTypeChange() {
      this.newOffer.htmlFile = this.newOffer.offerType === 'html_file' ? '' : null;
      this.newOffer.redirectUrl = this.newOffer.offerType === 'redirect' ? '' : null;
      this.newOffer.preloadUrl = this.newOffer.offerType === 'preload' ? '' : null;
      this.newOffer.actionType = this.newOffer.offerType === 'action' ? '' : null;
    },
    handleActionTypeChange() {
      this.newOffer.campaign = this.newOffer.actionType === 'redirect' ? '' : null;
    },
    handleFileUpload(event) {
      this.newOffer.htmlFile = event.target.files[0];
    },
    sortById() {
      this.sortKey = 'id';
      this.sortAsc = !this.sortAsc;
    },
    sortByName() {
      this.sortKey = 'name';
      this.sortAsc = !this.sortAsc;
    },
    sortByOfferType() {
      this.sortKey = 'offer_type';
      this.sortAsc = !this.sortAsc;
    }
  },
  created() {
    this.fetchOffers();
    this.fetchPartnerPrograms();
    this.fetchCampaigns();
  }
};
</script>