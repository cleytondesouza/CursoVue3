<template>
  <custom-header @create-account="handleAcountCreate" @login="handleLogin" />
  <contact />


  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker 2021</p>
  </div>
</template>

<script>
import { oneMounted } from "vue";
import { useRouter } from "vue-router";
import CustonHeader from "./CustomHeader.vue";
import Contact from "./Contact.vue";

export default {
  components: { CustonHeader, Contact },
  setup() {
    const router = useRouter();
    oneMounted(() => {
      const token = window.localStorage.getItem("token");
      if (token) {
        router.push({ name: "Feedbacks" });
      }
    });
    function handleLogin() {}
    function handleAcountCreate() {}
    return {
      handleLogin,
      handleAcountCreate,
    };
  },
};
</script>
 