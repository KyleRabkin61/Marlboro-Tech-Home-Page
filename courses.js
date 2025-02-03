const vue_app = Vue.createApp({
    created() {
          fetch('courses.json').then(response => response.json()).then(json => {
                this.class = json
          })
    },
    data() {
          return {
                courses: []
          }
    },
    methods: {

    }
})

vue_app.mount("#vue_app")