<template>
  <div id="nav">
    <a href="" class="text-dark nav-logo text-uppercase font-weight-bold">about</a>
		<a href="" class="text-dark nav-actions text-uppercase font-weight-bold">play ground</a>
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
			this.scrollTop == 0 ? nav.style.background = 'transparent' : nav.style.background ='white'
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
		transition: all 0.5s ease;
	}

	a{
		padding: 0.5% 1%;
		transition: all 0.3s ease;
	}

	a:hover {
		text-decoration: none;
		background-color: #fafafa;
		border-radius: 8px;
	}
</style>