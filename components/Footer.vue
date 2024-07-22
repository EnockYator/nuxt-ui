<template>
    <div class="grid w-screen text-white bg-blue-700 dark:bg-slate-950">
        <div class="grid grid-cols-2 xsm:grid-cols-3 md:flex md:gap-32">
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
            <div class="px-6 py-2">
                <p class="underline font-bold">Social Links</p>
                <ul class="space-y-2 text-sm md:text-base">
                    <li>
                        <UButton icon="i-heroicons-magnifying-glass text-gray-100 hover:bg-blue-900" class="hover:bg-white" 
                        to="#" /> <span>Facebook</span>
                    </li>
                    <li>
                        <UButton icon="i-heroicons-magnifying-glass text-gray-100 hover:bg-blue-900" class="hover:bg-white"
                        to="#" /> <span>X</span>
                    </li>
                    <li>
                        <UButton icon="i-heroicons-magnifying-glass text-gray-100 hover:bg-blue-900" class="hover:bg-white"
                        to="#" /> <span>Instagram</span>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <p class="text-center my-3">All Rights Reserved &copy; 2024</p>
        </div>
    </div>
</template>