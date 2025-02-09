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
        scrollToSection("theCourses");
    })

    $('#clubsBtn').on('click', function () {
        $('#theClubs').removeClass('d-none')
        $('#theCourses').addClass('d-none')
        scrollToSection("theClubs");
    })

})

// button on scroll function that does not cut off div

function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 200; // Adjust this value based on navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
    });
}