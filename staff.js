const vue_app = Vue.createApp({
      data() {
          return {
              staff: []
          };
      },
      created() {
          fetch('staff.json')
              .then(response => response.json())
              .then(json => {
                  this.staff = json;
              })
              .catch(error => console.error("Error fetching data:", error));
      }
  });
  
  vue_app.mount("#vue_app")