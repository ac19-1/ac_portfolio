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
        { hid: 'og:image', name: 'og:image', content: ogImage }
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
    outline-color: transparent !important;
    outline-width: 0 !important;
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
