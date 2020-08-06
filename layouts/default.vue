<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
  html{
    overflow-y: auto !important;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-track{
    background: transparent;
  }
  ::-webkit-scrollbar-thumb{
    background: #777777;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #646464;
  }
</style>
