<template>
      <transition name="bigWindow-fade">
        <div v-show="isShow" class="big-window-wrapper">            
            <div class="big-window-header">
                <div class="title">{{title}}</div>
                <div class="option">
                    <div class="openBig" @click="closeBig">缩小</div>
                    <div class="close" @click="close">X</div>
                </div>
            </div>
            <div class="big-window-cont">
                <slot></slot>
            </div>
        </div>
      </transition>
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
           showbigWindow:false
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
       },
       closeBig(){
            this.$emit('closeBigWindow',this.whichWindow)
       }
    },
    components: {
      
    }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";
   .big-window-wrapper{
         z-index:100;
         position: relative;
         left: 150px;
         width: 1200px;
         height: 400px;
         background-color: blue;
        .big-window-header{
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
   

   .bigWindow-fade-enter-active{
     /*  transition: all .3s;
       opacity:1; 这样也可以*/  
      animation: bigWindow-fadein 0.3s;    
   }

   .bigWindow-fade-leave-active{
      animation: bigWindow-fadeOut 0.3s; 
   }

    @keyframes bigWindow-fadein{
     0%{ opacity: 0 ;  transform:scale(0);}
     
    100%{
      opacity: 1 ; transform:scale(1);
    }
  }

    @keyframes bigWindow-fadeOut{
     0%{ opacity: 1 ; transform:scale(1);}
     
    100%{
      opacity: 0 ; transform:scale(0);
    }
  }

</style>
