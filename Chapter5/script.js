var myComponent = {
    template: '<p>MyComponent:{{myprop}}</p>',
    props: ['myprop']
}



Vue.component('my-component2', {
    template: `
        <button @click="handleClick">click me</button>
    `,
    methods: {
        handleClick: function() {
            this.$emit('child-event');
        }
    }
});

function main() {
    

    /**root定義 */
    new Vue({
        el: '#app',
        components: {
            'my-component': myComponent,
        },
        methods: {
            parentMethod: function() {
                window.alert('child event');
            }
        }
    });
}

window.onload = main;