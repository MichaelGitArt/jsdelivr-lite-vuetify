<template>
  <div>
    <VListItem dense @click="onBack" :disabled="!path.length">
      <VIcon size="20" class="mr-2" v-if="path.length">
        mdi-arrow-left-bold
      </VIcon>

      <div class="d-flex back-button-path">
        <span class="text--disabled">
          {{ basePath }}
        </span>
        {{ itemPath }}
      </div>
    </VListItem>

    <VDivider />

    <div class="file-list">
      <PackageFileExplorerItem
        v-for="item in selectedFoolder.files"
        :key="item.name"
        :item="item"
        :path="itemPath"
        :base-path="basePath"
        :selection="selection"
        @openFolder="onOpenFolder"
        @toggleSelection="onToggleSelection"
        @copy="onCopy"
      />
    </div>
  </div>
</template>

<script>
import PackageFileExplorerItem from './PackageFileExplorerItem';

export default {
  name: 'PackageFileExplorer',
  components: {
    PackageFileExplorerItem,
  },

  data: () => ({
    path: [],
    selection: [],
  }),

  props: {
    structure: {
      type: Object,
      required: true,
    },
    basePath: {
      type: String,
      required: true,
    },
  },

  watch: {
    structure() {
      this.path = [];
      this.selection = [];
    },
  },

  computed: {
    itemPath() {
      if (this.path.length) {
        return this.path.join('/') + '/';
      } else {
        return '';
      }
    },

    selectedFoolder() {
      if (this.path.length > 0) {
        let files = this.structure.files;

        for (let i = 0; i < this.path.length; i += 1) {
          const folder = files.find(file => file.name === this.path[i]);

          if (i === this.path.length - 1) {
            return folder;
          }

          files = folder.files;
        }
      }

      return this.structure;
    },
  },

  methods: {
    onBack() {
      this.path.pop();
    },
    onOpenFolder(name) {
      this.path.push(name);
    },
    onToggleSelection(path) {
      const index = this.selection.findIndex(item => item === path);
      if (index === -1) {
        this.selection.push(path);
      } else {
        this.selection.splice(index, 1);
      }

      this.$emit('changeSelection', this.selection);
    },
    onCopy(path) {
      this.$emit('copy', path);
    },
  },
};
</script>

<style lang="scss" scoped>
.file-list {
  height: 200px;
  overflow: auto;
}

.back-button-path {
  overflow: auto;
  padding-bottom: 2px;
  white-space: nowrap;
}
</style>
