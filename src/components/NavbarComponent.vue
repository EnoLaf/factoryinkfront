<!-- src/components/NavbarComponent.vue -->
<template>
    <header class="header">

      <div class="logo">
        <a href="/">
          <img src="../../public/logo.png" alt="Logo">
        </a>
      </div>
        
      <div class="navigation">

        <input type="checkbox" class="toggle-menu">
        <div class="hamburger"></div>

        <ul class="menu">
          <li>
            <router-link to="/" class="link">Accueil</router-link>
          </li>
          <li>
            <router-link to="/shop" class="link">Le Shop</router-link>
          </li>
          <li>
            <router-link to="/flash" class="link">Flash</router-link>
          </li>
          <li>
            <router-link to="/artistes" class="link">Artistes</router-link>
          </li>
          <li>
            <router-link to="/contact" class="link">Contact</router-link>
          </li>
          <li>
            <router-link to="/faq" class="link">FAQ</router-link>
          </li>
        </ul>

      </div>
        
      </header>
  </template>
  
  <script>
  export default {
    name: "NavbarComponent",
  };
  </script>

<style scoped>
.header{
  position: relative;
  width: 100%;
  height: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--bronze-30);
  padding: 0 4vw;
  transition: 0.3s;
}
.logo a{
  display: block;
}
.logo a img{
  display: block;
  width: 100%;
}
.navigation{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  z-index: 1;
  transition: 0.5s;
}
.menu li{
  list-style-type: none;
}
.menu li .link{
  color: var(--light-grey);
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  padding: 40px 25px;
  line-height: 1;
  transition: 0.3s;
}
.hamburger{
  position: relative;
  width: 30px;
  height: 4px;
  background-color: var(--light-grey);
  border-radius: 10px;
  z-index: 2;
  transition: 0.3s;
}
.hamburger:before, .hamburger:after{
  content: '';
  position: absolute;
  height: 4px;
  width: 30px;
  right: 0;
  background: var(--light-grey);
  border-radius: 10px;
  transition: 0.3s;
}
.hamburger:before{
  top: -10px;
}
.hamburger:after{
  top: 10px;
}
.toggle-menu{
  position: absolute;
  width: 30px;
  height: 100%;
  z-index: 3;
  opacity: 0;
}
.hamburger, .toggle-menu{
  display: none;
}
.navigation input:checked ~ .hamburger{
  background: transparent;
}
.navigation input:checked ~ .hamburger:before{
  top: 0;
  transform: rotate(-45deg);
}
.navigation input:checked ~ .hamburger:after{
  top: 0;
  transform: rotate(45deg);
}
.navigation input:checked ~.menu{
  right: 0;
}

/* Responsive */
@media (max-width : 480px) {
  .header{
    height: 4.375rem;
    padding: 10px 20px;
  }
  .logo a img{
    width: 40px;
    height: 40px;
  }
  .hamburger, .toggle-menu{
    display: block;
  }
  .menu{
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: -100%;
    background: var(--black);
    width: 100%;
    height: 100%;
    padding-top: 5rem;
  }
  .menu li{
    width: 100%;
  }
  .menu li .link{
    padding: 30px;
    font-size: 1.5rem;
  }
}

@media (min-width: 481px) and (max-width : 1024px) {
  .menu li .link{
    font-size: 1.125rem;
    padding: 30px 15px;
  }
}

</style>
   