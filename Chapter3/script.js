function main() {
    var app = new Vue({
        el: '#app',
        data: {
            border: '1px solid #000',
            value:'',
            textAreaValue: '',
            isCheck: false,
            checkList: [],
        },
        methods: {
            rightMouseClickHandler: function(event) {
                console.log('right mouse click');
            },
            shiftClickHandler: function(event) {
                console.log('shift click');
            },
            checkboxChangeHandler: function(event) {
                console.log('checkbox change');
                console.log(typeof this.isCheck);
            }
        }
    });
}

window.onload = main;