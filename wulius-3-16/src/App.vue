<template>
	<div id="app">
		<transition name='slide-left' mode='out-in'>
			<router-view v-if='isRouterAlive'></router-view>
		</transition>
		<v-tabbar></v-tabbar>
	</div>
</template>

<script>
	import tabbar from '@/components/tabbar';
	import api from './fetch/api';
	export default {
		data() {
			return {
				isRouterAlive: true
			}
		},
		name: 'App',
		beforeCreate: function() {
			var html = document.documentElement;
			var width = html.getBoundingClientRect().width;
			html.style.fontSize = width / 15 + 'px';
		},
		components: {
			'v-tabbar': tabbar
		},
		 methods: {
			reload() {
				this.isRouterAlive = false
				this.$nextTick(() => (this.isRouterAlive = true))
			}

		}		
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
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