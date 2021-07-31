const cm = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 185.00,
        count: 1
      },
      {
        id: 3,
        name: '《深入解析VUE》',
        date: '2016-9',
        price: 825.00,
        count: 3
      },
      {
        id: 4,
        name: '《编程珠玑》',
        date: '2019-9',
        price: 33.00,
        count: 5
      },
      {
        id: 5,
        name: '《Code面试宝典》',
        date: '2021-9',
        price: 55.00,
        count: 10
      },
    ]
  },
  computed: {
    totalPrice() {
      let result = 0
      for (const book of this.books) {
        result += book.price;
      }
      return result;

    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2);
    }
  },
  methods: {
    reduce(index) {
      this.books[index].count--;
    },
    add(index) {
      console.log(index);
      this.books[index].count++;
    },
    remove(index) {
      this.books.splice(index, 1)
    }
  }

})