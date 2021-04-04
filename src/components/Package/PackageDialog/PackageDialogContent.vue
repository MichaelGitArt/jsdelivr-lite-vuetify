<template>
  <div>
    <h2>{{ currPackage.name }}</h2>
    <PackageMeta :package-data="currPackage" class="mb-8" />

    <PackageDialogFiles />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PackageMeta from '@/components/Package/PackageMeta';
import PackageDialogFiles from './PackageDialogFiles';

export default {
  name: 'PackageDialogContent',

  components: {
    PackageMeta,
    PackageDialogFiles,
  },

  computed: {
    ...mapState('package/single', ['currPackage', 'versions', 'structure']),
  },
};
</script>

<style lang="scss" scoped></style>
