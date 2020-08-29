<template>
    <div class="parent">
        <ul>
            <li v-for="(memo,index) in list" 
            :class="{selected:index==selectedIndex}" 
            :key="index"
            @click="setSelectedMemo(index)"
            >{{index}}. {{memo}}</li>
        </ul>


    </div>
</template>

<script>

    export default {
        name:"parent",
        data(){
            return {

            }
        },

        methods:{

        },

        props:{
            list:{
                type:Array,
                default:[]
            },
            selectedIndex:{
              type:Number,
              default:0
            },
            setSelectedMemo:{
              type:Function,
              default:()=>{
                console.log("함수의 재설정이 필요합니다.");
              }
            }

        }

    }
</script>

<style scoped>
    .parent {
        border:1px solid #000000;
        margin:10px;
    }
    .selected {
        color:#f00;
    }
</style>