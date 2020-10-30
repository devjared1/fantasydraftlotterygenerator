<template>
  <div class="flex items-center justify-center" style="height: 100vh;">
    <div v-if="!showResults" class="flex flex-col md:flex-row justify-center" style="height: 300px;">
      <div class="p-4  border-b md:border-r md:border-b-0 border-white animate__animated animate__bounceInDown">
        <div class="flex justify-center md:justify-start h-full">
          <div class="self-center text-center">
            <span class="text-2xl lg:text-4xl md:text-3xl text-yellow-300 font-bold font-sans tracking-widest uppercase">Fantasy Draft<br>Lottery Generator</span>
            <div class="flex justify-center">
              <svg class=" text-yellow-300" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.183 6.5l3.489 3.487-.707.707-1.038-1.037-1.037 1.037 1.037 1.037-.707.707-1.037-1.037-1.037 1.037 1.037 1.037-.707.707-1.038-1.037-1.037 1.037 1.037 1.036-.707.707-1.037-1.036-1.038 1.037 1.037 1.035-.707.707-3.49-3.486.708-.707 1.037 1.037 1.038-1.037-1.038-1.037.708-.707 1.038 1.037 1.036-1.037-1.037-1.037.707-.707 1.038 1.037 1.037-1.037-1.037-1.036.707-.707 1.038 1.036 1.037-1.036-1.037-1.037.707-.707zm7.642 2.465c-1.708-2.706-4.126-5.139-6.72-6.763 1.977-.354 4.538-.329 5.868 1 .771.769 1.323 2.847.852 5.763m-10.052 12.115c-3.704-1.778-7.218-5.278-8.782-8.744 1.636-4.152 4.943-7.628 9.333-9.344 3.474 1.56 6.986 5.08 8.764 8.788-1.587 4.387-4.903 7.699-9.315 9.3m-8.578-.113c-1.079-1.079-1.457-3.322-1.002-5.869 1.623 2.592 4.058 5.009 6.763 6.718-2.384.384-4.76.15-5.761-.849m19.193-19.179c-1.152-1.153-3.018-1.788-5.251-1.788-4.063 0-8.611 2.021-11.867 5.274-3.518 3.516-5.27 8.082-5.27 11.849 0 2.219.618 4.097 1.78 5.258 1.044 1.044 2.865 1.619 5.128 1.619 3.327 0 8.224-1.341 11.991-5.106 3.327-3.324 5.1-7.936 5.1-11.97 0-2.226-.564-4.091-1.611-5.136"/></svg>
            </div>
          </div>
        </div>
      </div>
      <div class="animate__animated animate__bounceInUp border-t md:border-l md:border-t-0 border-white">
        <div class="flex h-full justify-center md:justify-start">
          <div class="self-center">
            <div v-if="step === 1" class="p-4 flex flex-col space-y-2 animate__animated" :class="step === 2 ? 'animate__backOutDown' : ''">
              <div>
                <p class="text-sm uppercase font-sans font-light">1. Choose type of draft...</p>
              </div>
              <div>
                <div class="flex space-x-4">
                  <button @click="typeOfDraftSelect(1)" class="bg-white hover:bg-gray-600 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Normal Draft
                  </button>
                  <button @click="typeOfDraftSelect(2)" class="bg-white hover:bg-gray-600 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Snake Draft
                  </button>
                </div>
              </div>
            </div>
            <div v-if="step === 2" class="p-4 flex flex-col space-y-2 animate__animated animate__backInDown" :class="step === 3 ? 'animate__backOutDown' : ''">
              <div>
                <p class="text-sm uppercase font-sans font-light">2. Choose number of teams...</p>
              </div>
              <div>
                <div class="relative">
                  <select v-model="numberOfTeams" @change="numTeamsSelected" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <!-- <option></option> -->
                    <option>6</option>
                    <option>8</option>
                    <option>10</option>
                    <option>12</option>
                    <option>14</option>
                    <option>16</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
                <div class="flex justify-between mt-2">
                  <button @click="back" class="h-6 w-16 inline-flex hover:text-white text-yellow-300 font-semibold uppercase">
                    <svg class="fill-current w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                    Back
                  </button>
                </div>
              </div>
            </div>
            <div v-if="step === 3" class="px-4 py-1 flex flex-col space-y-2 animate__animated animate__backInDown" :class="step === 4 ? 'animate__backOutDown' : ''">
              <div>
                <p class="text-sm uppercase font-sans font-light">3. Enter team names...</p>
              </div>
              <div>
                <div class="flex flex-col px-2 overflow-y-auto" style="max-height: 200px;">
                  <div v-for="(team, index) in teamInputAry" :key="index">
                    <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
                      Team # {{ index + 1 }}
                    </label>
                    <input :id="team.index" v-model="team.teamName" class="bg-gray-200 appearance-none font-sans border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
                  </div>
                </div>
              </div>
              <div class="flex justify-between">
                <button @click="back" class="h-6 w-16 inline-flex hover:text-white text-yellow-300 font-semibold uppercase">
                  <svg class="fill-current w-4 h-4 mr-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                  Back
                </button>
                <button @click="teamNamesInput" class="h-6 w-16 inline-flex hover:text-white text-yellow-300 font-semibold uppercase">
                  Next
                  <svg class="fill-current w-4 h-4 ml-1 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                </button>
              </div>
            </div>
            <div v-if="step === 4" class="px-4 py-1 flex flex-col space-y-2 animate__animated animate__backInDown" :class="step === 5 ? 'animate__backOutDown' : ''">
              <div>
                <div class="flex space-x-4 mt-6 sm:mt-0">
                  <button @click="startOver" class="bg-white hover:bg-gray-600 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Start Over
                  </button>
                  <button @click="startDraft" class="bg-yellow-300 hover:bg-yellow-400 hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Start Draft
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <DraftResults :order="draftOrder" v-on:start-over="startOver" />
    </div>
    <v-overlay :value="loading">
      <div class="flex flex-col">
        <div>
          <div class="flex justify-center">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
          </div>
        </div>
        <div>
          <div class="flex justify-center text-xl uppercase font-semibold tracking-widest">
            Generating Draft Order
          </div>
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import DraftResults from '@/components/base/DraftResults.vue'
export default {
  name: 'Home',
  components: { DraftResults },
  data: () => ({
    loading: false,
    step: 1,
    showResults: false,
    typeOfDraft: null,
    numberOfTeams: null,
    teamInputAry: [],
    draftOrder: [],
    preferredDraftOrder: null
  }),
  methods: {
    startDraft () {
      switch (this.typeOfDraft) {
        case 1: // normal draft
          this.commenceNormalDraft()
          break
        case 2: // snake draft
          this.commenceSnakeDraft()
          break
      }
    },
    commenceNormalDraft () {
      this.loading = true
      window.setTimeout(() => {
        let pick = 1
        do {
          const rand = this.getRandomIntInclusive(0, this.teamInputAry.length - 1)
          const team = this.teamInputAry[rand]
          const draft = {
            Pick: pick,
            Team: team
          }
          pick++
          this.draftOrder.push(draft)
          this.teamInputAry.splice(rand, 1)
        } while (this.draftOrder.length < this.numberOfTeams)
        this.loading = false
        this.showResults = true
      }, 4000)
    },
    commenceSnakeDraft () {
      this.loading = true
      window.setTimeout(() => {
        let i = 0
        do {
          const rand = this.getRandomIntInclusive(0, this.teamInputAry.length - 1)
          const team = this.teamInputAry[rand]
          console.log('team: ', team.teamName)
          console.log('pick: ', this.preferredDraftOrder[i])
          const draft = {
            Pick: this.preferredDraftOrder[i],
            Team: team
          }
          i++
          this.draftOrder.push(draft)
          this.teamInputAry.splice(rand, 1)
        } while (this.draftOrder.length < this.numberOfTeams)
        this.draftOrder.sort((a, b) => {
          return a.Pick - b.Pick
        })
        this.loading = false
        this.showResults = true
      }, 4000)
    },
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
    },
    startOver () {
      this.showResults = false
      this.typeOfDraft = null
      this.numberOfTeams = null
      this.teamInputAry = []
      this.draftOrder = []
      this.step = 1
    },
    back () {
      this.teamInputAry = []
      this.step--
    },
    typeOfDraftSelect (type) {
      this.typeOfDraft = type
      this.step++
    },
    numTeamsSelected () {
      for (let i = 0; i < this.numberOfTeams; i++) {
        this.teamInputAry.push({
          index: i,
          teamName: null
        })
      }
      this.step++
      if (this.typeOfDraft === 2) {
        // set preferred draft order for snake draft based on num teams
        switch (Number(this.numberOfTeams)) {
          case 6:
            this.preferredDraftOrder = [1, 2, 3, 6, 5, 4]
            break
          case 8:
            this.preferredDraftOrder = [1, 2, 3, 8, 7, 4, 5, 6]
            break
          case 10:
            this.preferredDraftOrder = [1, 2, 3, 4, 10, 9, 5, 8, 6, 7]
            break
          case 12:
            this.preferredDraftOrder = [1, 2, 3, 4, 12, 11, 5, 10, 9, 6, 7, 8]
            break
          case 14:
            this.preferredDraftOrder = [1, 2, 3, 4, 14, 13, 12, 5, 11, 6, 10, 9, 7, 8]
            break
          case 16:
            this.preferredDraftOrder = [1, 2, 3, 4, 5, 16, 15, 14, 13, 6, 7, 12, 11, 8, 10, 9]
            break
          default:
            this.preferredDraftOrder = []
            break
        }
      }
    },
    teamNamesInput () {
      let errors = false
      try {
        this.teamInputAry.forEach((t) => {
          if (!t.teamName || t.teamName === '') {
            // throw error
            errors = true
            throw new Error(`Team # ${t.index + 1} is empty!`)
          }
        })
      } catch (err) {
        const snackOpts = {
          snackbar: true,
          buttonText: '',
          color: 'red',
          mode: '',
          text: err,
          timeout: 2000,
          x: '',
          y: 'bottom'
        }
        this.$store.commit('app/setSnackbar', snackOpts)
      } finally {
        if (!errors) {
          this.step++
        }
      }
    }
  }
}
</script>
