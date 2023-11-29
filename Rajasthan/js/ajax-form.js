!function(a){"use strict";var o={init:function(){this.ajaxLogin(),this.ajaxLostPassword(),this.ajaxRegistration(),this.ajaxChangePassword(),this.ajaxChangeUserInfo(),this.ajaxWishlist(),this.ajaxLoadPackage(),this.ajaxApplyPackage(),this.popup()},ajaxLogin:function(){a("form#ajax-login-form").on("submit",function(o){var e=a(this),s="form#ajax-login-form";a(s).addClass("ajax-preload"),a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"ajaxlogin",username:a(s+" #username").val(),password:a(s+" #password").val(),security:form_ajax_object.security_nonce},success:function(o){a(".form-status",e).show().html(o.message),1==o.logged_in&&(document.location.href=form_ajax_object.redirecturl),a(s).removeClass("ajax-preload")},error:function(o){a(e).removeClass("ajax-preload")}}),o.preventDefault()})},ajaxLostPassword:function(){a("form#lost-password-form").on("submit",function(o){var e=a(this);return a("form#lost-password-form").addClass("ajax-preload"),a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"tevily_lost_password",user_login:a("#forget_pwd_user_login").val(),security:form_ajax_object.security_nonce},success:function(o){a(".form-status",e).show().html(o.message),a("form#lost-password-form").removeClass("ajax-preload")},error:function(o){a(e).removeClass("ajax-preload")}}),o.preventDefault(),!1})},ajaxChangePassword:function(){a("form#change_password").on("submit",function(o){var e=a(this);return a(e).addClass("ajax-preload"),a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"tevily_change_password",old_password:a("#old_password").val(),new_password:a("#new_password").val(),re_password:a("#re_password").val(),security:form_ajax_object.security_nonce},success:function(o){a(".form-status",e).show().html(o.message),a(e).removeClass("ajax-preload")},error:function(o){a(e).removeClass("ajax-preload")}}),o.preventDefault(),a(e).removeClass("ajax-preload"),!1}),a("#forgot_password").length},ajaxRegistration:function(){a("form#ajax-register-user").on("submit",function(o){var e=a(this);a(e).addClass("ajax-preload");var s=a("#register-username").val(),t=a("#register-useremail").val(),r=a("#register-userpassword").val(),n=a("#register-re-pwd").val();a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"register_user_frontend",user_name:s,user_email:t,user_password:r,re_user_password:n,security:form_ajax_object.security_nonce},success:function(o){a(e).removeClass("ajax-preload"),a(".form-status",e).show().html(o.message)},error:function(o){a(e).removeClass("ajax-preload")}}),o.preventDefault()})},ajaxChangeUserInfo:function(){a("form.lt-change-profile-form").on("submit",function(o){o.preventDefault();var e=a(this);a(e).addClass("loading"),a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"tevily_change_user_info",form_data:e.serialize(),security:form_ajax_object.security_nonce}}).done(function(o){a(".form-status",e).show().html(o.message)})})},ajaxWishlist:function(){a(document).delegate(".ajax-wishlist-link.wishlist-add","click",function(o){a(this).addClass("ajax-preload");var e=a(this),s=a(this).data("post_id");a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"tevily_wishlist",post_id:s,mode:"add",security:form_ajax_object.security_nonce},success:function(o){e.removeClass("ajax-preload"),e.removeClass("wishlist-add"),e.addClass("wishlist-remove"),o.logged_in||a("#form-ajax-login-popup").modal("show"),console.log(o.add_wishlist),"added"==o.add_wishlist&&e.addClass("wishlist-added")},error:function(a){console.log("error")}}),o.preventDefault()}),a(document).delegate(".ajax-wishlist-link.wishlist-remove","click",function(o){a(this).addClass("ajax-preload");var e=a(this),s=a(this).data("post_id");a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"tevily_wishlist",post_id:s,mode:"remove",security:form_ajax_object.security_nonce},success:function(o){e.removeClass("ajax-preload"),e.addClass("wishlist-add"),e.removeClass("wishlist-remove"),o.logged_in||a("#form-ajax-login-popup").modal("show"),console.log(o.remove_wishlist),"removed"==o.remove_wishlist&&e.removeClass("wishlist-added")},error:function(a){console.log("error")}}),o.preventDefault()})},ajaxLoadPackage:function(){a(".load-lt-package").on("click",function(o){a("#popup-ajax-package .ajax-package-form-content").html("");var e=a(this).data("id");a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"load_lt_package",listing_id:e,security:form_ajax_object.security_nonce},success:function(o){a("#popup-ajax-package .ajax-package-form-content").html(o.html)}}),o.preventDefault()})},ajaxApplyPackage:function(){a(".ajax-package-form-content").delegate(".btn-apply-package","click",function(o){var e=a(this).parents(".ajax-package-form-content").find("#listing-id-val").val(),s=a(this).parents(".ajax-package-form-content").find("input[name=lt_package_choose]:checked").val(),t=a(this);a.ajax({type:"POST",dataType:"json",url:form_ajax_object.ajaxurl,data:{action:"lt_apply_package",listing_id:e,package_id:s,security:form_ajax_object.security_nonce},success:function(o){a(t).parents(".ajax-package-form-content").find(".notice-text").html(o.notice),"success"==o._status&&location.reload()}}),o.preventDefault()})},popup:function(){a("a.lost-popup").on("click",function(){a("#form-ajax-login-popup").modal("hide")}),a("a.login-popup").on("click",function(){a("#form-ajax-registration-popup").modal("hide"),a("#form-ajax-lost-password-popup").modal("hide")}),a(".modal").on("hidden.bs.modal",function(o){a(".modal:visible").length&&a("body").addClass("modal-open")})}};a(document).ready(function(){o.init()})}(jQuery);