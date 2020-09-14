<template>
  <div id="nav">
    <div id="bigscreen" class="w-100">
			<button @click="() => {this.$router.push('/')}" class="text-dark nav-logo text-uppercase font-weight-bold">home</button>
			<button @click="() => {this.$router.push('/extras')}" class="text-dark nav-logo text-uppercase font-weight-bold">extras</button>
		</div>
		<div id="smallscreen" class="w-100">
			<button @click="toggleMenu" class="text-dark nav-logo text-uppercase font-weight-bold">menu</button>
			<transition name="navbar-transition">
				<div id="navbarmenu" v-if="showNav">
					<hr style="margin:8px">
					<div>
						<button @click="() => {this.$router.push('/')}" class="text-dark nav-logo text-uppercase font-weight-bold">home</button>
					</div>
					<div>
						<button @click="() => {this.$router.push('/extras')}" class="text-dark nav-logo text-uppercase font-weight-bold">extras</button>
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
				if(e !== null) e.scrollIntoView()
		},
		toggleMenu() {
			let nav = document.querySelector('#nav')
			this.showNav = !this.showNav
			this.showNav ? nav.style.background = '#ffd2d2' : this.setNavBar()
    },
    resizeHandler() {
      if(this.showNav && window.innerWidth >= 800) {
        let nav = document.querySelector('#nav')
        this.showNav = !this.showNav
        this.showNav ? nav.style.background = '#ffd2d2' : nav.style.background = 'transparent'
      }
    }
	},

	mounted() {
		window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.resizeHandler)
		this.setNavBar()
	}
}
</script>

<style>
	#nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5vh 3%;
		position: fixed;
		min-height: 10vh;
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

	.navbar-transition-enter-active{
    transition: all 0.2s ease !important;
  }

  .navbar-transition-enter, .navbar-transition-leave-to{
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