<template>
<div class="relative container mx-auto">
  <div class="my-3 grid grid-cols-5 gap-2">
    <h3 class="col-span-1 text-2xl text-left font-bold">All Countries</h3>
<!--    <div class="col-span-1 col-start-5 flex justify-end ">-->
<!--      <router-link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"-->
<!--                   :to="{ name: 'CountryForm', params: {action: 'Create Country', verb: 'POST'}}">-->
<!--        <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>-->
<!--        Create Country-->
<!--      </router-link>-->
<!--    </div>-->
  </div>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          ISO Code 2
        </th>
        <th scope="col" class="px-6 py-3">
          ISO Code 3
        </th>
        <th scope="col" class="px-6 py-3">
          Phone Code
        </th>
        <th scope="col" class="px-6 py-3">
          Currency Code
        </th>
        <th scope="col" class="px-6 py-3">
          Time Zone
        </th>
        <th v-if="permissions.includes('edit_country')" scope="col" class="px-6 py-3 text-center">
          Actions
        </th>
      </tr>
      </thead>
      <tbody v-if="loading">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td colspan="7" class="text-center">
            <LoaderSVG class="inline w-10 h-10" fill="#1a56db"/>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
      <tr v-for="country in countries" v-bind:key="country.code" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{ country.name }}
        </th>
        <td class="px-6 py-4">
          {{ country.iso2CountryCode }}
        </td>
        <td class="px-6 py-4">
          {{ country.iso3CountryCode }}
        </td>
        <td class="px-6 py-4">
          {{ country.phoneCode }}
        </td>
        <td class="px-6 py-4">
          {{ country.currencyCode }}
        </td>
        <td class="px-6 py-4">
          {{ country.timezone }}
        </td>

        <td class="px-6 py-4 text-center">
          <router-link v-if="permissions.includes('edit_country')" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       :to="{ name: 'CountryForm', params:{action: 'Edit Country', verb: 'PUT'}}">
            <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            Edit Country
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <router-view/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LoaderSVG from "../../components/LoaderSVG";

export default {
  name: "AllCountries",
  components: {LoaderSVG},
  data () {
    return {
      loading: true
    }
  },
  methods:{
    ...mapActions(['fetchCountries']),
    getCountries(){
      // eslint-disable-next-line no-unused-vars
      this.fetchCountries().then(resp => {

        this.loading = false;
        // eslint-disable-next-line no-unused-vars
      }).catch(err => {
        this.loading = false;
      })
    },
  },
  computed: {
    ...mapGetters([
      'countries', 'permissions'
    ]),
  },
  mounted() {
    this.getCountries();
  }
}
</script>

<style scoped>

</style>