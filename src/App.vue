<template>
  <div id="inspire" class="min-h-screen h-screen overflow-hidden bg-gray-900 text-white">
    <!-- <component v-if="!showSplash" :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component> -->
    <div>
      <router-view />
    </div>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from '@/components/base/Snackbar.vue'
export default {
  name: 'App',
  components: { Snackbar },
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style src="@/assets/css/main.css" />
