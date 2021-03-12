<template>
    <!-- Icon Bar -->
    <div 
        class="icon-bar"  
        @click=" showBar.logic = !showBar.logic; 
        navigation.logic=!navigation.logic " 
        v-if="showBar.logic"
    >
      <i class="fas fa-bars"></i>
    </div>
    <transition
        enter-active-class="animate__animated animate__backInLeft"
        leave-active-class="animate__animated animate__rollOut"
    >
        <div 
            :class="{
                'nav-menu':!showNav.logic,
                'nav-container':showNav.logic,
            }"
            v-if="navigation.logic"
        >
            <div class="nav-list">
                <!-- Times Button -->
                <div 
                    class="times-btn" 
                    v-if="showNav.logic" 
                    @click="cancelNavbar"
                >
                    <i class="fas fa-times"></i>
                </div>
                <!-- Navigation Link -->
                <div class="link" v-for="nav in navMenu" :key="nav">
                    <span v-text="nav"></span>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
    /* SETUP */
    setup(){
        let showNav = ref({logic : window.innerWidth > 600 ? false : true});
        let showBar=ref({logic:showNav.value.logic});
        let navigation=ref({ logic:false });

        onMounted(() => {
            if(window.innerWidth>600){
                navigation.value.logic = true;
            }
        })

        window.addEventListener('resize',() => {
            if(window.innerWidth > 600){
                showNav.value.logic = false;
                showBar.value.logic=false;
                navigation.value.logic = true;
            }
            else{
                showNav.value.logic = true;
                showBar.value.logic=true;
                navigation.value.logic = false;
            }

        });

        /* Cancel Navbar */
        function cancelNavbar(){
            showBar.value.logic = true; 
            navigation.value.logic = false    
        }        

        return {
            showNav,
            showBar,
            navigation,
            cancelNavbar
        }
    },
    data() {
        return {
            navMenu: [
                'MODEL S',
                'MODEL 3',
                'MODEL X',
                'MODEL Y',
                'SOLAR ROOF',
                'SOLAR PANELS',
                'SHOP',
                'TESLA ACCOUNT'
            ],
        }
    },
    methods:{
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

/* Navbar */
.nav-container{
    position:fixed;
    right: 0;
    top:0;
    width: 60vw;
    height: 100vh;
    background: #F7F7F7;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .link{
        &:nth-child(1){
            margin-top: 2rem;
        }

        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-top: 2rem;
        font-family: monospace;
        font-size: 1.5rem;
        width: 40vw;
        cursor: pointer;
        text-align: center;
        transition: all .5s;
        z-index: 2;
        margin-top: 1rem;

        @media screen and (max-width:400px){
            &{
                padding-top: 1rem;
                font-size: 1.1rem;
            }
        }

        @media screen and (max-width:300px){
            &{
                padding-top: 0.5rem;
                font-size: 1rem;
                white-space: nowrap;
            }
        }

        &::before{
            content: '';
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            z-index: -1;
            bottom:0;
            left:0;
            width: 0;
            height: 2px;
            background: #361999;
            transition: all .5s;
        }

        &:hover{
            letter-spacing: 2px;
            color:#361999;
            padding: 1rem;

            &::before{
                width: 100%;
            }
        }
    }
}

/* Times Btn */
.times-btn{
    position: absolute;
    top:0;
    left:0;
    margin-bottom:1rem;
    margin-left: 0.5rem;
    margin-top:0.3rem;
    font-size: 1.5rem;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    color:rgb(240, 66, 66);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    transition: all 0.5s ;

    @media screen and (max-width:400px){
        font-size: 1rem;
    }

    &:hover{
        border: 1px solid rgb(240, 66, 66);
        transform: scale(1.1);
    }
    &:active{
        transform: scale(0.9);
    }
}

/* Nav-menu */
.nav-menu{
    position: fixed;
    width: 100%;
    top:0;
    right: 0;
    z-index:1;
    background:#1A2238;
    padding:0.5rem;
    color:whitesmoke;

    .nav-list{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .link{
        display: inline-block;
        cursor:context-menu;
        text-transform:capitalize;
        font-family: 'Lato', sans-serif;
        position: relative;
        padding:.1rem;
        margin-top:.2rem;
        margin-left:4rem;
        color:whitesmoke;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        @media screen and (max-width:1200px) {
            &{
                margin-left: 2rem;
                font-size: .7rem;
            }
        }

        @media screen and (max-width:850px) {
            &{
                margin-left: 1rem;
                font-size: .5rem;
            }
        }

        span{
            // padding-left: .1rem;
            // width:3rem;
            display: inline-block;
            white-space: nowrap;
        }

        &:hover{
            transform: scale(1.1);
            color: #ce2b98;
            letter-spacing: .5px;
        }
    }
}

/* Icon-Bar */
.icon-bar{
  position: fixed;
  top:0;
  right: 0;
  margin: 0.5rem;
  z-index: 10;
  cursor: pointer;
  font-size: 1.5rem;
  transition: all .5s;

  &:hover{
    color: #371BB1;
    transform: scale(1.1);
  }

  &:active{
    transform: scale(0.95);
  }
}
</style>