(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>Welcome to Bob's Bagels!</h1>\n\n<p>Hello, I'm "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});
templates['menu'] = template({"1":function(depth0,helpers,partials,data) {
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
templates['unused/about'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!--About us\n=============================-->\n<div class =\"item\">\n  <img src=\"assets/img/bob_bg.jpg\" alt=\"Bob's Bagels\" class=\"fullBg\">\n    <div class=\"content\">\n      <div class=\"content_overlay\"></div>\n        <div class=\"content_inner\">\n          <div class=\"row contentscroll\">\n            <div class=\"container col-md-12\">\n              <div class=\"col-md-6 empty\">&nbsp;</div>\n                <div class=\"col-md-6 content_text\">\n                  <h1>About Bob's Bagels</h1>\n                    <div class=\"clearfix pad_top13\">\n                      <div class=\"col-md-6\">\n                        <p class=\"row\">\n                          <span class=\"bold\">best bagels. best prices. freshest ingredients... made with love.</span><br/><br/>Robert \"Bob\" Bagler was born in Boston in 1951. After years of working in his father's restaurant, Arthur's, Bob struck out on his own in 1979 and started Bob's Bagels right where it sits today, at 51 Melcher Street in Boston.<br/><br/>For the last forty years, Bob's Bagels has provided the best bagels in town, at the best prices, and made with love from only the freshest ingredients. Best of all, Bob still works the counter, just like the old days! Stop in and say hello!\n                        </p>\n                      </div>\n                        <div class=\"col-md-6\">\n                          <div class=\"right_content \">\n                            <div class=\"sub_title\">\n                              <h4>Shop Hours:</h4>\n                            </div>\n                            <div class=\"hour_table\">\n                              <table>\n                                <tr>\n                                 <td class=\"days\">Mon - Fri</td>\n                                  <td>9:00am - 4:00pm</td>\n                                </tr>\n                                <tr>\n                                  <td class=\"days\">Sat</td>\n                                  <td>9:00am - 2:00pm</td>\n                                </tr>\n                                <tr>\n                                  <td class=\"days\">Sun</td>\n                                  <td>8:30am - 1:00pm</td>\n                                </tr>\n                              </table>\n                            </div>\n                            <div class=\"sub_title\">\n                              <h4>Delivery Hours:</h4>\n                            </div>\n                            <div class=\"hour_table\">\n                              <table>\n                                <tr>\n                                 <td class=\"days\">Mon - Fri</td>\n                                  <td>8:00am - 2:00pm</td>\n                                </tr>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n<!-- // About us\n=============================-->\n";
},"useData":true});
templates['unused/nav_home'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- Home Page Menu section -->\n<nav class=\"main-nav\">\n  <a href=\"#\" class=\"nav-toggle\"></a>\n  <ul  id=\"home_nav\" class=\"nav\">\n    <li><span class=\"nav-link selected1\">Main</span></li>\n    <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n    <li><a href=\"\" class=\"nav-link\">Menu<span class=\"sub-toggle\"></span></a>\n      <ul class=\"submenu\">\n        <li><a href=\"#menu1\" class=\"nav-link\">Sandwiches Menu</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Pages<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#threefourth\" class=\"nav-link\">Three-Fourth</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Contact<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#contact\" class=\"nav-link\">Contact Us</a></li>\n        <li><a href=\"#contactform\" class=\"nav-link\">Contact Form</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n<!--  // Home Page Menu section -->\n";
  },"useData":true});
templates['unused/nav_pgs'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- Sub Page Menu section -->\n<nav class=\"main-nav\">\n  <a href=\"#\" class=\"nav-toggle\"></a>\n  <ul id=\"sub-nav\" class=\"nav\">\n    <li><a href=\"#home\" class=\"nav-link\">Main</a></li>\n    <li><a href=\"#about\" class=\"nav-link\">About</a></li>\n    <li><a href=\"\" class=\"nav-link\">Menu<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#menu1\" class=\"nav-link\">Sandwiches Menu</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Pages<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#threefourth\" class=\"nav-link\">Three-Fourth</a></li>\n      </ul>\n    </li>\n    <li><a href=\"\" class=\"nav-link\">Contact<span class=\"sub-toggle\"></span></a>\n      <ul>\n        <li><a href=\"#contact\" class=\"nav-link\">Contact Us</a></li>\n        <li><a href=\"#contactform\" class=\"nav-link\">Contact Form</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>\n<!--  // Sub Page Menu section -->\n";
  },"useData":true});
})();
