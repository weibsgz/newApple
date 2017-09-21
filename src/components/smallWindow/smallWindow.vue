<template>
   
        <div v-show="isShow" class="small-window-wrapper">            
            <div class="small-window-header">
                <div class="title">{{title}}</div>
                <div class="option">
                    <div class="openBig" @click="openBig">[]</div>
                    <div class="close" @click="close">X</div>
                </div>
            </div>
            <div class="small-window-cont">
                <slot></slot>
            </div>
        </div>

</template>

<script>
export default {
    props:{
        title:{
          type:String,
          default:''
        },
        isShow:{
            type:Boolean,
            default:false
        },
        whichWindow:{
            type:String,
            default:''
        }
   
    },
    name: 'product',   
    data() {
        return {
           showSmallWindow:false
        };
    },
    // watch: {
    //     isShow: function (val, oldVal) {
    //           this.isShow = val;
    //     }
    // },
    methods:{
       close(){
            this.$emit('closeWindow',this.whichWindow)
       },
       openBig(){
            this.$emit('openBigWindow',this.whichWindow)
       }
    },
    components: {
     
    }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";
   .small-window-wrapper{
         width: 300px;
         background-color: blue;
        .small-window-header{
          display: flex;
          .title{
            flex: 1;
          }
          .option{
            flex: 1;
            display: flex;
            .close{
                margin-left: 30px;
                cursor: pointer
            }
            .openBig{
                cursor: pointer
            }
          }
       }
   }
   

</style>
