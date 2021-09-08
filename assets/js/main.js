$(document).ready(function () {

    $('.carousel').carousel({})

    $(".user-container div").eq(0).css('display', 'flex');

    $('.carousel').on('slide.bs.carousel', function (e) {
        var slideTo = $(e.relatedTarget).index();

        $(".user-container div").hide();
        $(".user-container div").eq(slideTo).css('display', 'flex');

    });

    var menuSwiper = new Swiper(".addon-menu-swiper", {
        slidesPerView: "auto",
        loop:true,
        // slidesPerView: 1,
        spaceBetween: 15,
        allowTouchMove:false,
        breakpoints: {
            // when window width is >= 320px
            // 320: {
            //     slidesPerView: 2,
            // },
            // // when window width is >= 480px
            // 480: {
            //     slidesPerView: 2,
            // },
            // // when window width is >= 640px
            // 640: {
            //     slidesPerView: 3,
            // }
        }
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
    });

    menuSwiper.slideTo( 0,500,false );

    var lastId,
        topMenu = $("#plan-menu"),
        topMenuHeight = topMenu.outerHeight() + 30,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    console.log("scrollItems", scrollItems);

    // menuItems.click(function(e){
    //     var href = $(this).attr("href"),
    //         offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
    //     $('html, body').stop().animate({
    //         scrollTop: offsetTop
    //     }, 300);
    //     e.preventDefault();
    // });

    $(window).scroll(function () {
        var fromTop = $(this).scrollTop() + topMenuHeight;
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });

        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (id != null && id != undefined && id != '' && lastId !== id) {
            console.log("id==>", id);

            lastId = id;
            // menuItems.removeClass("active");

            var menuid = '#' + id;

            // $('.mobile-plans a[href="'+menuid+'"]').addClass("active");


            if($('a[href="'+menuid+'"]').hasClass('swiper-slide')){
                var activeIndex = menuSwiper.realIndex;
                // var activeIndex = $('.swiper-slide-active').data('swiper-slide-index');

                var index = $('a[href="'+menuid+'"]').index();
                console.log(index,activeIndex);

                if(activeIndex !== index) menuSwiper.slideTo( index,1000,false );
            }

        }

        //this is for stick menu if scrool top >= planoffset add stick class
        // var plansOffset = $('.mobile-plans').offset().top + 25;
        // var scrolled = $(this).scrollTop();
        //
        // console.log(plansOffset,scrolled);

    });


    $('#moreModal').on('show.bs.modal', function (e) {
        var btnId =  "."+e.relatedTarget.id;

        $("#moreModal .modal-body .content").hide();
        $(btnId).show();
    });

    //
    // $("#single_ad_select").change(function (){
    //     var unitPrice = $(this).data("price");
    //     var val = this.value;
    //
    //     var fianalPrice = ((unitPrice * val).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    //
    //     $("#single_ad_price_lbl").html("LKR " + fianalPrice + ".00");
    //
    //     if (val == 2 || val == 5){
    //         console.log(this);
    //         $(this).parents(".list-box").find(".alert").removeClass("d-none");
    //     }else {
    //         $(this).parents(".list-box").find(".alert").addClass("d-none");
    //     }
    // });
    //
    // $("#showAllPrice").on("click",function (){
    //     $(this).siblings(".radios-container").css({"maxHeight":"none"});
    //     $(this).siblings(".radios-container").children(".overlay").hide();
    //     $(this).hide();
    // });
    //
    //
    // if ($("section").hasClass("ideal")){
    //     updatePrice();
    //
    //     $(".qty-group").find(".btn-plus").on("click",function () {
    //         var input = $(this).parents(".input-group").find("input");
    //         var inputVal = parseInt(input.val());
    //         input.val(inputVal + 1);
    //
    //         updatePrice();
    //     });
    //
    //     $(".qty-group").find(".btn-minus").on("click",function () {
    //         var input = $(this).parents(".input-group").find("input");
    //         var inputVal = parseInt(input.val());
    //         input.val(inputVal > 1 ? inputVal - 1 : 1);
    //
    //         updatePrice();
    //
    //     });
    //
    //
    //     //show hide diff delivery address
    //     //dif_delivery_address
    //
    //     $('input[type=radio][name=deliveryType]').change(function() {
    //         if (this.value == 'different_address') {
    //             $("#dif_delivery_address").removeClass("d-none");
    //         }else {
    //             $("#dif_delivery_address").addClass("d-none");
    //         }
    //     });
    //
    //
    //     $(".del-row").on("click",function (){
    //         $(this).closest("tr").remove();
    //         updatePrice();
    //     });
    //
    //
    //     function updatePrice (){
    //         var subTotal = 0;
    //
    //         $(".ideal-orders-table tbody tr:visible").each(function (){
    //             var qty = $(this).find('input').val();
    //             var price = $(this).find('.price-col').data("unit-price");
    //
    //             var row_total= (qty * parseFloat(price));
    //
    //             subTotal += row_total;
    //
    //             if($(this).find('.price-col').children().length > 0 ){
    //                 $(this).find('.price-col').children('section').find("span").text("LKR "+currency_convert(row_total)+".00");
    //             }else {
    //                 $(this).find('.price-col').text("LKR "+currency_convert(row_total)+".00");
    //             }
    //
    //         });
    //
    //         $("#subtotal").text("LKR "+currency_convert(subTotal)+".00");
    //         var deliveryFee = $("#delivery_fee").data("delivery-fee");
    //
    //         if (subTotal > 0){
    //             $("#order_total").text("LKR "+currency_convert(subTotal + deliveryFee)+".00");
    //         }else {
    //             $("#order_total").text("LKR "+ 0 +".00");
    //         }
    //     }
    //
    //     // function updateTotal() {
    //     //     var subTotal = 0;
    //     //     $(".ideal-orders-table tbody tr:visible").each(function () {
    //     //         var row_price = $(this).find('.price-col').data("unit-price");
    //     //     });
    //     // }
    //
    // }
    //
    // function currency_convert(amt) {
    //     return amt.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    // }
    //
    // $("#emailAlertBtn").on("click",function (){
    //     $("#emailPopup").toggleClass('d-none');
    //     $(".success-container").addClass("d-none");
    //     $(".emailPopupContainer").show();
    //
    //
    // });
    //
    // $("#email-popup-close").on("click",function (){
    //     $("#emailPopup").toggleClass('d-none');
    // });
    //
    // $("#success-popup-close").on("click",function (){
    //     $("#emailPopup").toggleClass('d-none');
    // });
    //
    // $("#sentMail").on("click",function (){
    //     $(".emailPopupContainer").hide();
    //     $(".success-container").removeClass("d-none");
    // });


    //propertyAlert
    //
    // setTimeout(function (){
    //     $(".property_alert_backdrop").show();
    // },30000);
    // setTimeout(function (){
    //     $(".newsLetter_backdrop").show();
    // },20000);
    //
    // $("#newsClose").on("click",function (){
    //     $(".newsLetter_backdrop").hide();
    // });
    //
    // $("#property_close").on("click",function (){
    //     $(".property_alert_backdrop").hide();
    // });
    //
    // $('.dropdown-toggle').dropdown();
    //
    // $(document).on('click', '.dropdown-check-tick .dropdown-menu', function (e) {
    //     e.stopPropagation();
    // });
    //
    // var buyrentSelected = $('input[name="buyRent"]:checked').val();
    // if (buyrentSelected == 'buy') {
    //     $("#max-budget").find(".rental").css('visibility', 'hidden');
    //     $("#max-budget").find(".buy").css('visibility', 'visible');
    //
    // }
    // else {
    //     $("#max-budget").find(".buy").css('visibility', 'hidden');
    //     $("#max-budget").find(".rental").css('visibility', 'visible');
    //
    // }
    //
    // $('input[type=radio][name=buyRent]').change(function() {
    //     if (this.value == 'buy') {
    //         $("#max-budget").find(".rental").css('visibility', 'hidden');
    //         $("#max-budget").find(".buy").css('visibility', 'visible');
    //
    //     }
    //     else {
    //         $("#max-budget").find(".buy").css('visibility', 'hidden');
    //         $("#max-budget").find(".rental").css('visibility', 'visible');
    //
    //     }
    // });

    // $('#property_alert_form').validate({
    //     rules: {
    //         name: {
    //             required:true,
    //         },
    //         email: {
    //             required: true,
    //             email: true,
    //         },
    //         phone: {
    //             required: true,
    //             number: true,
    //             minlength: 10,
    //         }
    //     },
    //     messages: {
    //         name: 'This field is required',
    //         email: 'Enter a valid email',
    //         phone: {
    //             required:'This field is required',
    //             number:"Please enter valid number",
    //             minlength: 'Phone must be at least 10 digits'
    //         }
    //     },
    //     submitHandler: function(form) {
    //         form.submit();
    //     }
    // });


    //invest page swiper
    //
    // var swiper = new Swiper('.invest-swiper', {
    //     loop:true,
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    //     navigation: {
    //         nextEl: '.invest-swiper-container .swiper-button-next',
    //         prevEl: '.invest-swiper-container .swiper-button-prev',
    //     },
    // });
    //
    //
    // var galleryBottom = new Swiper('.gallery-bottom', {
    //     spaceBetween: 10,
    //     freeMode: true,
    //     watchSlidesVisibility: true,
    //     watchSlidesProgress: true,
    //     loop: true,
    // });
    // var galleryThumb = new Swiper('.gallery-thumbs', {
    //     spaceBetween: 10,
    //     slidesPerView: 5,
    //     navigation: {
    //         nextEl: '.deals-slider-container .swiper-button-next',
    //         prevEl: '.deals-slider-container .swiper-button-prev',
    //     },
    //     thumbs: {
    //         swiper: galleryBottom
    //     },
    //     loop: true,
    //     breakpoints: {
    //         320: {
    //             slidesPerView: 1,
    //             spaceBetween: 0,
    //         },
    //         640: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         768: {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //         },
    //         1024: {
    //             slidesPerView: 5,
    //             spaceBetween: 50,
    //         },
    //     }
    // });

});
