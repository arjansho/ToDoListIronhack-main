<template>
  <header class="bg-green-600 text-white">
    <nav class="py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <h1 class="text-[14px], font-bold text-center ">TO DO LIST</h1>
        <h1 class="text-center font-light">"Don't leave today's work for tomorrow." N.F</h1>
      </div>
      <ul v-if="user" class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer, hover:font-bold" :to="{ name: 'Home' }"
          >Home</router-link
        >
        <router-link class="cursor-pointer, hover:font-bold" :to="{ name: 'Create' }"
          >Create</router-link
        >
        <!-- eslint-disable-next-line -->
        <li @click="signout()" class="cursor-pointer, hover:font-bold">Logout</li>
        <li  class=" ">Current User: {{ user.email }}</li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user';

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
const signout = async () => {
  await userStore.logOut();
  router.push({ name: 'Login' });
};
</script>
