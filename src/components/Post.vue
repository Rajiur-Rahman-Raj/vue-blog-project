<script setup>
    import {
      onBeforeMount,
        reactive
    } from 'vue';
    import {
        useRoute
    } from 'vue-router'
    const route = useRoute()
    const post = reactive({})
    const id = route.params.id;
   
    onBeforeMount(()=>{
        fetch(`https://dummyjson.com/posts/${id}`)
        .then(res => res.json())
        .then(data =>{
            post.id = data.id
            post.title = data.title
            post.body  = data.body
        })
    })



</script>

<template>
    <article class="mb-10">
        <h1 class="text-xl mb-2">
            {{ post.title }}
        </h1>
        <p>
            <img :src="`https://source.unsplash.com/random/300x200?${ post.id}`" alt=""> {{ post.body }}
        </p>
    </article>
</template>

<style scoped>

</style>