<template>
  <div id="app">
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/"><span id="navbar">HOME</span></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link :to="'/menu'"><b-nav-item href="/menu"><span id="navbar">MENU</span></b-nav-item></router-link>
        <router-link :to="'/recipe'"><b-nav-item href="/recipe"><span id="navbar">RECIPE</span></b-nav-item></router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

<br><br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "https://www.w3schools.com/lib/w3-colors-2020.css";
@import "https://www.w3schools.com/lib/w3-colors-2021.css ";
@import "https://www.w3schools.com/lib/w3-colors-2019.css ";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}

#menu {
  font-family: gabriola, Helvetica, sans-serif;
  text-align: center;
  font-weight:900;
  font-size: 30px;
  margin-top: 40px;

}
input:checked {
  height: 20px;
  width: 20px;
  box-shadow: 0 0 0 3px red;
}
input:checked + label {
  color:magenta;
}
.footer{
  padding: 10px;
  text-align: left;
  background: #1abc9c;
  color: white;
  font-size: 10px;
  font-style:italic;
  font-weight: bolder;
}
#navbar {
  color:darkblue;
  font-weight: bold;
}
</style>
