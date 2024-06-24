app7.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                        class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>
                    <div>
                        <p v-if="inStock">On Sale: {{ onsale }}</p>
                    </div>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                        @click="addToCart">
                        Add to Cart
                    </button>

                    <!-- <button class="button" v-on:click="removeToCart">Remove</button> -->
                </div>
            </div>
        </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    onsale() {
      if (this.onSale == true) {
        return this.brand + " " + this.product;
      }
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});

app8.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                        class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>
                    <div>
                        <p v-if="inStock">On Sale: {{ onsale }}</p>
                    </div>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                        @click="addToCart">
                        Add to Cart
                    </button>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                        @click="removeToCart">
                        Del to Cart
                    </button>

                    <!-- <button class="button" v-on:click="removeToCart">Remove</button> -->
                </div>
            </div>
        </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 50,
        },
      ],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeToCart() {
      this.$emit("remove-to-cart", this.variants[this.selectedVariant].id);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    onsale() {
      if (this.onSale == true) {
        return this.brand + " " + this.product;
      }
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});

app9.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /* html */
    `<div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" alt="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock">In Stock</p>
                    <p v-else>Out of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                        class="color-circle" :style="{ backgroundColor: variant.color }">
                    </div>
                    <div>
                        <p v-if="inStock">On Sale: {{ onsale }}</p>
                    </div>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                        @click="addToCart">
                        Add to Cart
                    </button>
                    <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock"
                        @click="removeToCart">
                        Del to Cart
                    </button>

                    <!-- <button class="button" v-on:click="removeToCart">Remove</button> -->
                </div>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>`,
  data() {
    return {
      brand: "Vue Mastery",
      product: "Socks",
      selectedVariant: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 50,
        },
      ],
      reviews: [],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    removeToCart() {
      this.$emit("remove-to-cart", this.variants[this.selectedVariant].id);
    },
    addReview(review){
      this.reviews.push(review)
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    onsale() {
      if (this.onSale == true) {
        return this.brand + " " + this.product;
      }
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
