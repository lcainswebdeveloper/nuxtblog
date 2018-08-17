<template>
    <div class="post">
        <h3>{{post.title}}</h3>
        <div v-html="post.body"></div>
        
    </div>
</template>
<script>
    export default{
        props:{
            post:{required:true}
        }
    }
</script>
<style lang="scss">
    .post{
        margin-bottom:30px;
        border-bottom:1px solid;
        padding-bottom:30px;
        h3{
            font-size:2em;
            margin-bottom:20px;
        }
    }
</style>
