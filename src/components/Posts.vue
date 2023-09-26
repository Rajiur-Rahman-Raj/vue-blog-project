<script setup>
    import {
        ref,
        reactive,
        onBeforeMount
    } from 'vue';

    const posts = ref([]);

    function getSlug(title){
        return title.toLowerCase().replace(/\s+/g, '-')
    }

    onBeforeMount(() => {
        fetch('https://dummyjson.com/posts?limit=10')
            .then(res => res.json())
            .then(data => {
                const filteredData = data.posts.map((post) => {
                    const {
                        id,
                        title,
                        body
                    } = post; // object destructuring
                    return {
                        id,
                        title,
                        body
                    }
                })
                posts.value = filteredData;
            })
    })
</script>

<template>
    <article class="mb-10" v-for="post in posts" :key="post.id">
        <h1 class="text-xl mb-2">
            <!-- <router-link :to="{ name:'post', params:{id:post.id} }">{{ post.title }}</router-link> -->
            <!-- <router-link :to="{ name:'post', params:{id:getSlug(post.title)} }">{{ post.title }}</router-link> -->
            <router-link :to="`posts/${post.id}`">{{ post.title }}</router-link>
        </h1>
        <p>
            <img :src="`https://source.unsplash.com/random/300x200?${ post.id}`" alt=""> {{ post.body }}
        </p>
    </article>
</template>

<style scoped>

</style>