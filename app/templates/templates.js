(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"about\">\n<img src=\"assets/img/bob.jpg\">\n  <h1>About</h1>\n  <p>Robert Bob Bagler was born in Boston in 1951; after years of working in his father`s restaurant, Arthur`s, he struck out on his own in 1979 and started Bob`s Bagels right where it sits today, at XYZ Ave in Boston. For the last forty years, Bob`s Bagels has strived to proved the best bagels in town, at the best prices, made with love from only the freshest ingredients. Bob still works the counter, just like the old days, so stop in sometime and say hello!</p>\n  </script>\n</div>\n";
  },"useData":true});
templates['home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"item active\">\n    <img class=\"carousel-img\" src=\"assets/img/main_bg.jpg\">\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <h1>Welcome to Bob's Bagels!</h1>\n          <p>BEST BAGELS. BEST PRICES. FRESHEST INGREDIENTS. ALL MADE WITH LOVE.</p>\n        </div>\n      </div>\n    </div>\n<!-- /.carousel -->\n\n";
},"useData":true});
templates['unused/menu'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "      <li class=\"menu-type\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n          <ul id=\"list\">\n";
  stack1 = ((helper = (helper = helpers.menu_items || (depth0 != null ? depth0.menu_items : depth0)) != null ? helper : helperMissing),(options={"name":"menu_items","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.menu_items) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </ul>\n      </li>\n";
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <li><a class=\"menu-item\"  data-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a><span class=\"price\"> "
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "</span></li>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "          <li><a class=\"js-delete-item-cart\" href=\"#\">X</a> <a class=\"order-item\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a><span class=\"price\"> "
    + escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"price","hash":{},"data":data}) : helper)))
    + "</span></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<h1>Menu</h1>\n\n<p>Rendering "
    + escapeExpression(((helper = (helper = helpers.template_name || (depth0 != null ? depth0.template_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"template_name","hash":{},"data":data}) : helper)))
    + " template!</p>\n  <ul id=\"menu-list\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.menu : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "  </ul>\n  <div id=\"js-cart\">\n    <p><strong>Cart</strong></p>\n    <ul>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.order_items : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n    <input class=\"actions\" type=\"submit\" value=\"Place Order\"/>\n  </div>\n";
},"useData":true});
templates['unused/nav_home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- Home Page Menu section -->\n<nav class=\"main-nav\">\n  <a href=\"#\" class=\"nav-toggle\"></a>\n  <ul  id=\"home_nav\" class=\"nav\">\n    <li><span class=\"nav-link selected1\">Main</span></li>\n    <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n    <li><a href=\"\" class=\"nav-link\">Menu<span class=\"sub-toggle\"></span></a>\n      <ul class=\"submenu\">\n        <li><a href=\"#menu1\" class=\"nav-link\">Sandwiches Menu</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Pages<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#threefourth\" class=\"nav-link\">Three-Fourth</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Contact<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#contact\" class=\"nav-link\">Contact Us</a></li>\n        <li><a href=\"#contactform\" class=\"nav-link\">Contact Form</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n<!--  // Home Page Menu section -->\n";
  },"useData":true});
templates['unused/nav_pgs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- Sub Page Menu section -->\n<nav class=\"main-nav\">\n  <a href=\"#\" class=\"nav-toggle\"></a>\n  <ul id=\"sub-nav\" class=\"nav\">\n    <li><a href=\"#home\" class=\"nav-link\">Main</a></li>\n    <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n    <li><a href=\"\" class=\"nav-link\">Menu<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#menu1\" class=\"nav-link\">Sandwiches Menu</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Pages<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#threefourth\" class=\"nav-link\">Three-Fourth</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Contact<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#contact\" class=\"nav-link\">Contact Us</a></li>\n        <li><a href=\"#contactform\" class=\"nav-link\">Contact Form</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n<!--  // Sub Page Menu section -->\n";
  },"useData":true});
})();
