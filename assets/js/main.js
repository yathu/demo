$(document).ready(function(){var a=0;$(".subTotalValue").text(a.toFixed(2)),$("section").hasClass("addons")&&$("input:checkbox").change(function(){var e=$(this).data("price"),i=$(this).data("btn");$(this).is(":checked")?(a+=e,$("input.switch").each(function(){var e=$(this).data("btn");i==e&&(this.checked=!0)})):(a-=e,$("input.switch").each(function(){var e=$(this).data("btn");i==e&&(this.checked=!1)})),$(".subTotalValue").text(a.toLocaleString(void 0,{minimumFractionDigits:2}))}),$(".carousel").carousel({}),$(".user-container div").eq(0).css("display","flex"),$(".carousel").on("slide.bs.carousel",function(e){var i=$(e.relatedTarget).index();$(".user-container div").hide(),$(".user-container div").eq(i).css("display","flex")}),$(".addon-menu-swiper div").find("a").first().addClass("active_slider"),$(".addon-menu-swiper div a").on("click",function(){$(".addon-menu-swiper a").removeClass("active_slider"),$(this).addClass("active_slider")});var o=new Swiper(".addon-menu-swiper",{slidesPerView:"auto",loop:!0,spaceBetween:5,breakpoints:{}});o.slideTo(0,500,!1);var d,e=$("#plan-menu"),r=e.outerHeight()+30,l=e.find("a").map(function(){var e=$($(this).attr("href"));if(e.length)return e});console.log("scrollItems",l),$(window).scroll(function(){var e=$(this).scrollTop()+r,i=l.map(function(){if($(this).offset().top<e)return this}),a=(i=i[i.length-1])&&i.length?i[0].id:"";if(null!=a&&null!=a&&""!=a&&d!==a){console.log("id==>",a);var s="#"+(d=a);if($('a[href="'+s+'"]').hasClass("swiper-slide")){var n=o.realIndex,t=$('a[href="'+s+'"]').index();console.log(t,n),n!==t&&o.slideTo(t,1e3,!1),$(".addon-menu-swiper a").removeClass("active_slider"),$('.addon-menu-swiper a[href="'+s+'"]').addClass("active_slider")}}}),$("#moreModal").on("show.bs.modal",function(e){var i="."+e.relatedTarget.id;$("#moreModal .modal-body .content").hide(),$(i).show()})});