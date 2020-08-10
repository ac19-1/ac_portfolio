<template>
  <div id="nav">
    <div class="w-100 h-100">
			<button @click="scrollTo('about')" class="text-dark nav-logo text-uppercase font-weight-bold">about</button>
			<button @click="scrollTo('experience')" class="text-dark nav-logo text-uppercase font-weight-bold">experience</button>
			<button @click="scrollTo('skills-overview')" class="text-dark nav-logo text-uppercase font-weight-bold">skills overview</button>
			<button @click="scrollTo('tools')" class="text-dark nav-logo text-uppercase font-weight-bold">tools</button>
		</div>
  </div>
</template>

<script>
export default {
	name:"NavBar",
	data() {
		return {
			
		}
	},

	methods: {
		scrollHandler() {
			this.setNavBar()
		},
		setNavBar() {
			let nav = document.querySelector('#nav')
			document.documentElement.scrollTop == 0 ? nav.style.background = 'transparent' : nav.style.background ='#ffd2d2'
		},
		scrollTo(element) {
				var e = document.getElementById(element)
				e.scrollIntoView()
		}
	},

	mounted() {
		window.addEventListener('scroll', this.scrollHandler)
		this.setNavBar()
	}
}
</script>

<style>
	#nav{
		display: flex;
		justify-content: space-between;
		padding: 1% 3%;
		position: fixed;
		top: 0;
		z-index: 10000;
		width: 100%;
		transition: all 0.2s ease;
	}

	#nav button{
		padding: 0.5% 2%;
		transition: all 0.2s ease;
	}

	#nav button:hover {
		text-decoration: none;
		background-color: #ffffff;
		border-radius: 8px;
	}

	#nav button:focus, #nav button:active {
		outline: none
	}
</style>