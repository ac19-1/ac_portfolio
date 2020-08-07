<template>
  <div class="outer">
    <div class="header">
      <div id="circle">
        <img alt="profile_photo" src="~/assets/images/profile/profile.jpg" width="100%">
      </div>
      <div class="greetings">
        <img id="hello" src="~/assets/images/profile/hello.png" alt="Hello" height="10%">
        <img id="name" src="~/assets/images/profile/name.png" alt="I'm Audrey" height="10%">
        <div class="job">
          <div class="job-title d-flex justify-content-center">A Junior Front End Developer and Designer</div>
          <div class="d-flex justify-content-center">I love developing beautiful website</div>
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
    <div class="container m-height-full">
      <v-tabs grow v-model="tab" color="#e3a0b6">
        <v-tab>Skills Overview</v-tab>
        <v-tab>About</v-tab>
        <!-- <v-tab>Work</v-tab> -->
      </v-tabs>
      <v-tabs-items v-model="tab" style="background:transparent">
        <v-tab-item>
          <div class="skills-overview container">
            <div class="p-5 skills d-flex justify-content-center flex-wrap">
              <b-card
                class="skill-pancake-flex mx-3"
                img-src="~/assets/images/skills/frontend.png"
                img-alt="frontend"
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
                img-alt="backend"
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
                img-alt="others"
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
        </v-tab-item>
        <v-tab-item>
          <div class="about container">
            <div class="p-5 about d-flex justify-content-center flex-wrap">
              <div style="margin:2% 0; display:grid; grid-template-columns: 25% 75%;" class="w-100">
                <div>
                  <div class="d-flex justify-content-center">
                    <div class="profile mb-3">
                      <img alt="profile_photo" src="~/assets/images/profile/profile.jpg" width="100%">
                    </div>
                  </div>
                  <div class="profile-detail text-center">
                    <label for="" class="text-uppercase font-weight-bold">Audrey Chen</label>
                  </div>
                </div>
                <div class="profile-summary ml-4">
                  <div>
                    <h4>Who am I?</h4>
                    <p class="text-justify">A college student at Bina Nusantara University, majoring in Computer Science Program, and concentrating in Database.</p>
                  </div>
                  <div>
                    <h4>My Experience</h4>
                    <p class="text-justify">A Teaching Assistant at Software Laboratory Center, BINUS University since 2019.</p>
                  </div>
                  <div>
                    <h4>Tools</h4>
                    <div class="tools" v-for="x in tools" :key="x">
                      <div class="icon">
                        
                      </div>
                      <div class="ide">{{x.name}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-tab-item>
        <!-- <v-tab-item>
          <div class="work container">

          </div>
        </v-tab-item> -->
      </v-tabs-items>
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
      },
      tab: null,
      tools: [
        {
          name: 'Visual Studio Code'
        },
        {
          name: 'Android Studio'
        },
        {
          name: 'Dev-C++'
        },
        {
          name: 'Eclipse'
        },
        {
          name: 'NetBeans'
        },
        {
          name: 'SQL Server Management Studio'
        },
        {
          name: 'Adobe Animate'
        },
        {
          name: 'PHPStorm'
        },
        {
          name: 'Axure'
        },
        {
          name: 'Visual Studio'
        }

      ]
    }
  },

  methods: {
    scrollHandler() {
      this.setScrollTop()
      this.parallax()
    },
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
    parallax() {
      let hello = document.querySelector('#hello')
      let name = document.querySelector('#name')
      let circle = document.querySelector('#circle')
      let scrollPercentage = Math.floor(window.scrollY/window.innerHeight*100)
      
      hello.style.transform = `translate(-30% ,-${30+scrollPercentage*3}%)`
      name.style.transform = `translate(-80% ,-${70+scrollPercentage*18}%)`
      circle.style.transform = `translate(-50% ,-${40+scrollPercentage*3}%)`
    }
  },

  mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    this.setScrollTop()
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
    /* background-image: linear-gradient(to top, rgb(251, 228, 252) 0%, #fce4ec 20%, #e3eeff 100%); */
    background-image: linear-gradient(to left, #fce4ec 0%, #fce4ec 50%,#e3eeff 50%, #e3eeff 100%);
    width: 100%;
    height: 100vh;
  }

  #circle, .profile{
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
  }

  .profile{
    width: 100px;
    height: 100px;
    border: 3px solid #ffffff;
    box-shadow: 0px 5px 20px 0px #aaaaaa;
  }

  #circle{
    width: 200px;
    height: 200px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    box-shadow: 0px 5px 20px 0px #aaaaaa;
  }

  #circle > img, .profile img {
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

  .v-tabs-bar {
    background: transparent !important;
  }

  .v-tab{
    text-transform: none !important;
    font-size: large;
    font-weight: bolder;
  }

  .tools {
    display: flex;
  }
</style>
