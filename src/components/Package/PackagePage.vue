<template>
  <VCard class="py-6 px-4">
    <VFlex
      v-if="notFound"
      class="d-flex flex-column justify-center align-center"
    >
      <VIcon color="error" size="80" class="mb-3">
        mdi-text-box-remove-outline
      </VIcon>
      <h2>Not Found</h2>
    </VFlex>

    <VFlex
      v-else-if="!list"
      class="d-flex flex-column justify-center align-center"
    >
      <VIcon color="primary" size="80" class="mb-3">
        mdi-text-box-search-outline
      </VIcon>
      <h2>Start searching</h2>
    </VFlex>

    <template v-if="list">
      <h2>Packages: "{{ query }}"</h2>

      <PackageList
        :list="list"
        :total="total"
        :page="page"
        @paginate="onPaginate"
      />
    </template>

    <PackageSingleDialog />
  </VCard>
</template>

<script>
import { mapState } from 'vuex';
import PackageList from '@/components/Package/PackageList/PackageList';
import PackageSingleDialog from '@/components/Package/PackageDialog/PackageDialog';

export default {
  name: 'PackagePage',
  components: {
    PackageList,
    PackageSingleDialog,
  },

  computed: {
    ...mapState('package', {
      list: 'packageList',
      notFound: 'notFound',
      total: 'total',
      page: 'page',
      query: 'query',
    }),
  },

  methods: {
    onPaginate(page) {
      this.$store.dispatch('package/paginate', page).finally(() => {
        this.$vuetify.goTo(0);
      });
    },
  },
};
</script>
