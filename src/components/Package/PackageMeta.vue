<template>
  <div>
    <p class="text-subtitle-2 text--secondary mb-2">
      {{ packageData.description }}
    </p>

    <div>
      <VChip class="mr-2 mb-2" label small outlined color="primary">
        <VIcon size="20" left>
          mdi-label-outline
        </VIcon>

        {{ packageData.version }}
      </VChip>

      <VChip
        v-for="keyword in keywords"
        :key="keyword"
        class="mr-2 mb-2"
        label
        small
        outlined
      >
        {{ keyword }}
      </VChip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageMeta',
  props: {
    packageData: {
      type: Object,
      required: true,
    },
  },

  computed: {
    keywords() {
      if (this.packageData.keywords && this.packageData.keywords.length > 10) {
        return this.packageData.keywords.slice(0, 9);
      }

      return this.packageData.keywords;
    },
  },
};
</script>

<style lang="scss" scoped></style>
