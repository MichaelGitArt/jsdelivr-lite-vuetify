<template>
  <VListItem :key="item.package.name">
    <VListItemContent class="justify-center">
      <div class="item-title text-h5" @click="onOpenDetails">
        {{ item.package.name }}
      </div>

      <PackageMeta :package-data="item.package" />
    </VListItemContent>
  </VListItem>
</template>

<script>
import PackageMeta from '@/components/Package/PackageMeta';

export default {
  name: 'PackageListItem',
  components: {
    PackageMeta,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onOpenDetails() {
      this.$store.dispatch('package/single/fetchPackage', this.item.package);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-title {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
</style>
