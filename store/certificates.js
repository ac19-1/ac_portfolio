export const state = () => ({
  certificates: [
    { 
      name: 'Core Training Completion',
      image: 'core_training.jpg'
    },
    { 
      name: 'Trainer of ISPM Laravel Training',
      image: 'ispm_trainer.jpg'
    },
  ],
})

export const getters = {
  get(state) {
    return state.certificates
  }
}