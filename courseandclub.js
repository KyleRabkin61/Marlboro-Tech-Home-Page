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
            .catch(error => console.error("Error fetching data:", error));
    }
});

vue_app.mount("#vue_app");

$('document').ready(() => {

    $('#coursesBtn').on('click', function () {
        $('#theCourses').removeClass('d-none')
        $('#theClubs').addClass('d-none')
    })

    $('#clubsBtn').on('click', function () {
        $('#theClubs').removeClass('d-none')
        $('#theCourses').addClass('d-none')
    })

})

