<template>
  <div id="app">
    <div class="header">
      <div class="container">
        <div class="d-flex align-center">
          <router-link to="/">
            <img alt="logo" src="./assets/logo.png">
          </router-link>
          <router-link to="/">Home</router-link>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header{
  border-bottom: 1px solid #eaecef;
  background-color: #f5f5f5;
  img{
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  a{
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #2c3e50;
  }
}
</style>
