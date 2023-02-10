function main() {
    var app = new Vue({
        el: '#app',
        data: {
            count: 0,
            radius: 50,
            items: [
                { id: 1, name: 'りんご', price: 100 },
                { id: 2, name: 'ばなな', price: 200 },
                { id: 3, name: 'いちご', price: 300 },
                { id: 4, name: 'おれんじ', price: 400 },
            ],
            monsters: [
                { id: 1, name: 'スライム', hp: 100 },
                { id: 2, name: 'ゴブリン', hp: 200 },
                { id: 3, name: 'ドラゴン', hp: 500 },
            ],
            newMonsterName: '',
        },
        methods: {
            increment: function() {
                this.count++;
            },
            decrement: function() {
                this.count--;
            },
            addMonster: function() {
                const newMonster = {
                    id: this.monsters.length + 1,
                    name: this.newMonsterName,
                    hp: 500,
                }
                //重複を検査
                if(this.monsters.includes(newMonster)){
                    alert("重複しています");
                } else {
                    this.monsters.push(newMonster);
                }
            },
            removeMonster: function(index) {
                this.monsters.splice(index, 1);
            },
            attackMonster: function(index) {
                console.log(index);
                this.monsters[index].hp -= 10;
            }
        },    
    });
}

window.onload = main;