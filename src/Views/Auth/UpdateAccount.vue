<template>
  <ParentModal class="mt-5" action="Update Account">
    <UpdateProfileForm/>
  </ParentModal>
</template>

<script>
import ParentModal from "../../components/ParentModal";
import UpdateProfileForm from "@/components/UpdateProfileForm";

export default {
  name: "UpdateAccount",
  components: {UpdateProfileForm, ParentModal}
}
</script>

<style scoped>

</style>
