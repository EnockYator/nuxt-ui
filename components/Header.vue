<template>
  <header class="w-screen">
    <div class="grid lg:flex justify-between items-center px-4 py-3 bg-blue-800 dark:bg-slate-950 text-white">

      <div class="flex justify-between w-screen">
        <!-- Social media icons-->
        <div class="flex justify-between">
          <div class="text-orange-400 font-serif text-xl lg:text-3xl font-extrabold italic underline">attachME</div>
          <div class="flex md:space-x-3 mx-2 lg:flex">
            <!--facebook icon-->
            <UButton 
              icon="i-heroicons-magnifying-glass"
              color="white"
              variant="ghost"
              class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
              to="#" />
            <!--Instagram icon-->
            <UButton 
              icon="i-heroicons-magnifying-glass"
              color="white"
              variant="ghost"
              class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
              to="#" />
            <!--twitter icon-->
            <UButton 
              icon="i-heroicons-magnifying-glass"
              color="white"
              variant="ghost"
              class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
              to="#" />            
          </div>
        </div>

        <!-- Theme toggle button -->
        <div class="">
          <ClientOnly>
            <UButton 
              :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
              color="white"
              variant="ghost"
              class="hover:bg-blue-600 dark:hover:bg-slate-600 hover:color-blue text-white h-8 my-auto rounded-full"
              @click="isDark = !isDark" />
              <template #fallback>
                <div class="w-8 h-8"></div>
              </template>
          </ClientOnly>
        </div>

        <!--Menu icon for displaying nav menu-->
        <div class="md:hidden mr-8">
          <UButton
            icon="i-heroicons-bars-3"
            color="white"
            variant="ghost"
            class="hover:bg-blue-600 dark:hover:bg-slate-600 hover:color-blue text-white h-8 my-auto rounded-md"
            @click="toggleMenu" />
          
        </div>

        <!--Navigation links-->
        <div class="mr-11 hidden md:block">
          <nav class="flex space-x-7 text-base  md:font-bold w-full my-2">
            <nuxt-link to="/" class="hover:text-orange-300">Home</nuxt-link>
            <nuxt-link to="#" class="hover:text-orange-300">About</nuxt-link>
            <nuxt-link to="#" class="hover:text-orange-300">How to Apply</nuxt-link>
            <nuxt-link to="#" class="hover:text-orange-300">Contact us</nuxt-link>
            <nuxt-link to="#" class="hover:text-orange-300">FAQs</nuxt-link>
          </nav>
        </div>


      </div>


      <!--Search icon-->
      <div class="flex justify-center mx-auto my-2 lg:mr-6 lg:ml-6">
        <input type="text" name="search" placeholder="Search Here"
          class="px-3 focus:outline-none rounded-2xl mr-1 dark:bg-slate-500  text-black dark:text-slate-50 text-center w-48 h-8" />
        <UButton
          icon="i-heroicons-magnifying-glass"
          color="white"
          variant="ghost"
          class="hover:bg-blue-600 dark:hover:bg-slate-600 hover:color-blue text-white h-8 my-auto rounded-md"
          />
      </div>
    </div>

    <!--Navigation links on mobiles-->
    <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
      class="fixed h-screen inset-x-1/4 inset-y-0 z-50 w-3/4 sm:inset-x-1/2 sm:w-1/2 bg-blue-600 dark:bg-slate-900 md:hidden">

      <!--Menu icon for hiding nav menu-->
      <div class="ml-6 mt-4">
        <UButton
          icon="i-heroicons-x-mark bg-white"
          variant="outline"
          class="hover:bg-slate-600 dark:hover:bg-slate-600 hover:color-blue text-white h-8 my-auto rounded-md"
          @click="toggleMenu" />
      </div>

      <nav class="grid space-y-6 py-12 text-base w-full justify-evenly text-white font-bold">
        <nuxt-link to="/" class="hover:text-orange-300">Home</nuxt-link>
        <nuxt-link to="#" class="hover:text-orange-300">About</nuxt-link>
        <nuxt-link to="#" class="hover:text-orange-300">How to Apply</nuxt-link>
        <nuxt-link to="#" class="hover:text-orange-300">Contact us</nuxt-link>
        <nuxt-link to="#" class="hover:text-orange-300">FAQs</nuxt-link>
      </nav>
    </div>

    <div class="py-3 bg-green-600 dark:bg-green-800">
      <nav class="flex space-x-9 text-white text-base md:text-lg font-medium justify-end mr-8 sm:mr-20">
        <nuxt-link to="#" class="hover:text-orange-700 dark:hover:text-orange-300">Login</nuxt-link>
        <nuxt-link to="#" class="hover:text-orange-700 dark:hover:text-orange-300 ">Sign up</nuxt-link>
      </nav>


    </div>
  </header>
</template>

<script setup lang="ts">
import type { _size } from '#tailwind-config/theme';
import { _white } from '#tailwind-config/theme/accentColor';

//Theme toggle button
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

// Menu toggle icon
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
