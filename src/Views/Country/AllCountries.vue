<template>
<div class="relative container mx-auto">
  <div class="my-3 grid grid-cols-5 gap-2">
    <h3 class="col-span-1 text-2xl text-left font-bold">All Countries</h3>
    <div class="col-span-1 col-start-5 flex justify-end ">
      <router-link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   :to="{ name: 'CountryForm', params: {action: 'Create Country', verb: 'POST'}}">
        <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        Create Country
      </router-link>
    </div>
  </div>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Code
        </th>
        <th scope="col" class="px-6 py-3 text-center">
          Actions
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="country in countries" v-bind:key="country.code" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{ country.name }}
        </th>
        <td class="px-6 py-4">
          {{ country.code }}
        </td>
        <td class="px-6 py-4 text-center">
          <router-link type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       :to="{ name: 'CountryForm', params:{action: 'Edit Country', verb: 'PUT'}}">
            <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
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
import {mapGetters} from "vuex";

export default {
  name: "AllCountries",
  data () {
    return {
      countries: [
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'AndorrA', code: 'AD'}
      ]
    }
  },
  computed: {
    ...mapGetters([
       'isAuthenticated',
       'loggedInUser'
    ]),
  }
}
</script>

<style scoped>

</style>