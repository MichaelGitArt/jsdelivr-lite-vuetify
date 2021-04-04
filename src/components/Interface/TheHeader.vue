<template>
  <VAppBar app color="primary">
    <VContainer>
      <TheSearch />
    </VContainer>
  </VAppBar>
</template>

<script>
import TheSearch from './TheSearch';

export default {
  name: 'TheHeader',
  components: {
    TheSearch,
  },
};
</script>

<style lang="scss" scoped></style>
