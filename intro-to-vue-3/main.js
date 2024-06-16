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