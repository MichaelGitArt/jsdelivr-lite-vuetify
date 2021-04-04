<template>
  <div>
    <VCard class="mb-4">
      <VCardTitle class="d-flex justify-space-between">
        <span>CDN Files</span>

        <VSelect
          class="version-select pa-0"
          hide-details
          :items="versions"
          :value="version"
          @input="onChnageVersion"
        />
      </VCardTitle>
      <VCardText :class="{ 'file-loading': fileLoading }">
        <PackageFileExplorer
          :structure="structure"
          :base-path="basePath"
          @copy="onCopyPath"
          @changeSelection="onChangeSelection"
        />
      </VCardText>
    </VCard>
    <PackageFileSelected
      :base-path="basePath"
      :selection="selection"
      @copy="onCopyPath"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import copy from 'copy-to-clipboard';
import PackageFileExplorer from './PackageFileExplorer';
import PackageFileSelected from './PackageFileSelected';

export default {
  name: 'PackageDialogFiles',

  components: {
    PackageFileExplorer,
    PackageFileSelected,
  },

  data: () => ({
    version: null,
    fileLoading: false,
    selection: [],
  }),

  computed: {
    ...mapState('package/single', ['currPackage', 'versions', 'structure']),
    basePath() {
      return `/npm/${this.currPackage.name}@${this.version}/`;
    },
  },

  created() {
    this.version = this.currPackage.version;
  },

  methods: {
    onChnageVersion(version) {
      this.fileLoading = true;

      this.$store.dispatch('package/single/changeVersion', version).then(() => {
        this.version = version;
        this.fileLoading = false;
      });
    },
    onChangeSelection(selection) {
      this.selection = selection;
    },
    onCopyPath(path) {
      const url =
        this.$store.state.package.single.baseUrl + this.basePath + path;
      copy(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.version-select {
  max-width: 150px;
}

.file-loading {
  opacity: 0.4;
}
</style>
