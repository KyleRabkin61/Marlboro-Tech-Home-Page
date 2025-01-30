const vue_app = Vue.createApp({
    // This automatically imports your movies.json file and puts it into
    //   the variable: movies
    created() {
          fetch('staff.json').then(response => response.json()).then(staff => {
                this.staff = json
          })
    },
    methods: {
          
    }
})

vue_app.mount("#vue_app")