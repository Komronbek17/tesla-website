<template>
  <div 
    class="whole-app" 
  >
    <router-view />
  </div>
</template>

<script>
export default {
  components:{
  },
  methods:{
    
  },
  setup(){
        
  }

}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  background-attachment: fixed;
}
.whole-app{
  scroll-behavior: smooth;
  overflow-x: hidden;
  position:relative;
}
</style>
