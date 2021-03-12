<template>
  <div  
    class="home" 
    ref="home" 
  >
    <!-- Logo -->
    <div class="tesla-logo">
      <img src="../assets/images/tesla-logo.png" alt="logo png">
    </div>
    <!-- Header -->
    <transition enter-active-class="animate__animated animate__lightSpeedInRight">
      <div class="header" v-if="showHeader">
        <h2>model s</h2>
        <div class="order">
          <span>Order online for</span> 
          <a href="#">Touchless Delivery</a>
        </div>
      </div>
    </transition>

    <!-- Buttons -->
    <transition 
      enter-active-class="animate__animated animate__backInUp"
      leave-active-class="animate__animated animate__hinge"
    >
      <div class="order-btn" v-if="showOrder">
        <div class="inner-container">
          <button>custom order</button>
          <button>existing inventory</button>
          <div class="down-icon">
            <i class="fas fa-chevron-down fa-2x"></i>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'InnerContainer',
  
  /* PROPS */
  props:['imageBg'],

  /* COMPONENTS */
  components: {
    
  },
  
  /* DATA */
  data() {
    return {
      showHeader: false,
      showOrder:false,
    }
  },

  /* COMPUTED */
  computed:{
  },

  /* MOUNTED */
  mounted(){
    setTimeout(() => {
      this.showHeader = true;
    },1000);
    
    setTimeout(() => {
      this.showOrder = true;
    },3000);


    // Set background image
    this.$refs.home.style.backgroundImage = 
    'url(' + require(`../assets/images/${this.imageBg}`) + ')';
  },

  /* METHODS */
  methods:{

  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

.home{
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width:100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;

}
/* LOGO */
.tesla-logo{
  position:absolute;
  top:8%;
  left:0%;

  img{
    width:5rem;

    @media screen and (max-width:850px){
      &{
        width: 3rem;
      }
    }
  }

}

/* Header */
.header{
  position: absolute;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  top:10%;
  left:0;
  text-align: center;
  color:#292930;

  h2{
    text-align: center;
    font-size: 2rem;
    text-transform: capitalize;
    margin-bottom: 0.7rem;

    @media screen and (max-width:450px){
      &{
        font-size: 1.5rem;
      }
    }

    @media screen and (max-width:230px){
      &{
        font-size: 1.1rem;
      }
    }
  }

  .order{
    a{
      display: inline-block;
      margin-left: .3rem;
      color: #292930;
      text-decoration: none;
      border-bottom: 1px solid #292930;
      transform: all 0.5s;

      &:hover{
        color:rgb(71, 23, 243);
        border-color: rgb(71, 23, 243);
        padding-bottom: 0.1rem;
      }
    }

    @media screen and (max-width:320px){
      &{
        font-size: .8rem;
      }
    }

    @media screen and (max-width:230px){
      &{
        font-size: .5rem;
      }
    }
  }
  
}
/* end of header */


/* INNER CONTAINER */
.inner-container{
  width:100%;
  text-align: center;
}

/* Order Button */
.order-btn{
  position: absolute;
  width:100%;
  bottom: 10%;
  left: 0;

  button{
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;    
    outline: none;
    border: none;
    margin-left: 1.5rem;
    padding:.5rem;
    border-radius: 30px;
    width: 15rem;
    transition: all .5s ease;

    @media screen and (max-width:600px){
      &{
        width:12rem;
      }
    }

    @media screen and (max-width:470px){
      &{
        width:9rem;
        font-size: .5rem;
      }
    }

    @media screen and (max-width:350px){
      &{
        width:7rem;
        font-size: .4rem;
        white-space: nowrap;
        padding:0.3rem;
      }
    }

    @media screen and (max-width:270px){
      &{
        width:5rem;
        font-size: .4rem;
        white-space: nowrap;
        padding:0.3rem;
      }
    }
    
    &:hover{
      letter-spacing: 2px;
    }
  
    &:active{
      transform: scale(0.85);
    }
  }

  button:nth-child(1){
    background: #000;
    color:#FEFEFE;
  }

  .down-icon{
    text-align: center;
    margin-left: 1.5rem;
    animation: move-icon 2s ease-in-out 1s infinite ;

    @media screen and (max-width:400px){
      &{
        font-size: .8rem;
      }
    }

    @media screen and (max-width:300px){
      &{
        font-size: .5rem;
      }
    }
  }

  @keyframes move-icon {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(20px);
    }
    100%{
      transform: translateY(0);
    }
  }

}
</style>
