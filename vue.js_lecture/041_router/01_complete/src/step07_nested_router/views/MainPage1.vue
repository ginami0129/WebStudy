<template>
    <div class="sub">
        <div class="sub-nav">
            <div>MainPage1</div>
            <ul>
                <router-link to="/menu1/sub1" tag="li" >sub1</router-link>
                <router-link to="/menu1/sub2" tag="li" >sub2</router-link>
            </ul>
        </div>
        <router-view class="sub-contents">

        </router-view>

    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        created(){
            console.log("page1 query ", this.$route);
        },
        methods:{

        }
    }
</script>


<style scoped>
    .sub  {
        display:flex;
        flex-direction:row;
    }

    .sub > .sub-nav {
        display:flex;
        width:200px;
        border:1px solid #eeeeee;
    }

    .sub > .sub-contents {
        display:flex;
        flex:1;
        border:1px solid #eeeeee;
    }


    .sub  ul {
        list-style: none;
    }

    .sub  ul li {
        display: inline-block;
        padding:10px;
        margin:10px;
        background:#eeeeee;
        border:1px solid #000000;
    }

</style>