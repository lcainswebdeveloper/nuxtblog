<template>
    <post :key="post.id" :post="post"></post>
</template>
<script>
import axios from 'axios';
import Post from '@/components/Post'
export default {
    components:{
        Post
    },
    async asyncData({params}){
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id);
        return {
            post:response.data
        }
    }  
}
</script>

