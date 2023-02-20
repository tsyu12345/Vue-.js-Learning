function main() {
    new Vue({
        el: '#app',
        data: {
            items: [
                {
                    name: 'yoga'
                },
                {
                    name: 'Programming'
                },
                {
                    name: 'baseBall'
                },
                {
                    name: 'soccer'
                },
            ]            
        }
    });
}

window.onload = main;