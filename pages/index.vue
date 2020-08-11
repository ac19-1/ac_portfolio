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
          <img alt="Hello," src="~/assets/images/profile/hello.png" id="hello" v-if="profileLoad">
        </transition>
        <transition name="name-slide-fade">
          <img alt="I'm Audrey" src="~/assets/images/profile/name.png" id="name" v-if="profileLoad">
        </transition>
        <transition name="nickname-slide-fade">
          <div id="nickname" class="nickname" v-if="nicknameLoad">
            <div class="nickname-title d-flex justify-content-center">Or you can call me</div>
            <div class="nickname-title d-flex justify-content-center">
              <label>
                <font class="nickname-text text-pink">Audrey</font>
              </label>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="position-relative">

      <div style="background:rgba(105, 240, 174, 0.4)">
        <div id="about" class="about container d-flex justify-content-center align-items-center p-3">
          <div class="p-5 about d-flex justify-content-center flex-wrap bg-white border-radius-8 box-shadow position-relative" style="margin: 10vh 0">
            <h4 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px;">About Me</h4>
            <div style="margin:2% 0;" class="w-100">
              <div>
                <div class="d-flex justify-content-center">
                  <div class="profile mb-3">
                    <img alt="profile_photo" src="~/assets/images/profile/profile.jpg" width="100%">
                  </div>
                </div>
                <div class="profile-detail text-center">
                  <input type="text" readonly style="opacity:0; position:absolute; left:-99999px" id="myInput">
                  <label for="" class="text-uppercase font-weight-bold">Audrey Chen</label>
                  <div class="d-flex justify-content-center align-items-center icon w-100">
                    <b-button
                      @click="copyText('angelaaudrey15')" 
                      class="bg-transparent border-0 mx-3" 
                      v-b-popover.hover.bottom="'angelaaudrey15'"
                    >
                      <font-awesome-icon id="contact-line" :icon="[icons.line.style, icons.line.name]" />
                    </b-button>
                    <b-button 
                      @click="copyText('angelaaudreychen15@gmail.com')" 
                      class="bg-transparent border-0 mx-3" 
                      v-b-popover.hover.bottom="'angelaaudreychen15@gmail.com'"
                    >
                      <font-awesome-icon id="contact-envelope" :icon="[icons.envelope_square.style, icons.envelope_square.name]" />
                    </b-button>
                    <b-button 
                      @click="copyText('087768781471')" 
                      class="bg-transparent border-0 mx-3" 
                      v-b-popover.hover.bottom="'087768781471'"
                    >
                      <font-awesome-icon id="contact-phone" :icon="[icons.phone.style, icons.phone.name]" />
                    </b-button>
                  </div>
                </div>
              </div>
              <div class="profile-summary my-4">
                <div>
                  <h4 class="font-weight-bold">Who am I?</h4>
                  <p class="text-justify">Hi! I'm a college student at Bina Nusantara University majoring in Computer Science program and I'm looking for the first job as a <font class="text-dark font-weight-bold">front-end developer</font>. I love building a <font class="text-pink">beautiful</font> website. I like to make it simple and colorful, and of course, works perfectly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div style="background:rgba(130, 177, 255, 0.4)">
        <div id="experience" class="experience container d-flex justify-content-center align-items-center p-3">
          <div class="p-5 bg-white d-flex justify-content-center align-items-center flex-wrap flex-column border-radius-8 box-shadow position-relative w-100" style="margin: 10vh 0">
            <h4 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px">Experience</h4>
            <div class="d-flex justify-content-center flex-wrap w-100">
              <v-img
                :src="require(`~/assets/images/profile/bluejack19-1.jpg`)"
                gradient="to bottom, rgba(0, 0, 0,.3), rgba(0,0,0,0.1), rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0, 0, 0,.3)"
                width="100%"
              ></v-img>
              <p class="mt-2 font-weight-bold text-justify">A Teaching Assistant at Software Laboratory Center, Bina Nusantara University since 2019.</p>
              <div class="w-100">
                <h4 class="font-weight-bold">What I do?</h4>
                <p class="text-justify">
                  As a teaching assistant, our main job is teaching college students. But we also make some cases for students and research for new things. We also do some projects to improve our skills such as TPA (Tes Progresif Asisten / Assistant Progresive Test) and RIG (Research Interest Group). During my time as a teaching assistant, I found my passion for being a website designer and builder, and I love making things look simply beautiful and perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="background:rgba(255, 255, 141, 0.4)">
        <div id="skills-overview" class="skills-overview container d-flex justify-content-center align-items-center p-3">
          <div class="p-5 bg-white d-flex justify-content-center align-items-center flex-wrap flex-column border-radius-8 box-shadow position-relative" style="margin: 10vh 0">
            <h4 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px">Skills Overview</h4>
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
                        {{x}}
                      </li>
                    </ul>
                  </div>
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>

      <div style="background:rgba(144, 164, 174, 0.4)">
        <div id="tools" class="tools container d-flex justify-content-center align-items-center p-3">
          <div class="p-5 bg-white d-flex justify-content-center align-items-center flex-wrap flex-column border-radius-8 box-shadow position-relative" style="margin: 10vh 0">
            <h4 class="font-weight-bold position-absolute bg-white box-shadow border-radius-8 p-3" style="top:-35px">Tools</h4>
            <div class="tools d-flex justify-content-center flex-wrap">
              <b-card
                class="tool-pancake-flex mx-3"
                :img-src="require(`~/assets/images/tools/${x.image}`)"
                :img-alt="x.name"
                v-for="x in tools"
                :key="x"
              >
                <b-card-title class="text-center">{{x.name}}</b-card-title>
              </b-card>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
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
  data() {
    return {
      scrollTop: 0,
      profileLoad: false,
      nicknameLoad: false,
      snackbar: false,
      copiedText: '',
      skills: {
        frontend: [
          'HTML / CSS / SASS',
          'JavaScript / TypeScript',
          'jQuery',
          'ReactJS / ReactTS',
          'Vue.js / Nuxt.js',
          'Vuetify',
          'Bootstrap / Bootstrap-Vue',
        ],
        backend: [
          'MSSQL / MySQL',
          'PHP / Laravel',
          'Firebase',
          'SQLite',
        ],
        others: [
          'C / C++',
          'C#',
          'UX / Prototyping',
          'Java Swing / Android',
        ]
      },
      tab: null,
      tools: [
        { name: 'Visual Studio Code',
          image: 'visualstudiocode.svg'
        },
        { name: 'Android Studio',
          image: 'androidstudio.svg'
        },
        { name: 'Eclipse',
          image: 'eclipse.svg'
        },
        { name: 'NetBeans',
          image: 'netbeans.svg'
        },
        { name: 'Adobe Animate',
          image: 'adobeanimate.svg'
        },
        { name: 'PHPStorm',
          image: 'phpstorm.svg'
        },
        { name: 'Axure',
          image: 'axure.svg'
        },
        { name: 'Visual Studio',
          image: 'visualstudio.svg'
        },
        { name: 'Unity',
          image: 'unity.svg'
        },
        { name: 'SQL Server Management Studio',
          image: 'ssms.svg'
        },
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
    parallax() {
      let hello = document.querySelector('#hello')
      let name = document.querySelector('#name')
      let circle = document.querySelector('#circle')
      let nickname = document.querySelector('#nickname')
      let scrollPercentage = Math.floor(window.scrollY/window.innerHeight*100)
      
      hello.style.transform = `translate(-18% ,-${25+scrollPercentage*6}%)`
      name.style.transform = `translate(-88% ,-${70+scrollPercentage*6}%)`
      circle.style.transform = `translate(-50% ,-${40+scrollPercentage*2}%)`
      nickname.style.transform = `translateY(-${90+scrollPercentage*6}%)`

      nickname.style.opacity = 
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
        this.nicknameLoad = true
      }, 1500);      
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
    background: 'white'
  }

  .header{
    position: relative;
    background-image: linear-gradient(to left, #fce4ec 0%, #fce4ec 50%,#e3eeff 50%, #e3eeff 100%);
    width: 100%;
    height: 100vh;
  }

  .skills-overview li {
    list-style-type: circle; 
    list-style-position: outside;
    color: #525252;
    font-weight: 500;
    margin: 0 5%;
    padding: 0 3%
  }

  #circle, .profile{
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
  }

  .profile{
    min-width: 100px;
    min-height: 100px;
    width: 8vw;
    height: 8vw;
    border: 3px solid #ffffff;
    box-shadow: 0px 5px 20px 0px #aaaaaa;
  }

  #circle{
    width: 16vw;
    height: 16vw;
    min-width: 150px;
    min-height: 150px;
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

  .nickname {
    position: absolute;
    top: 90%;
    width: 100%;
    transform: translateY(-90%);
  }

  .nickname-text {
    font-size: calc(20px + 0.25rem);
  }

  .nickname-title{
    font-weight: 700;
    font-size: calc(20px + 0.25rem);
  }

  #hello {
    height: 4vw;
    min-height: 30px;
    position: absolute;
    top: 25%;
    left: 18%;
    transform: translate(-18%, -25%);
  }

  #name {
    height: 4vw;
    min-height: 30px;
    position: absolute;
    top: 70%;
    left: 88%;
    transform: translate(-88%, -70%);
  }

  .m-height-full{
    min-height: 120vh;
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
    top: 25% !important;
    left: 14% !important;
    transform: translate(-14%, -25%) !important;
    opacity: 0 !important;
  }

  .name-slide-fade-enter-active, .name-slide-fade-leave-active{
    transition: all 1.5s ease !important;
  }

  .name-slide-fade-enter, .name-slide-fade-leave-to{
    position: absolute !important;
    top: 70% !important;
    left: 92% !important;
    transform: translate(-92%, -70%) !important;
    opacity: 0 !important;
  }

  .nickname-slide-fade-enter-active, .nickname-slide-fade-leave-active{
    transition: all 1.5s ease !important;
  }

  .nickname-slide-fade-enter, .nickname-slide-fade-leave-to{
    top: 85% !important;
    transform: translateY(-85%) !important;
    opacity: 0 !important;
  }

  .letter-spacing-15 {
    letter-spacing: 0.15em;
  }

  .skill-pancake-flex, .tool-pancake-flex{
    flex: 0 1 300px;
    margin: 2% 0;
  }
  
  .tool-pancake-flex {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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

  #hello, #name, #circle, #nickname {
    transition-duration: 0.2s;
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
    color: #D14836
  }

  .btn:focus, .btn:active, .btn, .btn:hover{
    outline: none !important;
    box-shadow: none !important;
  }

  .tool-pancake-flex img {
    height: 50px;
    margin:4% auto 0 auto
  }

  .card-body {
    flex: none;
  }

  @media screen  and (max-width: 800px){
    #about, #experience, #skills-overview, #tools {
      padding: 0 !important;
      width: 100% !important;
      margin: 0 !important;
      max-width: fit-content !important;
    }

    #about > div, #experience > div, #skills-overview > div, #tools > div {
      border-radius: 0 !important;
    }

    .floating-button {
      display: none
    }
  }
</style>
