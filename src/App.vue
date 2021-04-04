<template>
  <VApp>
    <TheHeader />

    <VMain>
      <VContainer class="py-6">
        <PackagePage />
      </VContainer>
    </VMain>

    <TheFooter />
  </VApp>
</template>

<script>
import TheHeader from './components/Interface/TheHeader';
import TheFooter from './components/Interface/TheFooter';
import PackagePage from './components/Package/PackagePage';

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    PackagePage,
  },
};
</script>
