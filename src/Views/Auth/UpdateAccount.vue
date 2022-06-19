<template>
  <ParentModal class="mt-5">
    <RegistrationForm action="Update Account"/>
  </ParentModal>
</template>

<script>
import ParentModal from "../../components/ParentModal";
import RegistrationForm from "../../components/RegistrationForm";
export default {
  name: "UpdateAccount",
  components: {RegistrationForm, ParentModal}
}
</script>

<style scoped>

</style>