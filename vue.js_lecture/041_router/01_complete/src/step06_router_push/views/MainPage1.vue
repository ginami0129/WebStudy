<template>
    <div class="home">
        Main Page1
        <button @click="gotoPage1()">path로 menu2 이동</button>
        <button @click="gotoPage2()">name로 menu2 이동</button>

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
                this.$router.push({
                    path:"/menu2/ddandongne/30"
                })
            },
            gotoPage2(){
                this.$router.push({
                    name:"menu22",
                    params:{name:"ddandongne", age:30}
                })
            }
        }
    }
</script>
