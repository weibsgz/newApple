<template>
   
        <div class="left-bar-wrapper">
            <ul>
                 <router-link class="item" tag="li" :to="{name:'product'}">生产</router-link>
                 <router-link class="item" tag="li" :to="{name:'flow'}">流通</router-link>
                 
            </ul>
        </div>

</template>

<script>

export default {
    name: 'leftBar',   
    data() {
        return {
           
        };
    },
    methods:{
       
    },
    components: {
      
    }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";
    .left-bar-wrapper{
        position: absolute;
        left: 40px; 
        top:  200px;
        ul{
            li{
                width: 100px;
                height: 30px;
                line-height: 30px;
                border:1px solid #ccc;
                &.active{
                    color: red;
                }
            }

        }
    }

</style>
