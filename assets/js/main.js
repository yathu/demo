$(document).ready(function(){$(".carousel").carousel({}),$(".user-container div").eq(0).css("display","flex"),$(".carousel").on("slide.bs.carousel",function(e){var o=$(e.relatedTarget).index();$(".user-container div").hide(),$(".user-container div").eq(o).css("display","flex")});var s=new Swiper(".addon-menu-swiper",{slidesPerView:"auto",loop:!0,spaceBetween:15,allowTouchMove:!1,breakpoints:{}});s.slideTo(0,500,!1);var a,e=$("#plan-menu"),t=e.outerHeight()+30,d=e.find("a").map(function(){var e=$($(this).attr("href"));if(e.length)return e});console.log("scrollItems",d),$(window).scroll(function(){var e=$(this).scrollTop()+t,o=d.map(function(){if($(this).offset().top<e)return this}),n=(o=o[o.length-1])&&o.length?o[0].id:"";if(null!=n&&null!=n&&""!=n&&a!==n){console.log("id==>",n);var l="#"+(a=n);if($('a[href="'+l+'"]').hasClass("swiper-slide")){var r=s.realIndex,i=$('a[href="'+l+'"]').index();console.log(i,r),r!==i&&s.slideTo(i,1e3,!1)}}}),$("#moreModal").on("show.bs.modal",function(e){var o="."+e.relatedTarget.id;$("#moreModal .modal-body .content").hide(),$(o).show()})});