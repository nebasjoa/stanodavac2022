const app = Vue.createApp({
    data() { // data wants a function as a value
        return {
            counter: 0
        };
    },
    methods: {
        add() {
            return this.counter += 1;
        },
        remove() {
            if (this.counter >= 1) {
                return this.counter -= 1;
            }
            
        },
        openSidebar() {
            document.getElementById("mySidebar").style.width = "250px";
            document.getElementById("placeholder").style.marginLeft = "250px";
        }
    }
});

app.mount('#events');  // css selector uniquely identifies an element