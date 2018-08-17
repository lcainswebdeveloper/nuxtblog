<template>
    <div>
        <post :key="post.id" v-for="post in posts" :post="post"></post>
    </div>
</template>
<script>
import axios from 'axios';
import Post from '@/components/Post'
export default {
    components:{
        Post
    },
    data(){
        return{
            posts:[]
        }
    },
    async asyncData(){
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return {
            posts:response.data
        }
    }   
}
</script>
