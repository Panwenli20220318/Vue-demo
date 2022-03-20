new Vue({
    el: "#app",
    data: {
        imgUrl: ["./imgs/1.jpg",
            "./imgs/2.jpg",
            "./imgs/3.jpg",
            "./imgs/4.jpg",
            "./imgs/5.jpg"
        ],
        index: 0
    },
    methods: {
        prev() {
            if (this.index > 0) this.index--;
            else this.index = 4;
        },
        next() {
            if (this.index < 4) this.index++;
            else this.index = 0;
        }
    }
})