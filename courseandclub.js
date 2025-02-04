const vue_app = Vue.createApp({
      data() {
          return {
              courseandclub: {
                courses: [],
                clubs: []
              }
          };
      },
      created() {
          fetch('courseandclub.json')
              .then(response => response.json())
              .then(json => {
                  this.courseandclub = json;
              })
              .catch(error => console.error("Error fetching courses:", error));
      }
  });
  
  vue_app.mount("#vue_app");
  