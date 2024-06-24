// AULA 1
const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            color: 'blue',
            description: 'These blue socks are very comfortable and cheap, buy now!'
        }
    }
})

// AULA 2

const app1 = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.amazon.com.br/socks/s?k=socks'
        }
    }
})

// AULA 3

const app2 = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            //inStock: true
            inventory: 0,
            onSale: true
        }
    }
})

// AULA 4

const app3 = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            // inventory: 100,
            // Lista para percorrer
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ],
            sizes: ['PP', 'P', 'M', 'G', 'GG', 'XGG']
        }
    }
})

// AULA 5

const app4 = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            // inventory: 100,
            // Lista para percorrer
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeToCart(){
            if(this.cart < 1){
                this.cart = 0;
            }
            else{
                this.cart -= 1
            }
        }
    }
})

// AULA 6

const app5 = Vue.createApp({
    data(){
        return{
            inventory: 10,
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            // inventory: 100,
            // Lista para percorrer
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'},
            ],
        }
    },
    methods: {
        addToCart(){
            if(this.inventory > 0 && this.inventory < 11){
                this.cart += 1
                this.inventory -= 1
            }
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        removeToCart(){
            if(this.cart < 1){
                this.cart = 0;
            }
            else{
                this.cart -= 1
                this.inventory += 1
            }
        }
    }
})

// AULA 7

const app6 = Vue.createApp({
    data(){
        return{
            //inventory: 10,
            cart: 0,
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            onSale: true
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            // if(this.inventory > 0 && this.inventory < 11){
            //     this.cart += 1
            //     this.inventory -= 1
            //     if(this.inventory == 0){
            //         this.inStock = false
            //     }
            // }
        },
        updateVariant(index){
            this.selectedVariant = index
            // console.log(index)
        }
        // removeToCart(){
        //     if(this.cart < 1){
        //         this.cart = 0;
        //     }
        //     else{
        //         this.cart -= 1
        //         this.inventory += 1
        //         if(this.inventory > 0){
        //             this.inStock = true
        //         }
        //     }
        // }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
        },
        onsale(){
            if(this.onSale == true){
                return this.brand + ' ' + this.product
            }
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})

// AULA 8

const app7 = Vue.createApp({
    data(){
        return{
            cart: 0,
            premium: true,
        }
    },
    methods: {
        
    }
})

// AULA 9

const app8 = Vue.createApp({
    data(){
        return{
            cart: [],
            premium: true,
        }
    },
    methods: {
        addCart(id){
            this.cart.push(id)
        },
        removeCart(id){
            this.cart.pop(id)
        }
    }
})