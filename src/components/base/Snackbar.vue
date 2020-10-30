<template>
  <v-snackbar
    v-model="snackbar.snackbar"
    :bottom="snackbar.y === 'bottom'"
    :color="snackbar.color"
    :left="snackbar.x === 'left'"
    :multi-line="snackbar.mode === 'multi-line'"
    :right="snackbar.x === 'right'"
    :timeout="snackbar.timeout"
    rounded="pill"
    :top="snackbar.y === 'top'"
    :vertical="snackbar.mode === 'vertical'">
    <div class="flex uppercase text-sm font-semibold tracking-wider font-sans justify-center">{{ snackbar.text }}</div>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  computed: {
    snackbar () {
      return this.$store.getters['app/getSnackbar']
    }
  },
  methods: {
    buttonClick () {
      this.$eventHub.$emit('snackbarBtnClick')
      this.$emit('close-snackbar')
    },
    closeSnackbar () {
      const snackOpts = {
        snackbar: false,
        buttonText: '',
        color: 'success',
        mode: '',
        text: '',
        timeout: -1,
        x: '',
        y: 'bottom'
      }
      this.$store.commit('app/setSnackbar', snackOpts)
    }
  }
}
</script>
