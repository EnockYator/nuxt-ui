<template>
    <div class="grid w-screen text-white bg-blue-600 dark:bg-slate-900">
        <div class="grid grid-cols-2 xsm:grid-cols-3 md:flex md:justify-evenly md:gap-32">
            <div class="px-6 py-2">
                <p class="underline font-bold">Quick Links</p>
                <ul class="space-y-2 text-sm md:text-base">
                    <li><nuxt-link to="/" class="hover:text-orange-300">Home</nuxt-link></li>
                    <li><nuxt-link to="/" class="hover:text-orange-300">About</nuxt-link></li>
                    <li><nuxt-link to="/" class="hover:text-orange-300">How to Apply</nuxt-link></li>
                    <li><nuxt-link to="/" class="hover:text-orange-300">Contact us</nuxt-link></li>
                    <li><nuxt-link to="/" class="hover:text-orange-300">FAQs</nuxt-link></li>
                </ul>
            </div>

            <div class="px-6 py-2">
                <p class="underline font-bold">Accounts</p>
                <ul class="space-y-2 text-sm md:text-base">
                    <li><nuxt-link to="/" class="hover:text-orange-300">Login</nuxt-link></li>
                    <li><nuxt-link to="/" class="hover:text-orange-300">Sign up</nuxt-link></li>
                </ul>
            </div>

            <!-- Social media icons-->
            <div class="flex flex-col px-6 py-2">
                <p class="underline font-bold">Social Links</p>
                <!--facebook icon-->
                <UButton 
                    icon="i-heroicons-magnifying-glass"
                    label="Facebook"
                    color="white"
                    variant="ghost"
                    class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
                    to="#" />
                <!--Instagram icon-->
                <UButton 
                    icon="i-heroicons-magnifying-glass"
                    label="Instagram"
                    color="white"
                    variant="ghost"
                    class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
                    to="#" />
                <!--twitter icon-->
                <UButton 
                    icon="i-heroicons-magnifying-glass"
                    label="Twitter"
                    color="white"
                    variant="ghost"
                    class="hover:bg-blue-500 dark:hover:bg-blue-700 hover:color-blue text-white h-8 my-auto"
                    to="#" />  
            </div>
        </div>
        <div>
            <p class="text-center my-3">All Rights Reserved &copy; 2024</p>
        </div>
    </div>
</template>