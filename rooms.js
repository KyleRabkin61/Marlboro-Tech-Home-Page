const vue_app = Vue.createApp({
    data() {
        return {
            rooms: []
        };
    },
    created() {
        fetch('rooms.json')
            .then(response => response.json())
            .then(json => {
                this.rooms = json;
            })
            .catch(error => console.error("Error fetching data:", error));
    }
});

vue_app.mount("#vue_app")