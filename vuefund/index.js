var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'shopping list app',
        newItem: '',
        items: [
            { 
                label: '10 party hats',
                purchased: false,
                highPriority: false,
            },
            {
                label: '02 board games',
                purchased: false,
                highPriority: false,
            },
            {
                label: '20 cups',
                purchased: true,
                highPriority: false,
            },
            {
                label: '30 glasses',
                purchased: false,
                highPriority: true,
            }
        ]
    },
    computed: {
        characterCount() {
            return this.newItem.length;
        },
        reversedItems() {
            return this.items.slice(0).reverse();
        },
    },
    methods: {
        saveItem: function(){
            this.items.push({
                label: this.newItem,
                purchased: false,
            }),
            this.newItem = '';
        },
        changeState: function (newState) {
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased: function(item) {
            item.purchased = !item.purchased;
        }
    }
})