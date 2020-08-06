<template>
  <div class="outer">
    <div class="header">
      <div class="circle">
        <img alt="" src="~/assets/images/profile/profile.jpg" width="100%">
      </div>
      <div class="greetings">
        <img id="hello" src="~/assets/images/profile/hello.png" alt="" height="10%">
        <img id="name" src="~/assets/images/profile/name.png" alt="" height="10%">
        <div class="job">
          <div class="job-title d-flex justify-content-center">A Front End Developer and Designer</div>
          <div class="d-flex justify-content-center">I love developing a beautiful website</div>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-flex-end">
        <button
          class="no-outline font-weight-bold text-capitalize letter-spacing-15"
          @click="scrollDown"
        >
          <v-icon color="#757575" large>mdi-chevron-down</v-icon>
        </button>
        
      </div>
    </div>
    <div class="skills-overview container m-height-full">
      <div class="title d-flex justify-content-center mt-5">Skills Overview</div>
      <div class="p-5 skills d-flex justify-content-center flex-wrap">
        <b-card
          class="skill-pancake-flex mx-3"
          img-src="~/assets/images/skills/frontend.png"
        >
          <b-card-title class="text-center">Front End</b-card-title>
          <b-card-text>
            <div class="container">
              <ul>
                <li v-for="x in skills.frontend" :key="x">{{x}}</li>
              </ul>
            </div>
          </b-card-text>
        </b-card>
        <b-card
          class="skill-pancake-flex mx-3"
          img-src="~/assets/images/skills/backend.png"
        >
          <b-card-title class="text-center">Back End</b-card-title>
          <b-card-text>
            <div class="container">
              <ul>
                <li v-for="x in skills.backend" :key="x">{{x}}</li>
              </ul>
            </div>
          </b-card-text>
        </b-card>
        <b-card
          class="skill-pancake-flex mx-3"
          img-src="~/assets/images/skills/others.png"
        >
          <b-card-title class="text-center">Others</b-card-title>
          <b-card-text>
            <div class="container">
              <ul>
                <li v-for="x in skills.others" :key="x">{{x}}</li>
              </ul>
            </div>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="floating-button">
      <transition name="fade">
        <v-btn
          fixed
          bottom
          right
          hover
          fab
          color="#757575"
          dark
          class="no-outline"
          @click="backToTop"
          v-show="scrollTop != 0"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Home"
    }
  },

  data() {
    return {
      scrollTop: 0,
      skills: {
        frontend: [
          'React',
          'Vue/Nuxt',
          'JavaScript/TypeScript',
          'HTML/CSS/SASS',
        ],
        backend: [
          'PHP/Laravel',
          'Firebase',
          'MSSQL/MySQL',
        ],
        others: [
          'C/C++',
          'C#',
          'Java Swing/Android',
          'Unity',
          'UX/Prototyping',
        ]
      }
    }
  },

  methods: {
    backToTop() {
      document.documentElement.scrollTop = 0;
      this.scrollTop = 0;
    },
    setScrollTop() {
      this.scrollTop = document.documentElement.scrollTop
    },
    scrollDown() {
      document.documentElement.scrollTop = window.innerHeight
    },
  },

  mounted() {
    window.addEventListener('scroll', this.setScrollTop)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif !important;
  }

  .outer{
    width: 100%;
    min-height: 100vh;
    background: #fbe4fc33
  }

  .header{
    position: relative;
    background-image: linear-gradient(to top, rgb(251, 228, 252) 0%, #fce4ec 20%, #e3eeff 100%);
    width: 100%;
    height: 100vh;
  }

  .circle{
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: white;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    overflow: hidden;
    box-shadow: 0px 5px 20px 0px #aaaaaa;
  }

  .circle > img {
    object-fit: cover;
    transform: rotate(-45deg) translate(10%) scale(1.2, 1.2);
    left: -10%;
  }

  .greetings {
    position: relative;
    width: 100%;
    height: 90%;
  }

  .job {
    position: absolute;
    bottom: 10%;
    width: 100%;
  }

  .job-title{
    font-weight: 700;
    font-size: 25px;
  }

  #hello {
    position: absolute;
    top: 30%;
    left: 30%;
    transform: translate(-30%, -30%);
  }

  #name {
    position: absolute;
    top: 70%;
    left: 80%;
    transform: translate(-80%, -70%);
  }

  .m-height-full{
    min-height: 100vh;
  }

  .no-outline{
    outline: none !important;
  }

  .fade-enter-active, .fade-leave-active{
    transition: opacity 0.1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .letter-spacing-15 {
    letter-spacing: 0.15em;
  }

  .title{
    font-size: 25px;
    font-weight: 600;
  }

  .skill-pancake-flex{
    flex: 0 1 300px;
    margin: 2% 0;
  }
</style>
