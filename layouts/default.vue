<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import ogImage from '@/assets/images/logo/logo.png'
export default {
  head () {
    return {
      meta: [
        { hid: 'og:image', property: 'og:image', content: this.BASE_URL+ ogImage }
      ]
    }
  },
}
</script>

<style>
  html{
    overflow-y: auto !important;
    scroll-behavior: smooth;
  }

  * {
    font-size: calc(13px + 0.25rem);
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif !important;
  }

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-track{
    background: #dddddd;
  }
  ::-webkit-scrollbar-thumb{
    background: #777777;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #646464;
  }
</style>
