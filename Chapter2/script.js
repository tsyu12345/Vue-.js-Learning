function main() {
    var app = new Vue({
        el: '#app',
        data: {
            count: 0,
            radius: 50
        },
        methods: {
            increment: function() {
                this.count++;
            },
            decrement: function() {
                this.count--;
            }
        }
    })
}

window.onload = main;