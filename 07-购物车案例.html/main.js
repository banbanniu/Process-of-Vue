Vue.filter

const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '西游记',
        date: '2020-01-09',
        price: 25.00,
        count: 1
      },
      {
        id: 2,
        name: '红楼梦',
        date: '2020-02-09',
        price: 25.00,
        count: 1
      },
      {
        id: 3,
        name: '水浒传',
        date: '2020-03-09',
        price: 25.00,
        count: 1
      },
      {
        id: 4,
        name: '三国演义',
        date: '2020-04-09',
        price: 25.00,
        count: 1
      },
      {
        id: 5,
        name: '金瓶梅',
        date: '2020-05-09',
        price: 25.00,
        count: 1
      },
      {
        id: 6,
        name: '南柯一梦',
        date: '2020-06-09',
        price: 25.00,
        count: 1
      },
    ],
  },
  methods: {
    increment(index) {
      //     获取点击index是哪个对象然后对对应的count进行操作
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    deleteInfo(index) {
      this.books.splice(index,1)
    },
    isShow() {
      return this.books.length > 0 
    }
  },
  filters: {
    showPrices(price) {
      return '￥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice() {
      // let result = 0;
      // for (let book of this.books) {
      //   result += book.price * book.count
      // }
      // reduce高阶函数，此处prevValue为此函数定义的值，默认值为0，
      // book，这个book，如果此数组中有对象组成的话，那这个book就指数组中的
      // 一个对象。如果是单纯的一个数组，那就指该数组中的一个元素。
      return this.books.reduce(function(prevValue,book){
        return prevValue + book.price*book.count
      },0) 
      // TODO:在去js学习filter/map/reduce三个高阶函数的具体用法
    }
  }
});