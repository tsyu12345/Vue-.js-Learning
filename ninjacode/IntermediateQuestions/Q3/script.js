function main() {

    new Vue({
        el: '#app',
        data: {
            isChecked: false,
            checkedList:[],
            items: [
                { label: 1},
                { label: 2},
                { label: 3},
            ],
            displayStyle: 'inline-block'
        }
    });
}   

window.onload = main;