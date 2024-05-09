<template>
  <div class="action-buttons">
<<<<<<< Updated upstream
    <button class="btn btn-info btn-sm" @click="show">Show</button>
    <button class="btn btn-primary btn-sm" @click="editOffer">Edit</button>
    <button class="btn btn-danger btn-sm" @click="$emit('delete', params.data)">Delete</button>
=======
    <button class="btn btn-info btn-sm m-1" @click="show">Show</button>
    <button class="btn btn-primary btn-sm m-1" @click="edit">Edit</button>
    <button class="btn btn-danger btn-sm m-1" @click="deleteItem">Delete</button>
>>>>>>> Stashed changes
  </div>
</template>

<script>
export default {
<<<<<<< Updated upstream
methods: {
  // ...
  editOffer(offer) {
    this.newOffer = { ...offer };
    // Здесь вы можете открыть модальное окно
  },
  deleteOffer(offer) {
    fetch(`http://127.0.0.1/admin/api/offers/${offer.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Add any other necessary headers here
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Здесь вы можете обновить список предложений
      this.fetchOffers();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  },
  // ...
}
};
</script>

<style scoped>
.action-buttons > .btn {
  margin-right: 5px;
}
</style>
=======
  methods: {
    // ...
    edit() {
      this.params.value.onEdit(this.params.data);
    },
    deleteItem() {
      this.params.value.onDelete(this.params.data);
    },
    show() {
      this.params.value.onShow(this.params.data);
    },
colDefs: [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "offer_type", headerName: "Offer Type" },
  {
    field: "actions",
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
    // ...
  },
  // ...
};
</script>
>>>>>>> Stashed changes
