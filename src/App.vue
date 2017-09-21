<template>
    <div id="app">   
        <headerWrap></headerWrap>  
       	<keep-alive>
        	<router-view></router-view>
        </keep-alive>
    </div>
</template>


<script>
import headerWrap from 'components/header/header'

export default {
    name: 'app',
    components: {
        headerWrap
    }
}
</script>

<style lang="scss" scoped>
#app{
	position: relative;
}
</style>
