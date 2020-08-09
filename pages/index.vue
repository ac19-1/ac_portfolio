<template>
  <div class="outer">
    <nav-bar/>
    <div class="header">
      <transition name="fade">
        <div id="circle" v-if="profileLoad">
          <img v-if="profileLoad" alt="profile_photo" src="~/assets/images/profile/profile.jpg" width="100%">
        </div>
      </transition>
      <div class="greetings">
        <transition name="hello-slide-fade">
          <img alt="Hello," src="~/assets/images/profile/hello.png" height="10%" id="hello" v-if="profileLoad">
        </transition>
        <transition name="name-slide-fade">
          <img alt="I'm Audrey" src="~/assets/images/profile/name.png" height="10%" id="name" v-if="profileLoad">
        </transition>
        <transition name="job-slide-fade">
          <div id="job" class="job" v-if="jobLoad">
            <div class="job-title d-flex justify-content-center">A Junior Front End</div>
            <div class="job-title d-flex justify-content-center">
              <label>
                <font class="text-pink">Developer</font> 
                and 
                <font class="text-blue">Designer</font>
              </label>
            </div>
          </div>
        </transition>
      </div>
      <transition name="job-slide-fade">
        <div id="button" class="d-flex justify-content-center align-items-flex-end" v-if="buttonLoad">
          <button
            class="no-outline font-weight-bold text-capitalize letter-spacing-15"
            @click="scrollDown"
          >
            <v-icon color="#757575" large>mdi-chevron-down</v-icon>
          </button>
          
        </div>
      </transition>
    </div>
    <div class="container m-height-full position-relative">
      <div style="height: 110vh" class="about container m-height-full d-flex justify-content-center align-items-center">
        <div class="p-5 about d-flex justify-content-center flex-wrap bg-white border-radius-8 box-shadow position-relative">
          <h3 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px">About Me</h3>
          <div style="margin:2% 0; display:grid; grid-template-columns: 25% 75%;" class="w-100">
            <div>
              <div class="d-flex justify-content-center">
                <div class="profile mb-3">
                  <img alt="profile_photo" src="~/assets/images/profile/profile.jpg" width="100%">
                </div>
              </div>
              <div class="profile-detail text-center">
                <input type="text" style="opacity:0; position:absolute; left:-99999px" id="myInput">
                <label for="" class="text-uppercase font-weight-bold">Audrey Chen</label>
                <div class="d-flex justify-content-around align-items-center icon px-5">
                  <b-button
                    @click="copyText('angelaaudrey15')" 
                    class="bg-transparent border-0 p-0" 
                    v-b-popover.hover.bottom="'angelaaudrey15'"
                  >
                    <font-awesome-icon id="contact-line" :icon="[icons.line.style, icons.line.name]" />
                  </b-button>
                  <b-button 
                    @click="copyText('angelaaudreychen15@gmail.com')" 
                    class="bg-transparent border-0 p-0" 
                    v-b-popover.hover.bottom="'angelaaudreychen15@gmail.com'"
                  >
                    <font-awesome-icon id="contact-envelope" :icon="[icons.envelope.style, icons.envelope.name]" />
                  </b-button>
                  <b-button 
                    @click="copyText('087768781471')" 
                    class="bg-transparent border-0 p-0" 
                    v-b-popover.hover.bottom="'087768781471'"
                  >
                    <font-awesome-icon id="contact-phone" :icon="[icons.phone.style, icons.phone.name]" />
                  </b-button>
                </div>
              </div>
            </div>
            <div class="profile-summary ml-4">
              <div>
                <h4 class="font-weight-bold">Who am I?</h4>
                <p class="text-justify">Hi! I'm a college student at Bina Nusantara University majoring in Computer Science program and I'm looking for the first job. I love developing a <font class="text-pink">beautiful</font> website and of course, I'm a fan of cute animals.</p>
              </div>
              <div>
                <h4 class="font-weight-bold">My Experience</h4>
                <p class="text-justify">A Teaching Assistant at Software Laboratory Center, Bina Nusantara University since 2019.</p>
              </div>
              <div>
                <h4 class="font-weight-bold">Tools</h4>
                <div style="display:grid; grid-template-columns:50% 50%" class="mb-3">
                  <div class="tools" v-for="x in tools" :key="x">
                    <div class="icon mr-2">
                      <v-icon>mdi-check</v-icon>
                    </div>
                    <div class="ide">{{x.name}}</div>
                  </div>
                </div>
              </div>
              <!-- <div>
                <h4 class="font-weight-bold">Working Environment</h4>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    
      <div style="height: 110vh" class="skills-overview container m-height-full d-flex justify-content-center align-items-center">
        <div class="p-5 bg-white d-flex justify-content-center align-items-center flex-wrap flex-column  border-radius-8 box-shadow position-relative">
          <h3 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px">Skills Overview</h3>
          <div class="skills d-flex justify-content-center flex-wrap">
            <b-card
              class="skill-pancake-flex mx-3"
              img-src="~/assets/images/skills/frontend.png"
              img-alt="frontend"
            >
              <b-card-title class="text-center">Front End</b-card-title>
              <b-card-text>
                <div class="">
                  <ul>
                    <li v-for="x in skills.frontend" :key="x">
                      <v-icon>mdi-check</v-icon>
                      {{x}}
                    </li>
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
                <div class="">
                  <ul>
                    <li v-for="x in skills.backend" :key="x">
                      <v-icon>mdi-check</v-icon>
                      {{x}}
                    </li>
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
                <div class="">
                  <ul>
                    <li v-for="x in skills.others" :key="x">
                      <v-icon>mdi-check</v-icon>
                      {{x}}
                    </li>
                  </ul>
                </div>
              </b-card-text>
            </b-card>
          </div>
        </div>
      </div>
      <footer/>
    </div>
    <div class="floating-button">
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
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="1000"
    >
      <div class="text-center">{{ copiedText }}</div>
    </v-snackbar>
  </div>
</template>

<script>
import { NavBar } from "~/components/NavBar";
import { Footer } from "~/components/Footer";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    icons: 'constants/get'
  }),
  components:{
    NavBar,
    Footer
  },
  head() {
    return {
      title: "Audrey Chen's Portfolio"
    }
  },

  data() {
    return {
      scrollTop: 0,
      profileLoad: false,
      jobLoad: false,
      buttonLoad: false,
      snackbar: false,
      copiedText: '',
      skills: {
        frontend: [
          'React',
          'Vue/Nuxt',
          'JavaScript/TypeScript',
          'HTML/CSS/SASS',
          'Bootstrap/Bootstrap-Vue',
          'Vuetify'
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
        { name: 'Visual Studio Code' },
        { name: 'Android Studio' },
        { name: 'Dev-C++' },
        { name: 'Eclipse' },
        { name: 'NetBeans' },
        { name: 'SQL Server Management Studio' },
        { name: 'Adobe Animate' },
        { name: 'PHPStorm' },
        { name: 'Axure' },
        { name: 'Visual Studio' },
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
      let job = document.querySelector('#job')
      let button = document.querySelector('#button')
      let scrollPercentage = Math.floor(window.scrollY/window.innerHeight*100)
      
      hello.style.transform = `translate(-30% ,-${30+scrollPercentage*6}%)`
      name.style.transform = `translate(-80% ,-${70+scrollPercentage*6}%)`
      circle.style.transform = `translate(-50% ,-${40+scrollPercentage*2}%)`
      job.style.transform = `translateY(-${90+scrollPercentage*6}%)`
      button.style.transform = `translateY(-${scrollPercentage*8}%)`

      job.style.opacity = 
      button.style.opacity = 
      hello.style.opacity = 
      name.style.opacity = 
      circle.style.opacity = `${100-scrollPercentage*2}%`
    },
    circleParallax() {
      let scrollPercentage = Math.floor(window.scrollY/window.innerHeight*100)
      let circles = document.querySelectorAll('.animation-circle')
      circles.forEach(c => {
        c.style.transform = `translate(-50% ,-${50+scrollPercentage}%)`
      });
    },
    firstLoad(){
      setTimeout(() => {
        this.profileLoad = true
      }, 1000);

      setTimeout(() => {
        this.jobLoad = true
      }, 1500);

      setTimeout(() => {
        this.buttonLoad = true
      }, 2000);
    },
    copyText(str){
      this.copiedText = "Copied to clipboard: " + str
      var copyText = document.getElementById("myInput");
      copyText.value = str
      copyText.select();
      document.execCommand("copy");
      this.snackbar = true
    }
  },

  mounted() {
    this.backToTop()
    this.setScrollTop()
    this.firstLoad()
    window.addEventListener('scroll', this.scrollHandler)
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

  .skills-overview li {
    list-style-type: none;
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
    top: 90%;
    width: 100%;
    transform: translateY(-90%)
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
    transition: opacity 1.5s !important;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0 !important;
  }

  .hello-slide-fade-enter-active, .hello-slide-fade-leave-active{
    transition: all 1.5s ease !important;
  }

  .hello-slide-fade-enter, .hello-slide-fade-leave-to{
    position: absolute !important;
    top: 30% !important;
    left: 26% !important;
    transform: translate(-26%, -30%) !important;
    opacity: 0 !important;
  }

  .name-slide-fade-enter-active, .name-slide-fade-leave-active{
    transition: all 1.5s ease !important;
  }

  .name-slide-fade-enter, .name-slide-fade-leave-to{
    position: absolute !important;
    top: 70% !important;
    left: 84% !important;
    transform: translate(-84%, -70%) !important;
    opacity: 0 !important;
  }

  .job-slide-fade-enter-active, .job-slide-fade-leave-active{
    transition: all 1.5s ease !important;
  }

  .job-slide-fade-enter, .job-slide-fade-leave-to{
    top: 85% !important;
    transform: translateY(-85%) !important;
    opacity: 0 !important;
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

  .border-radius-8{
    border-radius: 8px
  }

  .box-shadow {
    box-shadow: 0px 5px 20px 0px #dddddd;
  }

  #hello, #name, #circle, #job, #button {
    transition-duration: 0.05s;
  }

  .text-pink {
    color: #ff5b91
  }

  .text-blue {
    color: #5096ff
  }

  #contact-line, #contact-phone, #contact-envelope{
    transition: color 0.2s ease;
    cursor: pointer;
    font-size: 30px;
    color: #555555;
  }

  #contact-line:hover {
    color: #00c300;
  }

  #contact-phone:hover {
    color: #91bdff
  }

  #contact-envelope:hover {
    color: #ff4f4f
  }

  .btn:focus, .btn:active, .btn, .btn:hover{
    outline: none !important;
    box-shadow: none !important;
  }
</style>
