var vueInstance = new Vue({
  el: "#app",
  data: {
      title: "Áo thun cổ tròn màu cam cá tính",
      url: "https://www.lazada.vn/products/ao-thun-nu-in-hinh-hoa-bo-cong-anh-form-rong-han-quoc-vai-day-min-aok1565-i155812871-s165676448.html?spm=a2o4n.searchlist.list.50.7d966a99u0Nzxq&search=1",
      target: "_blank",
      price: 10000
    },
  methods: {
      formatPrice(){
        var number = this.price;

        return Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
      }
    //   say: function(text){
    //       return "Hello" + text;
    //   }
  }
});
console.log(vueInstance);