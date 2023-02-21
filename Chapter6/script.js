window.addEventListener('load', ()=>{

    new Vue({
        el: '#app',
        data: {
            show: true
        },
        methods: {
            changeHandler: function() {
                this.show = !this.show;
            }
        },
    });

});