<template>
<nav class="navbar navbar-expand-lg cor-nav nav-underline">
  <div class="container-fluid">
   
    <a class="navbar-brand" href="#">
      <img class="logo-inicio" src="./assets/logo.jpeg">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item menu-gap">
          <a class="nav-link active" id="cor-texto" aria-current="page" href="#"> <router-link to="movimentacao-lista"> Home </router-link> </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="cor-texto" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Itens
          </a>
          <ul class="dropdown-menu" >
            <li><h2 class="dropdown-item" href="#" id="nav-menu"> <router-link to="movimentacao-lista">Movimentações </router-link> </h2> </li>
            <li><hr class="dropdown-divider"></li>
            <li><h2  class="dropdown-item" href="#" id="nav-menu"> <routerLink to="/condutor-lista">Condutores</RouterLink></h2></li>
            <li><h2  class="dropdown-item" href="#" id="nav-menu"> <router-link to="/veiculo-lista">Veiculos </router-link></h2></li>
            <li><h2  class="dropdown-item" href="#" id="nav-menu"> <router-link to="/configuracao-lista">Configurações </router-link></h2></li>
            <li><hr class="dropdown-divider"></li>
            <li><h2  class="dropdown-item" href="#" id="nav-menu"><router-link to="/marca-lista">Marca</router-link></h2></li>
            <li><h2  class="dropdown-item" href="#" id="nav-menu"> <router-link to="/modelo-lista">Modelo </router-link></h2></li>
            
          </ul>
        </li> 
      </ul>
    </div>
  </div>
</nav>
<router-view/>
</template>

<style lang="scss">
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";

// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
  #nav-menu{
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 100%;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: #070202;

    &.router-link-exact-active {
      color:#000201;
    }
  }
}
.cor-nav{
    background-color: #1b1a1f;
  }
  .logo-inicio{
    width: 40%;
    right: 50%;
    margin-left: 30%;
  }
  #cor-texto{
    color: white;
  }
</style>
