var webstore=  new Vue({
    el: '#app',
    data:{
        subject:{
            id: 1001,
            subjects: "Math",
            location: "London",
            price: 100,
            spaces: 5
        },
        cart:[]
        },
        methods: { 
            addToCart: function () {
                this.cart.push(this.subject.id);
}
        },
        computed: {
        
            cartItemCount() {
              return this.cart.length || ''
            },
            canAddClass() {
              return this.subject.spaces > this.cartItemCount;
            }
          }
}); 

var webstore=  new Vue({
    el: '#app2',
    data:{
        subject2:{
            id: 1001,
            subjects: "Math",
            location: "Oxford",
            price: 100,
            spaces: 5
        },
        cart:[]
        },
        methods: { 
            addToCart: function () {
                this.cart.push(this.subject2.id);
}
        },
        computed: {
        
            cartItemCount() {
              return this.cart.length || ''
            },
            canAddClass() {
              return this.subject2.spaces > this.cartItemCount;
            }
          }
});