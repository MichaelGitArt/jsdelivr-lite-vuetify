<template>
  <VFooter dark padless>
    <VCard flat tile class="footer-content primary white--text text-center">
      <VCardText class="white--text">
        <div class="mb-3">
          <VBtn
            class="mx-2 white--text"
            icon
            target="_blank"
            href="https://github.com/MichaelGitArt"
          >
            <VIcon size="24px">
              mdi-github
            </VIcon>
          </VBtn>
          <VBtn
            class="mx-2 white--text"
            icon
            target="_blank"
            href="https://t.me/michaelgitart"
          >
            <VIcon size="24px">
              mdi-telegram
            </VIcon>
          </VBtn>
        </div>

        <div>Kryvoruchko Mykhailo</div>
        <div>michaelgitart@gmail.com</div>
      </VCardText>

      <VDivider></VDivider>

      <VCardText class="white--text">
        04.04.2021
      </VCardText>
    </VCard>
  </VFooter>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style lang="scss" scoped>
.footer-content {
  width: 100%;
}
</style>
