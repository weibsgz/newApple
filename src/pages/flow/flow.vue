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


import {rightBarMixin} from 'assets/js/common.js'

export default {
    mixins:[rightBarMixin]
    
};
</script>

<style lang="scss" scoped>
@import "./../../assets/css/_variable.scss";
@import "./../../assets/css/_mixin.scss";
    

</style>
