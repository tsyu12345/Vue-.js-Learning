function main() {
    new Vue({
        el: '#app',
        data: {
            Jobs: [
                "Engineer",
                "Doctor",
                "Lawyer",
            ],
            newJob: null
        },
        methods: {
            addJob: function(newJob) {
                this.Jobs.push(newJob);
                console.log(this.Jobs);
            }
        }
    });
}

window.onload = main;