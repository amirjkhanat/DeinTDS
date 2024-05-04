<template>
  <div class="action-buttons">
    <button class="btn btn-info btn-sm" @click="show">Show</button>
    <button class="btn btn-primary btn-sm" @click="editOffer">Edit</button>
    <button class="btn btn-danger btn-sm" @click="$emit('delete', params.data)">Delete</button>
  </div>
</template>

<script>
export default {
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