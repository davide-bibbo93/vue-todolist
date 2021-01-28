new Vue({
  el: "#app",
  data: {
    todoList: ["Fare i compiti", "Fare la spesa", "Fare il bucato"],
    newTodo: ""
  },
  methods: {
    add: function(){
      if (this.newTodo === '') {
        alert('Inserisci una cosa da fare.')
      } else if (this.todoList.includes(this.newTodo)){
        alert('Cosa da fare già inserita.')
      } else {
        this.todoList.push(this.newTodo)
        this.newTodo = '';
      }
    },
    remove: function(index) {
      // rimuovo elemento nell'array
      this.todoList.splice(index, 1)
    },
    removeAll: function() {
      this.todoList = [];
    }
  }
})
Vue.config.devtools = true;
