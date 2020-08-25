<template>
    <div class="home">
        Main Page1
        <button @click="gotoPage1()">path로 페이지2로 이동</button>
        <button @click="gotoPage2()">name로 페이지2로 이동</button>

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
            gotoPage1(){
                console.log("this. ", this.$router)
                ??
            },
            gotoPage2(){
                ??
            }
        }
    }
</script>
