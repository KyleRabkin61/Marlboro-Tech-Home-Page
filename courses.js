const vue_app = Vue.createApp({
      data() {
          return {
              courses: []
          };
      },
      created() {
          fetch('courses.json')
              .then(response => response.json())
              .then(json => {
                  this.courses = json;
              })
              .catch(error => console.error("Error fetching courses:", error));
      }
  });
  
  vue_app.mount("#vue_app");
  