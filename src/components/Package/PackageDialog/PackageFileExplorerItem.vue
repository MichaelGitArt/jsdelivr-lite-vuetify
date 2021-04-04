<template>
  <VListItem dense :ripple="!isFile" :inactive="isFile" @click="onClick">
    <VIcon size="20" class="mr-2">
      {{ icon }}
    </VIcon>

    <div class="item-path d-flex mr-4">
      <span class="text--disabled">
        {{ basePath }}
      </span>
      {{ name }}
    </div>

    <div class="ml-auto d-flex align-center " v-if="isFile">
      <VTooltip top>
        <template v-slot:activator="{ on, attrs }">
          <div v-bind="attrs" v-on="on">
            <VSwitch
              :input-value="inCollection"
              class="ma-0"
              hide-details
              inset
              flat
              dense
              @change="onToggleSelection"
            />
          </div>
        </template>
        <span>Add to collection</span>
      </VTooltip>

      <CopyBtn @copy="onCopy" />
    </div>
  </VListItem>
</template>

<script>
import CopyBtn from '@/components/UI/CopyBtn';

export default {
  name: 'PackageFileExplorerItem',
  components: {
    CopyBtn,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
    selection: {
      type: Array,
      required: true,
    },
  },

  computed: {
    icon() {
      return this.isFile ? 'mdi-file' : 'mdi-folder';
    },
    name() {
      return this.path + this.item.name;
    },
    isFile() {
      return this.item.type === 'file';
    },
    inCollection() {
      return this.selection.includes(this.name);
    },
  },

  methods: {
    onToggleSelection() {
      this.$emit('toggleSelection', this.name);
    },
    onClick() {
      if (this.item.type === 'directory') {
        this.$emit('openFolder', this.item.name);
      }
    },

    onCopy() {
      this.$emit('copy', this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.item-path {
  overflow: auto;
  padding-bottom: 2px;
  white-space: nowrap;
}
</style>
