<template>
  <div id="nav">
    <div id="bigscreen" class="w-100">
			<button @click="scrollTo('about')" class="text-dark nav-logo text-uppercase font-weight-bold">about</button>
			<button @click="scrollTo('experience')" class="text-dark nav-logo text-uppercase font-weight-bold">experience</button>
			<button @click="scrollTo('skills-overview')" class="text-dark nav-logo text-uppercase font-weight-bold">skills overview</button>
			<button @click="scrollTo('tools')" class="text-dark nav-logo text-uppercase font-weight-bold">tools</button>
		</div>
		<div id="smallscreen" class="w-100">
			<button @click="toggleMenu" class="text-dark nav-logo text-uppercase font-weight-bold">menu</button>
			<transition name="navbar-slide-down">
				<div id="navbarmenu" v-if="showNav">
					<hr style="margin:8px">
					<div>
						<button @click="scrollTo('about')" class="text-dark nav-logo text-uppercase font-weight-bold">about</button>
					</div>
					<div>
						<button @click="scrollTo('experience')" class="text-dark nav-logo text-uppercase font-weight-bold">experience</button>
					</div>
					<div>
						<button @click="scrollTo('skills-overview')" class="text-dark nav-logo text-uppercase font-weight-bold">skills overview</button>
					</div>
					<div>
						<button @click="scrollTo('tools')" class="text-dark nav-logo text-uppercase font-weight-bold">tools</button>
					</div>
				</div>
			</transition>
		</div>
  </div>
</template>

<script>
export default {
	name:"NavBar",
	data() {
		return {
			showNav: false
		}
	},

	methods: {
		scrollHandler() {
			this.setNavBar()
		},
		setNavBar() {
			let nav = document.querySelector('#nav')
			document.documentElement.scrollTop != 0 ? nav.style.background ='#ffd2d2' : this.showNav ? nav.style.background = '#ffd2d2' : nav.style.background = 'transparent'
		},
		scrollTo(element) {
				var e = document.getElementById(element)
				e.scrollIntoView()
		},
		toggleMenu() {
			let nav = document.querySelector('#nav')
			this.showNav = !this.showNav
			this.showNav ? nav.style.background = '#ffd2d2' : this.setNavBar()
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

	.navbar-slide-down-enter-active{
    transition: all 0.2s ease !important;
  }

  .navbar-slide-down-enter, .navbar-slide-down-leave-to{
    /* top: 200% !important;
    transform: translateY(-200%) !important; */
		opacity: 0 !important;
  }

	#smallscreen {
		display: none;
	}

	#bigscreen {
		display: block;
	}

	@media screen and (max-width: 800px){
		#smallscreen {
			display: block;
		}

		#bigscreen {
			display: none;
		}
	}
</style>