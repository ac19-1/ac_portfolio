export const state = () => ({
    icons: {
        line : { 
            style: 'fab', 
            name: 'line' 
        },
        phone: { 
            style: 'fas', 
            name: 'phone-square-alt' 
        },
        envelope: { 
            style: 'fas', 
            name: 'envelope' 
        }
    }
})

export const getters = {
    get(state) {
        return state.icons
    }
}