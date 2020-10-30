<template>
  <div class="flex flex-col mt-2">
    <div>
      <div class="p-4 mb-8 border-b border-white animate__animated animate__bounceInDown">
        <div class="flex justify-center h-full">
          <div class="self-center text-center">
            <span class="text-4xl text-yellow-300 font-bold font-sans tracking-widest uppercase">Fantasy Draft<br>Lottery Generator</span>
            <div class="flex justify-center">
              <svg class=" text-yellow-300" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.183 6.5l3.489 3.487-.707.707-1.038-1.037-1.037 1.037 1.037 1.037-.707.707-1.037-1.037-1.037 1.037 1.037 1.037-.707.707-1.038-1.037-1.037 1.037 1.037 1.036-.707.707-1.037-1.036-1.038 1.037 1.037 1.035-.707.707-3.49-3.486.708-.707 1.037 1.037 1.038-1.037-1.038-1.037.708-.707 1.038 1.037 1.036-1.037-1.037-1.037.707-.707 1.038 1.037 1.037-1.037-1.037-1.036.707-.707 1.038 1.036 1.037-1.036-1.037-1.037.707-.707zm7.642 2.465c-1.708-2.706-4.126-5.139-6.72-6.763 1.977-.354 4.538-.329 5.868 1 .771.769 1.323 2.847.852 5.763m-10.052 12.115c-3.704-1.778-7.218-5.278-8.782-8.744 1.636-4.152 4.943-7.628 9.333-9.344 3.474 1.56 6.986 5.08 8.764 8.788-1.587 4.387-4.903 7.699-9.315 9.3m-8.578-.113c-1.079-1.079-1.457-3.322-1.002-5.869 1.623 2.592 4.058 5.009 6.763 6.718-2.384.384-4.76.15-5.761-.849m19.193-19.179c-1.152-1.153-3.018-1.788-5.251-1.788-4.063 0-8.611 2.021-11.867 5.274-3.518 3.516-5.27 8.082-5.27 11.849 0 2.219.618 4.097 1.78 5.258 1.044 1.044 2.865 1.619 5.128 1.619 3.327 0 8.224-1.341 11.991-5.106 3.327-3.324 5.1-7.936 5.1-11.97 0-2.226-.564-4.091-1.611-5.136"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex p-2 flex-wrap justify-center mx-auto overflow-y-auto" style="max-height: 500px" :style="calcWidth()">
        <div class="flex flex-col flex-wrap animate__animated animate__bounceInDown" v-for="(t, index) in draftOrder" :key="index">
          <div>
            <div class="flex justify-center">
            <v-avatar class="bg-yellow-300" size="100">
              <span class=" text-gray-800 text-3xl">{{ t.Pick }}</span>
            </v-avatar>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <span>{{ t.Team.teamName }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <div class="flex justify-center">
        <button @click="startOver" class="bg-white hover:bg-gray-600 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Start Over
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DraftResults',
  props: {
    order: Array
  },
  data: () => ({
    draftOrder: [],
    interval: null,
    count: 0
  }),
  watch: {
    draftOrder () {
      if (this.draftOrder.length === this.order.length) {
        this.stopInterval()
      }
    }
  },
  methods: {
    startOver () {
      this.$emit('start-over')
    },
    addTeam () {
      this.draftOrder.push(this.order[this.count])
      this.count++
    },
    stopInterval () {
      clearInterval(this.interval)
    },
    calcWidth () {
      if (this.order.length === 6) {
        return 'max-width: 350px;'
      } else if (this.order.length === 8) {
        return 'max-width: 450px;'
      } else if (this.order.length === 10) {
        return 'max-width: 550px;'
      } else {
        return 'max-width: 650px;'
      }
    }
  },
  created () {
    this.interval = setInterval(this.addTeam, 500)
  }
}
</script>
