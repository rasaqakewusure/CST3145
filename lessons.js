// Lesson 1 
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
        // 
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
// Lesson 2 
var webstore=  new Vue({
    el: '#app2',
    data:{
        subject2:{
            id: 1002,
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
// Lesson 3 
var webstore=  new Vue({
  el: '#app3',
  data:{
      subject3:{
          id: 1003,
          subjects: "English",
          location: "London",
          price: 100,
          spaces: 5
      },
      cart:[]
      },
      methods: { 
          addToCart: function () {
              this.cart.push(this.subject3.id);
}
      },
      computed: {
      
          cartItemCount() {
            return this.cart.length || ''
          },
          canAddClass() {
            return this.subject3.spaces > this.cartItemCount;
          }
        }
});

// Lesson 4 
var webstore=  new Vue({
  el: '#app4',
  data:{
      subject4:{
          id: 1003,
          subjects: "English",
          location: "York",
          price: 80,
          spaces: 5
      },
      cart:[]
      },
      methods: { 
          addToCart: function () {
              this.cart.push(this.subject4.id);
}
      },
      computed: {
      
          cartItemCount() {
            return this.cart.length || ''
          },
          canAddClass() {
            return this.subject4.spaces > this.cartItemCount;
          }
        }
});

// Lesson 5
var webstore=  new Vue({
  el: '#app5',
  data:{
      subject5:{
          id: 1003,
          subjects: "Music",
          location: "Bristol",
          price: 80,
          spaces: 5
      },
      cart:[]
      },
      methods: { 
          addToCart: function () {
              this.cart.push(this.subject5.id);
}
      },
      computed: {
      
          cartItemCount() {
            return this.cart.length || ''
          },
          canAddClass() {
            return this.subject5.spaces > this.cartItemCount;
          }
        }
});

// Lesson 6
var webstore=  new Vue({
  el: '#app6',
  data:{
      subject6:{
          id: 1003,
          subjects: "Music",
          location: "Bristol",
          price: 90,
          spaces: 5
      },
      cart:[]
      },
      methods: { 
          addToCart: function () {
              this.cart.push(this.subject6.id);
}
      },
      computed: {
      
          cartItemCount() {
            return this.cart.length || ''
          },
          canAddClass() {
            return this.subject6.spaces > this.cartItemCount;
          }
        }
});

