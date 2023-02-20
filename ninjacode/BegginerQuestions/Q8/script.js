function main() {
    new Vue({
        el: '#app',
        data: {
            stl: 'alert-btn'
        },
        methods: {
            showAlert: function() {
                alert('Hello Vue.js!');
            }
        },
    });
}

window.onload = main;