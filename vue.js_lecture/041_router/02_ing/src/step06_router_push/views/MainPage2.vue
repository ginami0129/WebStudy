<template>
    <div class="home">
        Main Page1
        <button @click="gotoBack1()">뒤로 이동1</button>
        <button @click="gotoPage2()">뒤로 이동2</button>

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
            gotoBack1(){
                this.$router.go(-1);
            },
            gotoPage2(){
                window.history.back();
            }
        }
    }
</script>
