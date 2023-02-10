function main() {
    var app = new Vue({
        el: '#app',
        data: {
            msg:"Hello Vue.js!",
            border: "1px solid #ccc",
            width: 200,
            list:[
                {id: 1, name: "りんご", price: 100},
                {id: 2, name: "ばなな", price: 200},
                {id: 3, name: "いちご", price: 300},
                {id: 4, name: "おれんじ", price: 400},
                {id: 5, name: "めろん", price: 500},
            ],
            budget: 300,
            limit: 2,
            price: 19000000
        },
        methods: {
        },
        computed: {
            reverseMsg: function() {
                return this.msg.split('').reverse().join('');
            },
            halfWidth: {
                get: function() {
                    console.log("get halfWidth: " + this.width / 2);
                    return this.width / 2;
                },
                set: function(newValue) {
                    console.log("set halfWidth: " + newValue);
                    this.width = newValue * 2;
                }
            },
            matched: function() {
                return this.list.filter(function(el) {
                    return el.price <= this.budget;
                }, this);
            },
            limited: function() {
                return this.matched.slice(0, this.limit);
            }
        },
        filters: {
            numberFormat: function(value) {
                return value.toLocaleString();
            }
        }
    });
}

window.onload = main;