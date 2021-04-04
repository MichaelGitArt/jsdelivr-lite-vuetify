<template>
  <VApp>
    <VAppBar app color="primary">
      <VContainer>
        <TheSearch />
      </VContainer>
    </VAppBar>

    <VMain>
      <VContainer class="pt-6">
        <PackagePage />
      </VContainer>
    </VMain>
  </VApp>
</template>

<script>
import TheSearch from './components/TheSearch';
import PackagePage from './components/Package/PackagePage';

export default {
  name: 'App',

  components: {
    TheSearch,
    PackagePage,
  },
};
</script>
