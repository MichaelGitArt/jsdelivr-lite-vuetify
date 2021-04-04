<template>
  <div>
    <VTooltip v-model="copied" top>
      <template #activator="{}">
        <VBtn v-bind="$attrs" v-on="$listeners" icon @click="onCopy">
          <VIcon size="20">
            mdi-content-copy
          </VIcon>
        </VBtn>
      </template>
      <span>Copied!</span>
    </VTooltip>
  </div>
</template>

<script>
export default {
  name: 'CopyBtn',
  props: {
    value: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    copied: false,
  }),

  methods: {
    onCopy() {
      this.copied = true;
      this.$emit('copy', this.value);
      setTimeout(() => {
        this.copied = false;
      }, 800);
    },
  },
};
</script>

<style lang="scss" scoped></style>
