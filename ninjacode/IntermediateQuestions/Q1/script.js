function main() {

    new Vue({
        el: '#app',
        data: {
            count: 0,
            btnContainer: 'btnContainer',
            upButtonClass: 'up',
            minusButtonClass: 'down'
        },
        methods: {
            addCount: function() {
                this.count++;
            },
            minusCount: function() {
                this.count--;
            }
        }

    });

}   

window.onload = main;