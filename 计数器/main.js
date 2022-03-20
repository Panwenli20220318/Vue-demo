new Vue({
    el: "#app",
    data: {
        num: 1,
        max: 10,
        min: 0
    },
    methods: {
        add() {
            if (this.num < this.max) this.num++;
            else alert("别点啦,到头啦");
        },
        sub() {
            if (this.num > this.min) this.num--;
            else alert("别点啦,到底啦");
        }
    }
})