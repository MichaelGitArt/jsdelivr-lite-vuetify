<template>
  <VDialog v-model="state" width="700">
    <VCard class="px-4 py-6">
      <PackageDialogContent v-if="currPackage" />
      <VLayout v-else align-center flex-column pa-8>
        <VProgressCircular :size="50" color="primary" indeterminate />
      </VLayout>
    </VCard>
  </VDialog>
</template>

<script>
import { mapState } from 'vuex';
import PackageDialogContent from './PackageDialogContent';

export default {
  name: 'PackageDialog',
  components: {
    PackageDialogContent,
  },

  computed: {
    ...mapState('package/single', ['currPackage', 'modalState']),
    state: {
      get() {
        return this.modalState;
      },
      set(val) {
        if (!val) {
          this.$store.dispatch('package/single/reset');
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
