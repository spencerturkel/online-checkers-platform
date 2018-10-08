<template>
  <link rel="stylesheet" href="index.css">
  <title>Checkers</title>

  <a href="https://google.com">
    <button id="START">
      START
    </button>
  </a>

  <a href="https://google.com">
    <button id="ACCOUNT">
      ACCOUNT
    </button>
  </a>

  <img id = "StartScreen" src="../src/assets/CheckersMainMenuGraphic.png" alt= "Start Screen" width="50%" height = "50%">

<!--
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
-->
<style>
/*
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/

/*Allows for Full Scale background*/
body, html{
  height : 100%;
}

/*Accesses the Start Screen*/
#StartScreen{
  height : 100%;

  /*Centers the image and does not allow it to repeat*/
  background: no-repeat center;
  background-size: cover;

  /*Centers the image along the horizontal*/
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/*Not entirely sure what this does, but it's necessary*/
button{
  position:absolute;
}

/*Sets the Start Button's Position*/
#START{
  top:15%;
  left: 50%;
}

/*Sets the Account Button's Position*/
#ACCOUNT{
  top:20%;
  left: 48.6%;
}
</style>
