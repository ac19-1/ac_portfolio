<template>
  <div class="outer">
    <nav-bar />
    <div class="landing-pages">
      <h2 class="text-center font-weight-bold">Landing Pages</h2>
      <div class="images d-flex justify-content-center flex-wrap">
        <div class="page d-flex justify-content-center flex-wrap">
          <b-card
            class="page-pancake-flex mx-3"
            :img-src="require(`~/assets/images/extras/landing-pages/${x.image}`)"
            :img-alt="x.name"
            v-for="x in pages"
            :key="x"
          >
            <b-card-title class="text-justfiy">{{x.name}}</b-card-title>
						<b-card-text class="text-justify">{{x.description}}</b-card-text>
          </b-card>
        </div>
      </div>
    </div>
	<Footer/>
  </div>
</template>

<script>
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    pages: "landing-pages/get"
  }),

  components: {
    Footer,
    NavBar
  },

  data() {
    return {
      scrollTop: 0,
      showNav: false
    };
  },

  methods: {
    setNavBar() {
      let nav = document.querySelector("#nav");
      document.documentElement.scrollTop != 0
        ? (nav.style.background = "#ffd2d2")
        : this.showNav
        ? (nav.style.background = "#ffd2d2")
        : (nav.style.background = "transparent");
    },
    scrollHandler() {
      this.setScrollTop();
      this.setNavBar();
    },
    backToTop() {
      document.documentElement.scrollTop = 0;
      this.scrollTop = 0;
    },
    setScrollTop() {
      this.scrollTop = document.documentElement.scrollTop;
    }
  },

  mounted() {
    this.backToTop();
    this.setScrollTop();
    window.addEventListener("scroll", this.scrollHandler);
  }
};
</script>

<style>
.outer {
  width: 100%;
  min-height: 100vh;
  background: rgba(251, 228, 252, 0.5);
}

.box-shadow {
  box-shadow: 0px 5px 20px 0px #dddddd;
}

.landing-pages {
  padding-top: 10vh;
  padding-bottom: 10vh;
}

.page-pancake-flex {
  flex: 0 1 70vw;
  margin: 2% 0;
}

.page-pancake-flex .card-body {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.page-pancake-flex .card-img,
.card-img-bottom {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
</style>