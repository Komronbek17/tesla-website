<template>
  <div style="background-attachment: fixed"> 
    <!-- Navigation -->
    <Navigation />
    <div 
      v-for="url in urls" 
      :key="url"
    >
      <inner-container :imageBg="url"></inner-container>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Navigation from '@/components/Navigation.vue';
  import InnerContainer from '@/components/InnerContainer';

  import { ref } from 'vue'
  export default {
    /* COMPONENTS */
    components:{
      InnerContainer,
      Navigation
    },
    /* DATA */
    data() {
      return {
        urls: './assets/images/tesla-logo.png'
      }
    },
    /* Setup */
    setup(){
      const urls = [
        'tesla-model-s.jpg',
        'tesla-model-y.jpg',
        'tesla-model-3.png',
        'tesla-model-x.jpg',
        'solar-panels.jpg',
        'solar-roof.jpg',
        'tesla-charger.jpg',
      ];


      return {
        urls,
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>