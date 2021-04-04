<template>
  <VForm @submit.prevent="onSearch" class="the-search">
    <VTextField v-model="search" solo hide-details dense />

    <VBtn
      class="the-search__button"
      type="submit"
      color="white"
      :loading="loading"
    >
      Search
    </VBtn>
  </VForm>
</template>

<script>
export default {
  name: 'TheSearch',
  data: () => ({
    search: '',
    loading: false,
  }),

methods: {
    onSearch() {
      if (!this.search) return;
      this.loading = true;

      this.$store
        .dispatch('package/findPackages', { query: this.search, page: 1 })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.the-search {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 150px;
  grid-gap: 10px;

  &__button {
    height: 100% !important;
  }
}
</style>
