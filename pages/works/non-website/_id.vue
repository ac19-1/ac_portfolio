<template>
  <div class="outer">
    <nav-bar />
    <div class="work_detail" v-if="work !== null && work !== undefined">
      <div id="detail_title" class="d-flex justify-content-center">
        <h4 class="font-weight-bold">{{work.name}}</h4>
      </div>
      <v-carousel
        cycle
        hide-delimiter-background
        height="500"
        light
        :show-arrows="false"
        class="my-3"
      >
        <v-carousel-item
          v-for="x in work.all_images"
          :key="x"
        >
          <v-sheet
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div id="detail_image" class="px-3 d-flex justify-content-center flex-wrap w-100 h-100">
                <v-img :aspect-ratio="3" width="100%" max-width="1000px" :src="require(`~/assets/images/projects/${work.type}/${work.folder}/${x.name}`)" contain></v-img>
                <div id="detail_image_description" class="w-100 d-flex justify-content-center text-center mt-2">
                  <label class="p-2" for="">{{x.description}}</label>
                </div>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <div id="detail_description" class="px-5 py-3">
        <label for="" class="font-weight-bold">About this application</label>
        <p class="text-justify">{{work.description}}</p>
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
    works: 'works/get',
  }),

  components:{
    Footer,
    NavBar
  },

  data() {
    return {
      scrollTop: 0,
      showNav: false,
      work: null,
    }
  },

  methods: {
    setNavBar() {
			let nav = document.querySelector('#nav')
			document.documentElement.scrollTop != 0 ? nav.style.background ='#ffd2d2' : this.showNav ? nav.style.background = '#ffd2d2' : nav.style.background = 'transparent'
		},
    scrollHandler() {
      this.setScrollTop()
      this.setNavBar()
    },
    backToTop() {
      document.documentElement.scrollTop = 0;
      this.scrollTop = 0;
    },
    setScrollTop() {
      this.scrollTop = document.documentElement.scrollTop
    },
    find() {
      let w = this.works.non_website.find(x => {return x.id == this.$route.params.id})
      this.work = w
    }
  },

  mounted() {
    this.find()
    this.backToTop()
    this.setScrollTop()
    window.addEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style>
  .outer{
    width: 100%;
    min-height: 100vh;
    background: rgba(251, 228, 252, 0.5)
  }

  .box-shadow {
    box-shadow: 0px 5px 20px 0px #dddddd;
  }

  .work_detail {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }

  #detail_title > h4 {
    font-size: calc(20px + 0.25rem) !important;
  }

  #detail_image > img {
    height: 80%;
  }

  .v-carousel .theme--light {
    background: transparent !important;
  }
</style>