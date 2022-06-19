<template>
  <ParentModal :action="action">
    <form @submit.prevent="submit">
      <div class="mb-6">
        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Name</label>
        <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kenya" required>
      </div>
      <div class="mb-6">
        <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country Code</label>
        <input type="text" id="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="KE" required>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ action }}
      </button>
    </form>
  </ParentModal>
</template>

<script>
import ParentModal from "../../components/ParentModal";
export default {
  name: "CountryFormModal",
  components: {ParentModal},
  props: {
    action: String,
    verb: String
  },
  methods: {
    submit(){
      this.verb === 'POST'
          ? console.log('country added successfully')
          : console.log('country edited successfully')
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>