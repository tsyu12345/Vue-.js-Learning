function main() {
    new Vue({
        el: '#app',
        data: {
            show: true,
        },
        methods: {
            /**
             * 数秒おきに、showの値を切り替える
             */
            toggle: function() {
                setInterval(() => {
                    this.show = !this.show;
                }, 2000);
            }
        }
        
    });
}

window.addEventListener('load', main);