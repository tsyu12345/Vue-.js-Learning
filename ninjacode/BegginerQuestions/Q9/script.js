function main() {
    new Vue({
        el: '#app',
        data: {
            greet: 'Hello Vue.js!',
        },
        methods: {
            reverse: function() {
                this.greet = this.greet.split('').reverse().join('');
            }
        }
    });
}

window.onload = main;