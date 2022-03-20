new Vue({
    el: "#todoapp",
    data: {
        //  总数据
        todoList: ["吃饭", "睡觉", "写代码"],
        //  输入的内容
        inputValue: "",
    },
    methods: {
        addTodo() {
            this.todoList.push(this.inputValue);
        },
        delTode(index) {
            this.todoList.splice(index, 1);
        },
        clearTodo() {
            this.todoList = [];
        }
    }
})