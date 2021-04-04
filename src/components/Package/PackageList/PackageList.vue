<template>
  <div>
    <VList>
      <template v-for="item in list">
        <PackageListItem :key="item.package.name" :item="item" />
        <VDivider :key="'divider-' + item.package.name" />
      </template>
    </VList>

    <VPagination
      total-visible="7"
      :value="page"
      class="my-4"
      :length="paginationLength"
      @input="onPaginate"
    />
  </div>
</template>

<script>
import PackageListItem from './PackageListItem';

export default {
  name: 'PackageList',
  components: {
    PackageListItem,
  },

  props: {
    list: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },

  computed: {
    paginationLength() {
      const length = Math.round((this.total + 1) / 10);
      return length > 100 ? 100 : length;
    },
  },

  methods: {
    onPaginate(page) {
      this.$emit('paginate', page);
    },
  },
};
</script>

<style lang="scss" scoped></style>
