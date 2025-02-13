const app = Vue.createApp({
    data() {
        return {
            rooms: [], // Store classroom data
            selectedRoom: null // Store the selected room for modal
        };
    },
    created() {
        // Fetch JSON data
        fetch("rooms.json") // Replace with actual path
            .then(response => response.json())
            .then(data => {
                this.rooms = data;
            })
            .catch(error => console.error("Error loading rooms:", error));
    }
});

// Mount to the Vue app
app.mount("#vue_app");
