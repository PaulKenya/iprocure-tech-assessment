<template>
  <div class="flex justify-center">
    <div class="p-4 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <RegistrationForm action="Register"/>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "../../components/RegistrationForm";

export default {
  name: "RegisterPage",
  components: {RegistrationForm},
  data(){
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>