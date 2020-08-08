<template>
  <div id="nav">
      <div class="nav-logo">home</div>
			<div class="nav-actions">fun</div>
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
			this.scrollTop == 0 ? nav.style.background = 'transparent' : nav.style.background ='rgba(255,255,255,0.6)'
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
		padding: 1.5% 3%;
		position: fixed;
		top: 0;
		z-index: 10000;
		width: 100%;
		transition: all 0.2s ease;
	}
</style>