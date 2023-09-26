import {createRouter, createWebHistory} from 'vue-router'

import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Post from "../components/Post.vue"
import Posts from "../components/Posts.vue"
import Contact from "../components/Contact.vue"
import Sidebar from "../components/Sidebar.vue"

const routes = [
    {
        path:"/",
        components: {
            default: Home,
            Sidebar: Sidebar
        }
    },
    {
        path:"/about",
        components: {
            default: About,
            Sidebar: Sidebar

        }
    },
    {
        path:"/posts",
        components: {
            default: Posts,
            Sidebar: Sidebar
        }
    },
    {
        path:"/posts/:id",
        components: {
            default: Post,
            Sidebar: Sidebar
        },
        name:"post"
    },
    {
        path:"/contact",
        components: {
            default: Contact,
            Sidebar: Sidebar
        }
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;
