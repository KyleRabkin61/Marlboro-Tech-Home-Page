const vue_app = Vue.createApp({
      data() {
            return {
                  courses: [
                        "Intro to Wook Technology",
                        "Cabinetmaking",
                        "Adv. Cabinetmaking"
                    ]
            }
      },
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