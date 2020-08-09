<template>
  <div id="nav">
    <div class="w-50 h-100">
			<a href="#about" class="text-dark nav-logo text-uppercase font-weight-bold">about</a>
			<a href="#skills-overview" class="text-dark nav-logo text-uppercase font-weight-bold">skills overview</a>
		</div>
		<div class="w-50">
			<!-- <a href="" class="text-dark nav-actions text-uppercase font-weight-bold">play ground</a> -->
		</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
		}
	},

	methods: {
		scrollHandler() {
			this.setScrollTop()
			this.setNavBar()
    },
		setScrollTop() {
      this.scrollTop = document.documentElement.scrollTop
		},
		setNavBar() {
			let nav = document.querySelector('#nav')
			this.scrollTop == 0 ? nav.style.background = 'transparent' : nav.style.background ='#ffd2d2'
		}
	},

	mounted() {
		window.addEventListener('scroll', this.scrollHandler)
	}
}
</script>

<style>
	#nav{
		display: flex;
		justify-content: space-between;
		padding: 1.2% 3%;
		position: fixed;
		top: 0;
		z-index: 10000;
		width: 100%;
		transition: all 0.2s ease;
	}

	#nav a{
		padding: 1% 2%;
		transition: all 0.2s ease;
	}

	#nav a:hover {
		text-decoration: none;
		background-color: #ffffff;
		border-radius: 8px;
	}
</style>