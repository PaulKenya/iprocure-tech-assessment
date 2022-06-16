<template>
<div class="relative container mx-auto">
  <div class="my-3 grid grid-cols-5 gap-2">
    <h3 class="col-span-1 text-2xl text-left font-bold">All Countries</h3>
    <div class="col-span-1 col-start-5 flex justify-end ">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
        Add Country
      </button>
    </div>
  </div>
  <div class="overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Product name
        </th>
        <th scope="col" class="px-6 py-3">
          Color
        </th>
        <th scope="col" class="px-6 py-3">
          Category
        </th>
        <th scope="col" class="px-6 py-3">
          Price
        </th>
        <th scope="col" class="px-6 py-3">
          <span class="sr-only">Edit</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          Apple MacBook Pro 17"
        </th>
        <td class="px-6 py-4">
          Sliver
        </td>
        <td class="px-6 py-4">
          Laptop
        </td>
        <td class="px-6 py-4">
          $2999
        </td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          Microsoft Surface Pro
        </th>
        <td class="px-6 py-4">
          White
        </td>
        <td class="px-6 py-4">
          Laptop PC
        </td>
        <td class="px-6 py-4">
          $1999
        </td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr class="bg-white dark:bg-gray-800">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          Magic Mouse 2
        </th>
        <td class="px-6 py-4">
          Black
        </td>
        <td class="px-6 py-4">
          Accessories
        </td>
        <td class="px-6 py-4">
          $99
        </td>
        <td class="px-6 py-4 text-right">
          <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AllCountries",
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