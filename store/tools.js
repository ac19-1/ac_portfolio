export const state = () => ({
  tools: [
    { 
      name: 'Visual Studio Code',
      image: 'visualstudiocode.svg'
    },
    { 
      name: 'Android Studio',
      image: 'androidstudio.svg'
    },
    { 
      name: 'Eclipse',
      image: 'eclipse.svg'
    },
    { 
      name: 'NetBeans',
      image: 'netbeans.svg'
    },
    { 
      name: 'Adobe Animate',
      image: 'adobeanimate.svg'
    },
    { 
      name: 'PHPStorm',
      image: 'phpstorm.svg'
    },
    { 
      name: 'Axure',
      image: 'axure.svg'
    },
    { 
      name: 'Visual Studio',
      image: 'visualstudio.svg'
    },
    { 
      name: 'Unity',
      image: 'unity.svg'
    },
    { 
      name: 'SQL Server Management Studio',
      image: 'ssms.svg'
    },
  ],
})

export const getters = {
  get(state) {
    return state.tools
  }
}