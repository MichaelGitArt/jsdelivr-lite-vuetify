<template>
  <VExpansionPanels :disabled="selection.length === 0">
    <VExpansionPanel>
      <VExpansionPanelHeader>
        <div class="subtitle-1 font-weight-bold">
          Collection
        </div>
      </VExpansionPanelHeader>
      <VExpansionPanelContent>
        <VListItem v-for="item in selection" :key="item" class="px-0">
          <div class="item d-flex">
            {{ baseUrl + basePath + item }}
          </div>

          <CopyBtn class="ml-auto" @copy="onCopy(item)" />
        </VListItem>
      </VExpansionPanelContent>
    </VExpansionPanel>
  </VExpansionPanels>
</template>

<script>
import { mapState } from 'vuex';
import CopyBtn from '@/components/UI/CopyBtn';

export default {
  name: 'PackageFileSelected',
  components: {
    CopyBtn,
  },

  props: {
    selection: {
      type: Array,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapState('package/single', ['baseUrl']),
  },

  methods: {
    onCopy(item) {
      this.$emit('copy', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  overflow: auto;
  padding-bottom: 2px;
  white-space: nowrap;
}
</style>
