import { createStore } from "vuex";



const store = createStore({
    state:{
        homepage:{},
        timeseries:{},
        archeives:{
            hacking:{},
            article:{},
            review:{},
            note:{},
        },
        
    },
    getters:{},
    mutations:{},
    actions:{},
    modules:{}
})


export default store