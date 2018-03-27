<template>
  <div id="app">
  	<transition name='slide-left' mode='out-in'>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    width: 100%;
    height: 100%;
    background: #F1F1F1;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  ul{
    list-style: none;
    overflow: hidden;
  }
  input{
    border: none;
    outline: none;
  }
  img{
    vertical-align: middle;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  h1,h2,h3,h4,h5,h6,b,strong{
    font-weight: normal;
  }
  .slide-left-enter-active,
	.slide-left-leave-active {
		transition: all .1s ease-in;
		opacity: 1;
	}
	
	.slide-left-enter,
	.slide-left-leave-active {
		opacity: 0;
	}
</style>
