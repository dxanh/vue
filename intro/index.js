var app = new Vue({
    el: '#message1',
    data: {
        name: "Doan Quang Tuyen"
    }
});

var app = new Vue({
    el: '#message2',
    data: {
        domain : "westudy.com"
    }
});
app.domain = 'scrimba.com'

var app = new Vue({
    el: '#app',
    data: {
      seen: false
    }
  });
  app.seen = true
  
var app = new Vue({
    el: '#app2',
    data: {
        todos: [
            {text:'Learn Javascrip'},
            {text: 'Learn Vue'},
            {text: 'Learn Meteor'},
            {text: 'Build something awesome'}

        ]
    }
});
app.todos.push({text:'Get result'})

var app = new Vue({
    el: '#app3',
    data: {
        message: 'Hello Xuan Anh, wellcome to Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app = new Vue({
    el: '#app4',
    data: {
        message: 'Hello Xuan Anh, wellcome to Vue.js'
    }
});

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app = new Vue ({
    el: '#app5'
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app6',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetable'},
            {id: 1, text: 'Cheese'},
            {id: 2, text:'Carrot'}
        ]
    }
})