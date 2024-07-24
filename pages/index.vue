<template>
    <div class="flex flex-col md:flex-row px-2 sm:px-4 md:p-8 text-sm md:text-base dark:bg-slate-950">
        <div class="md:w-4/12 mb-3 px- text-center md:text-left md:mt-10">
            <h1 class="text-blue-800 text-xl sm:text-2xl md:text-3xl font-bold py-2 text-center">Industrial Attachment</h1>
            <h2 class="text-blue-800 text-sm md:text-base">Welcome to 
                <nuxt-link to="/" class="text-base md:text-xl font-bold text-orange-600 font-serif italic">attachME</nuxt-link></h2>
            <p class="my-2 md:my-6 text-left sm:leading-7">We offer eligible students the opportunity to gain
                skills and experience in different fields in line 
                with their academic programme and future career 
                aspirations.
            </p>
            <p class="font-bold my-2 text-left">Apply and become one of us.</p>
            <UButton
                label="Apply now"
                variant="solid"
                class="hover:bg-blue-700 dark:hover:bg-blue-600 text-white h-8 md:h-10 my-4 rounded-md px-5 text-base md:my-9 md:mx-20"
            />
        </div>
        <div class="md:w-2/3 md:flex-col">
            <UContainer 
                class="sm:w-11/12 mx-auto px-2 py-3 my-3 bg-slate-200 dark:bg-slate-900 rounded-md">
                <p class="font-bold text-lg text-blue-700 text-center md:text-left md:ml-12 my-4">Instructions to applicants</p>
                <p class="text-xs sm:text-sm">
                    <ol class="list-decimal list-inside space-y-2">
                        <li>Create an account and sign into your account.</li>
                        <li>Click <nuxt-link to="/" class="text-orange-600 text-sm hover:text-white px-1 hover:bg-blue-700">here</nuxt-link>  to be redirected to application page.</li>
                        <li>See the status of your application on Manage applications tab.</li>
                        <li>attachME reserves the right to reject inaccurate and wrongly filled forms.</li>
                        <li>By filling and submitting the application form, you confirm that you agree to abide with the specified terms and conditions.</li>

                    </ol>
                </p>
                <p class="font-bold text-lg text-blue-700 text-center md:text-left md:mt-4 md:ml-12">NOTE:</p>
                <p class="text-xs sm:text-sm">
                    <ol class="list-decimal list-inside space-y-2">
                        <li>Canvassing will lead to automatic disqualification.</li>
                        <li>Forms with incomplete sections will not be submitted.</li>
                        <li>Only shortlisted and successful candidates will be contacted.</li>
                    </ol>
                </p>
            </UContainer>

            <UContainer class="h-fit md:h-48 sm:w-11/12 md:w-11/12 mx-auto py-3 md:py-6 pb-6 my-4 md:my-8 pl-1 rounded-md text-center bg-slate-300 dark:bg-slate-900">
                <h3 class="mb-5 text-sm md:text-base">Meet our attachees </h3>
                <UAvatarGroup  :max="avatarCount">
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://i.ibb.co/MMwTQqZ/EY.jpg"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/904724?v=4"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://i.ibb.co/MMwTQqZ/EY.jpg"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/904724?v=4"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://i.ibb.co/MMwTQqZ/EY.jpg"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>

                    <!--Extra avatars-->
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://avatars.githubusercontent.com/u/904724?v=4"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>
                    <UButton 
                        color="white"
                        variant="ghost"
                        class="rounded-full w-16 h-16 hover:mx-1 justify-evenly"
                        to="#">
                        <UAvatar
                            src="https://i.ibb.co/MMwTQqZ/EY.jpg"
                            alt="EY"
                            size="2xl"
                    />
                    </UButton>


                </UAvatarGroup>
            </UContainer>
        </div>                
    </div>
  
</template>

<script lang="ts">
// page meta data
definePageMeta({
    name: 'index',
    layout: 'default'
});

export default {
    data(): { avatarCount: number }
    {
        return {
            // Default to 4 avatars
            avatarCount: 4,
        };
    },
    // calling updateAvatarCount when component is mounted
    mounted() {
        this.updateAvatarCount();
        // event listener to update the avatar count on window resize
        window.addEventListener('resize', this.updateAvatarCount);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateAvatarCount);
    },
    methods: {
        updateAvatarCount()
        {
            const width = window.innerWidth;
            
            if (width <= 500) {
                this.avatarCount = 4; //default value
            } else if ((width > 500) && (width <= 700)) {
                this.avatarCount = 5; //medium screens
            } else {
                this.avatarCount = 6; // large screens     
            }            
        },
    },
};


</script>

<style>

</style>