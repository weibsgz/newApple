<template>
   
        <div class="product-wrapper">
            <leftBar></leftBar>
            <div class="cont">
                 内容132213
              
                <div class="small-window-wrapper">
                    <smallWindow class="window1" 
                                 :isShow="window1"
                                 whichWindow="window1" 
                                 @closeWindow="closeWindow"
                                 @openBigWindow="openBigWindow"
                                 title="标题1标题1">
                            <smallModule1></smallModule1>
                    </smallWindow>

                    <smallWindow class="window2" @closeWindow="closeWindow" :isShow="window2"  whichWindow="window2" title="标题2标题2" @openBigWindow="openBigWindow">
                        test1
                    </smallWindow>

                    <smallWindow class="window3" @closeWindow="closeWindow" :isShow="window3"  whichWindow="window3" title="标题3标题3" @openBigWindow="openBigWindow">
                        test1
                    </smallWindow>

                    <smallWindow class="window4" @closeWindow="closeWindow" :isShow="window4"  whichWindow="window4" title="标题4标题4" @openBigWindow="openBigWindow">
                        test1
                    </smallWindow>
                </div>
            </div>
            <div class="right-bar-wrapper">
                <ul>
                    <li :class="{'active':active1}" @click="showSmall('window1')">右边1111</li>
                    <li :class="{'active':active2}" @click="showSmall('window2')">右边2222</li>
                    <li :class="{'active':active3}" @click="showSmall('window3')">右边3333</li>
                    <li :class="{'active':active4}" @click="showSmall('window4')">右边4444</li>
                </ul>
            </div>
            <bigWindow title="大框1标题" :isShow="bigwindow1"  whichWindow="bigwindow1" @closeWindow="closeWindow" @closeBigWindow="closeBigWindow">
                   <bigModule1></bigModule1> 
            </bigWindow>
            <bigWindow title="大框2标题" :isShow="bigwindow2"  whichWindow="bigwindow2" @closeWindow="closeWindow" @closeBigWindow="closeBigWindow">dad2ada</bigWindow>
            <bigWindow title="大框3标题" :isShow="bigwindow3"  whichWindow="bigwindow3" @closeWindow="closeWindow" @closeBigWindow="closeBigWindow">da3dada</bigWindow>
            <bigWindow title="大框4标题" :isShow="bigwindow4"  whichWindow="bigwindow4" @closeWindow="closeWindow" @closeBigWindow="closeBigWindow">dad4ada</bigWindow>
        </div>

</template>

<script>

import leftBar from 'components/leftBar/leftBar.vue'
import smallWindow from 'components/smallWindow/smallWindow.vue'
import bigWindow from 'components/bigWindow/bigWindow.vue'
import smallModule1 from 'pages/product/product-small1.vue'
import bigModule1 from 'pages/product/product-big1.vue'

export default {
    
    name: 'product',   
    data() {
        return {

           window1:false,
           window2:false,
           window3:false,
           window4:false,

           bigwindow1:false,
           bigwindow2:false,
           bigwindow3:false,
           bigwindow4:false,

           active1:false,
           active2:false,
           active3:false,
           active4:false
        };
    },
    methods:{
       showSmall(whichWindow){
          if(this[whichWindow] == true){
            this[whichWindow] = false;
          }
          else{
            this[whichWindow] = true;
          }
          console.log(whichWindow)
          switch(whichWindow)
            {
            case 'window1':
              this[whichWindow] == true ? this.active1 = true : this.active1 = false;
              break;
            case 'window2':
              this[whichWindow] == true ? this.active2 = true : this.active2 = false;
              break;
            case 'window3':
              this[whichWindow] == true ? this.active3 = true : this.active3 = false;
              break;
            case 'window4':
              this[whichWindow] == true ? this.active4 = true : this.active4 = false;
              break;
            default:             
          }

       } ,
       closeWindow(whichWindow){
      
          this[whichWindow] = false;
          var smallWindow = whichWindow.substring(3,whichWindow.length);
          this[smallWindow] = false;
 
       },
       openBigWindow(whichWindow){
            console.log(whichWindow)
           
            switch(whichWindow)
            {
            case 'window1':
              this.bigwindow1 = true;
              break;
            case 'window2':
              this.bigwindow2 = true;
              break;
            case 'window3':
              this.bigwindow3 = true;
              break;
            case 'window4':
              this.bigwindow4 = true;
              break;
            default:
             
            }
        },
        closeBigWindow(whichWindow){
            console.log(whichWindow)
            this[whichWindow] = false;
        }   
    },
    components: {  
      leftBar,
      smallWindow,
      bigWindow,
      smallModule1,
      bigModule1
    }
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";
    

</style>
