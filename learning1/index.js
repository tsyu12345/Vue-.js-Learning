function main() {
    const app = new Vue({
        el: "#app",
        data: {
            count: 0,
            items: ["りんご", "みかん", "バナナ"],
            color: ""
        },
        methods: {
            countUp: function() {
                this.count += 1;
            },
            countDown: function() {
                this.count -= 1;
            }
        },
        computed: {
            customColor: function() {
                return this.color.toUpperCase();
            }
        }
    });
}

window.addEventListener('load', main);