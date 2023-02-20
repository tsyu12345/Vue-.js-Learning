function main() {


    new Vue({
        el: '#app',
        data: {
            m1: {
                title: "NinjsCODEは楽しい",
                sub: "楽しく学べるプログラミング"
            },
            m2: {
                title: "NinjsCODEはむずかしい",
                sub: "むずかしく学べるプログラミング"
            },
            m3: {
                title: "NinjsCODEは退屈だ",
                sub: "退屈しながら学べるプログラミング"
            },
            content: {},
            count: 0
        },
        methods: {
            changeType: function () {
                this.count++;
                if (this.count % 3 == 0) {
                    this.content = this.m1;
                } else if (this.count % 3 == 1) {
                    this.content = this.m2;
                } else {
                    this.content = this.m3;
                }
            }
        }
    });
}

window.onload = main;