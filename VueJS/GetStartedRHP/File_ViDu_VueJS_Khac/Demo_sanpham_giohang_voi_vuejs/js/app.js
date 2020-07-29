new Vue({
    el: '#app',
    data: {
        isShowingCart: false,
        cart: {
            items: []
        },
        isCheckout: false,
        products: [
            {
                id: 1,
                name: 'MacBook Pro (15 inch)',
                description: 'This laptop has a super crisp Retina display. Yes, we know that it\'s overpriced...',
                price: 2999,
                inStock: 50
            },
            {
                id: 2,
                name: 'Samsung Galaxy Note 7',
                description: 'Unlike the overpriced MacBook Pro, we\'re selling this one a bit cheap, as we heard it might explode...',
                price: 299,
                inStock: 755
            },
            {
                id: 3,
                name: 'HP Officejet 5740 e-All-in-One-printer',
                description: 'This one might not last for so long, but hey, printers never work anyways, right?',
                price: 149,
                inStock: 5
            },
            {
                id: 4,
                name: 'iPhone 7 cover',
                description: 'Having problems keeping a hold of that phone, huh? Ever considered not dropping it in the first place?',
                price: 49,
                inStock: 42
            },
            {
                id: 5,
                name: 'iPad Pro (9.7 inch)',
                description: 'We heard it\'s supposed to be pretty good. At least that\'s what people say.',
                price: 599,
                inStock: 0
            },
            {
                id: 6,
                name: 'OnePlus 3 cover',
                description: 'Does your phone spend most of its time on the ground? This cheap piece of plastic is the solution!',
                price: 19,
                inStock: 81
            }
        ]
    },
    //Vue cho phép bạn định nghĩa các filter (bộ lọc) dùng để áp dụng các định dạng văn bản thường gặp.
    filters: {
        currency: function (value) {
            var formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0
            });

            return formatter.format(value);
        }
    },

    // ta sẽ viết các function trong thuộc tính method của vue instance, nhằm sử dụng đi sử dụng lại ở nhiều nơi
    // Các phương thức này có thể được gọi qua các drective v-on, v-submit,...
    methods: {
        addProductToCart: function (product) {
            var cartItem = this.getProductCart(product);
            if (cartItem != null) {
                cartItem.quantity++;
            } else {
                this.cart.items.push({
                    product: product,
                    quantity: 1
                });
            }

        
            product.inStock--;
        },
        getProductCart: function (product) {
            for(var i = 0; i < this.cart.items.length; i++)
            {
                if (this.cart.items[i].product.id == product.id) {
                    return this.cart.items[i];
                }
            }

            return null;
        },
        incrementItem: function (item) {
            item.quantity++;
            item.product.inStock--;
        },
        decrementItem: function (item) {
            item.quantity--;
            item.product.inStock++;
        },
        checkout: function () {
            if (confirm('Are you sure checkout your cart')) {
                this.cart.items.forEach(function(item){
                    item.product.inStock += item.quantity
                });

                this.cart.items = [];
                this.isCheckout = true;
            }
        }
    },
    // computed property: đây là thuộc tính sẽ tính toán lại những biến hoặc object 
    // được khai báo trong thuộc tính data mỗi lần render lại. Hay nói một cách khác 
    // nó cho phép khai báo các phương thức trả về giá trị giống như methods nhưng chỉ 
    // tính toán lại khi có thay đổi, còn các phương thức trong methods thì luôn được tính 
    // toán lại mỗi lần gọi. Ở trong ví dụ này mình viết hàm để tính toán lại tổng giá trị 
    //sản phẩm trong giỏ hàng và tổng số lượng sản phẩm mỗi khi người dùng thêm vào giỏ hàng.
    computed: {
        totalPriceCart: function () {
            var total = 0;
            this.cart.items.forEach(function(item){
                total += item.product.price * item.quantity;
            });

            return total;
        },
        totalItemCart: function () {
            var total = 0;
            this.cart.items.forEach(function(item){
                total += item.quantity;
            });

            return total;
        }
    }
});

//https://viblo.asia/p/mot-chut-vuejs-ByEZkgeoZQ0