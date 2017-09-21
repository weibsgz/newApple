import leftBar from 'components/leftBar/leftBar.vue'
import smallWindow from 'components/smallWindow/smallWindow.vue'
import bigWindow from 'components/bigWindow/bigWindow.vue'
import smallModule1 from 'pages/product/product-small1.vue'
import bigModule1 from 'pages/product/product-big1.vue'

export const rightBarMixin = {
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
          this.changeRightrBarCls(whichWindow)

       } ,
       closeWindow(whichWindow){
          console.log('关大窗 '+whichWindow)
          this[whichWindow] = false;
          var smallWindow = whichWindow.substring(3,whichWindow.length);
          this[smallWindow] = false;
          this.changeRightrBarCls(whichWindow)
          
 
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
            
            this[whichWindow] = false;

            this.changeRightrBarCls(whichWindow)
        },

        changeRightrBarCls(w){
          switch(w)
            {
            case 'window1':
              this[w] == true ? this.active1 = true : this.active1 = false;
              break;
            case 'window2':
              this[w] == true ? this.active2 = true : this.active2 = false;
              break;
            case 'window3':
              this[w] == true ? this.active3 = true : this.active3 = false;
              break;
            case 'window4':
              this[w] == true ? this.active4 = true : this.active4 = false;
              break;
            case 'bigwindow1':
              this[w] == true ? this.active1 = true : this.active1 = false;
              break;
            case 'bigwindow2':
              this[w] == true ? this.active2 = true : this.active2 = false;
              break;
            case 'bigwindow3':
              this[w] == true ? this.active3 = true : this.active3 = false;
              break;
            case 'bigwindow4':
              this[w] == true ? this.active4 = true : this.active4 = false;
              break;
            default:             
          }
        }   
    },
    components: {  
      leftBar,
      smallWindow,
      bigWindow,
      smallModule1,
      bigModule1
    }
}