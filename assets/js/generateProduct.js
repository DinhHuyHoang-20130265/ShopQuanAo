$(document).ready(async function() {
    var object = $.parseJSON(JSON.stringify(await $.getJSON('./assets/js/productlist.json')));
    var listItems = document.querySelector('#products');
    function initRender() {
        var listProducts = object.map(function(element) {
                return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                    <a href="./ProductDetail.html" class="product__new-item">
                        <div class="card" style="width: 100%">
                        <div>
                            <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                            <form action="" class="hover-icon hidden-sm hidden-xs">
                            <input type="hidden">
                            <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                                <i class="fas fa-cart-plus"></i>
                            </a>
                            <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                                <i class="fas fa-search"></i>
                            </a>
                            </form>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title custom__name-product">
                            ${element.name}
                            </h5>
                            <div class="product__price">
                            <p class="card-text price-color product__price-old">1,000,000 đ</p>
                            <p class="card-text price-color product__price-new">${element.price} đ</p>
                            </div>
                            <div class="home-product-item__action">
                            <span class="home-product-item__like home-product-item__like--liked">
                                <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                            </span>
                            <div class="home-product-item__rating">
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="home-product-item__star--gold fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="home-product-item__sold">79 đã bán</span>
                            </div>
                            <div class="sale-off">
                            <span class="sale-off-percent">20%</span>
                            <span class="sale-off-label">GIẢM</span>
                            </div>
                        </div>
                        </div>
                    </a>
                    </div>`
        });
        var renderList = listProducts.join('');
        listItems.innerHTML = renderList;
    };
    function defaultLoadmore() {
      $(".moreBox").slice(0, 6).show();
      $("#loadMore").click(function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 6).show();
        if ($(".moreBox:hidden").length == 0) {
          $("#loadMore").fadeOut('slow');
        }
      });
    }
    initRender();
    defaultLoadmore();
    function getKhoangGia(kg1, kg2) {
        var listProducts = object.map(function(element) {
          if(element.price >= kg1 && element.price <= kg2) {
            return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                <a href="./ProductDetail.html" class="product__new-item">
                  <div class="card" style="width: 100%">
                    <div>
                      <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                      <form action="" class="hover-icon hidden-sm hidden-xs">
                        <input type="hidden">
                        <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                          <i class="fas fa-cart-plus"></i>
                        </a>
                        <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                          <i class="fas fa-search"></i>
                        </a>
                      </form>
                    </div>
                    <div class="card-body">
                      <h5 class="card-title custom__name-product">
                        ${element.name}
                      </h5>
                      <div class="product__price">
                        <p class="card-text price-color product__price-old">1,000,000 đ</p>
                        <p class="card-text price-color product__price-new">${element.price} đ</p>
                      </div>
                      <div class="home-product-item__action">
                        <span class="home-product-item__like home-product-item__like--liked">
                            <i class="home-product-item__like-icon-empty far fa-heart"></i>
                            <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                        </span>
                        <div class="home-product-item__rating">
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="home-product-item__star--gold fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <span class="home-product-item__sold">79 đã bán</span>
                      </div>
                      <div class="sale-off">
                        <span class="sale-off-percent">20%</span>
                        <span class="sale-off-label">GIẢM</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>`
          }
        })
        var renderList = listProducts.join('');
        listItems.innerHTML = renderList;
    }
    //lấy dữ liệu của khoảng giá
      $('.checkGia').click(function () {
          $("#loadMore").show();
          var value = $(this).attr('value');
          if (value != '-1') {
            getKhoangGia(value.slice(value, value.indexOf('-')), value.slice(value.indexOf('-') + 1));
          } else {
            initRender();
          }
          $(".moreBox").slice(0, 6).show();
      })
      function getSize(idsize) {
        var listProducts = object.map(function(element) {
            if(element.size.indexOf(idsize) !== -1) {
              return `<div class="col-lg-4 col-md-6 col-12 mb-20 blogBox moreBox" style="margin-bottom: 20px; display:none">
                  <a href="./ProductDetail.html" class="product__new-item">
                    <div class="card" style="width: 100%">
                      <div>
                        <img class="card-img-top" src="./assets/imgProduct/images/${element.imglink}" alt="Card image cap">
                        <form action="" class="hover-icon hidden-sm hidden-xs">
                          <input type="hidden">
                          <a href="./pay.html" class="btn-add-to-cart" title="Mua ngay">
                            <i class="fas fa-cart-plus"></i>
                          </a>
                          <a data-toggle="modal" data-target="#myModal" class="quickview" title="Xem nhanh">
                            <i class="fas fa-search"></i>
                          </a>
                        </form>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title custom__name-product">
                          ${element.name}
                        </h5>
                        <div class="product__price">
                          <p class="card-text price-color product__price-old">1,000,000 đ</p>
                          <p class="card-text price-color product__price-new">${element.price} đ</p>
                        </div>
                        <div class="home-product-item__action">
                          <span class="home-product-item__like home-product-item__like--liked">
                              <i class="home-product-item__like-icon-empty far fa-heart"></i>
                              <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                          </span>
                          <div class="home-product-item__rating">
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="home-product-item__star--gold fas fa-star"></i>
                              <i class="fas fa-star"></i>
                          </div>
                          <span class="home-product-item__sold">79 đã bán</span>
                        </div>
                        <div class="sale-off">
                          <span class="sale-off-percent">20%</span>
                          <span class="sale-off-label">GIẢM</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>`
            }
        });
        var renderList = listProducts.join('');
        listItems.innerHTML = renderList;
      }
      function removeA(arr) {
      var what, a = arguments, L = a.length, ax;
      while (L > 1 && arr.length) {
          what = a[--L];
          while ((ax= arr.indexOf(what)) !== -1) {
              arr.splice(ax, 1);
          }
      }
      return arr;
      }
      var check =[];
      $('.checksize').click(function () {
        $("#loadMore").show();
          var id = $(this).attr('id');
          var size = $(`#${id}`).parent().find("span").text();
          if(check.includes(size)) {
            removeA(check, size);
          } else {
            check.push(size);
          }
          if (check.length !== 0) {
            check.forEach(element => {
              getSize(element);
            });
          } else {
            initRender();
          }
          $(".moreBox").slice(0, 6).show();
      })
});
