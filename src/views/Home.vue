<template>
  <div>
    <ring-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: { PxAssetsTable },

  data() {
    return {
      isloading: false,
      assets: [],
    };
  },
  created() {
    this.isLoading = false;

    api.getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => this.isLoading = false);
  },
};
</script>