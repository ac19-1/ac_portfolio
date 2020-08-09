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
            style: 'far', 
            name: 'envelope' 
        },
        envelope_square: { 
            style: 'fas', 
            name: 'envelope-square' 
        },
        github: { 
            style: 'fab', 
            name: 'github-square' 
        },
        linkedIn: { 
            style: 'fab', 
            name: 'linkedin' 
        },
    }
})

export const getters = {
    get(state) {
        return state.icons
    }
}