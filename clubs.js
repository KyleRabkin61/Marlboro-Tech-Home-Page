const vuee_app = Vue.createApp({
    data() {
        return {
            clubs: []
        };
    },
    created() {
        fetch('clubs.json')
            .then(response => response.json())
            .then(json => {
                this.clubs = json;
            })
            .catch(error => console.error("Error fetching clubs:", error));
    }
});

vue_app.mount("#vuee_app");
