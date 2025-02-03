const vue_app = Vue.createApp({
      created() {
            fetch('staff.json').then(response => response.json()).then(json => {
                  this.staff = json
            })
      },
      data() {
            return {
                  staff: []
            }
      },
      methods: {

      }
})

vue_app.mount("#vue_app")