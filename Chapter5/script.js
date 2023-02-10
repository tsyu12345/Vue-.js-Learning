var myComponent = {
    template: '<p>MyComponent:{{myprop}}</p>',
    props: ['myprop']
}

function main() {
    

    /**root定義 */
    new Vue({
        el: '#app',
        components: {
            'my-component': myComponent
        }
    });
}

window.onload = main;