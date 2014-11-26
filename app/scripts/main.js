'use strict';

var CCHBBClient = {
  jsonAppend: '.json',
  // baseURL: 'https://warm-meadow-1723.herokuapp.com/',
  // baseURL: 'https://cch-bobsbagels-api.herokuapp.com/',
  baseURL: 'http://localhost:3000/',

  cart: {
    orders: []
  },

  menu: {},

  stripeResponseHandler: function(status, response) {
      var $form = $('#payment-form');

      if (response.error) {
        // Show the errors on the form
        $form.find('.payment-errors').text(response.error.message);
        $form.find('button').prop('disabled', false);
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        var fullName = response.card.name;
        var street = response.card.address_line1;
        var city = response.card.address_city;
        var state = response.card.address_state;
        var zip = response.card.address_zip;
        var total = 0;
        for(var i = 0, length = CCHBBClient.cart.orders.length; i < length; i++) {
          total += parseFloat(CCHBBClient.cart.orders[i].price);
        };

        for(var i = 0, length = CCHBBClient.cart.orders.length; i < length; i++) {
          var name = CCHBBClient.cart.orders[i].name;
          var price = CCHBBClient.cart.orders[i].price;

          $form.append($('<input type="hidden" name="order_item_attributes[name]" />').val(name));
          $form.append($('<input type="hidden" name="order_item_attributes[price]" />').val(price));
        };


        // Insert the token into the form so it gets submitted to the server
        $form.append($('<input type="hidden" name="order[access_token]" />').val(token));
        $form.append($('<input type="hidden" name="order[name]" />').val(fullName));
        $form.append($('<input type="hidden" name="order[street]" />').val(street));
        $form.append($('<input type="hidden" name="order[city]" />').val(city));
        $form.append($('<input type="hidden" name="order[state]" />').val(state));
        $form.append($('<input type="hidden" name="order[zipcode]" />').val(zip));
        $form.append($('<input type="hidden" name="order[price]" />').val(total));
        // and submit
        $form.get(0).submit();
      }
  }
};

CCHBBClient.renderPgNav = function() {
  var compiledTemplate = Handlebars.getTemplate('nav_pgs');
  var html = compiledTemplate({});
};

CCHBBClient.renderCart = function(name, price) {
  CCHBBClient.cart.orders.push({name: name, price: price});
};

// event listeners
CCHBBClient.addEvents = function() {
  $('#content').on('click', '.menu-item', function(e) {
    e.preventDefault();

    var name = $(this).html();
    var price = $(this).next().html();
    CCHBBClient.renderCart(name, price);
    CCHBBClient.router.menu();
  });

  $('#content').on('click', '.js-delete-item', function(e) {
    e.preventDefault();

    var name = $(this).next().html();
    var newOrder = CCHBBClient.cart.orders.filter(function(item) {
                        return item.name !== name;
                       });
    CCHBBClient.cart.orders = newOrder;
    CCHBBClient.router.cart();
  });

  $('#content').on('click', '.js-delete-item-cart', function(e) {
    e.preventDefault();

    var name = $(this).next().html();
    var newOrder = CCHBBClient.cart.orders.filter(function(item) {
                        return item.name !== name;
                       });
    CCHBBClient.cart.orders = newOrder;
    CCHBBClient.router.menu();
  });

  $('#content').on('click', 'input[value="Place Order"]', function(e) {
    CCHBBClient.router.checkout();
  });
    // $('#js-placeOrder').on('submit', CCHBBClient.checkOut);

    // $('.js-taskForm').on('submit', CCHBBClient.submitTaskForm);

    // $('.js-taskList').on('click', 'a', CCHBBClient.clickTaskItem);

    // $('.js-removeCompleted').on('click', CCHBBClient.clickRemoveCompleted);
};

var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'home': 'home',
    'menu': 'menu',
    'about': 'about',
    'contact': 'contact',
    'checkout': 'checkout',
    'cart': 'cart',
    'confirmation': 'confirmation'
  },

  home: function() {
    var template = Handlebars.templates['home'];
    $('#content').html(template({}));
  },

  menu: function() {
    // for use with menu.handlebars template
    var template = Handlebars.templates['menu'];

    // for use with in-line HTML menu template
    // var template = Handlebars.compile($("#menu-temp").html());

    $('#content').html(template({}));
    $.ajax({
      url: CCHBBClient.baseURL + 'menus' + CCHBBClient.jsonAppend,
      type: 'GET',
      dataType: 'json',
    }).done(function(response) {
      $('#content').html(template({
        menu: response.menus,
        order_items: CCHBBClient.cart.orders
      }));
    });
  },

  about: function() {
    // var template = Handlebars.compile($("#about-temp").html());
    // $('#content').html(template({}));
    var template = Handlebars.templates['about'];
    $('#content').html(template({}));
  },

  contact: function() {
    var template = Handlebars.compile($("#contact-temp").html());
    $('#content').html(template({}));

  },

  checkout: function() {
    var template = Handlebars.compile($("#checkout-temp").html());
    var total = 0;
    for(var i = 0, length = CCHBBClient.cart.orders.length; i < length; i++) {
      total += parseFloat(CCHBBClient.cart.orders[i].price);
    };

    $('#content').html(template({
      order_items: CCHBBClient.cart.orders,
      total_price: total
    }));
  },

  cart: function() {
    var template = Handlebars.compile($("#cart-temp").html());
     $('#content').html(template({
        order_items: CCHBBClient.cart.orders
      }));
  },

  confirmation: function() {
    var template = Handlebars.compile($("#conf-temp").html());
    $('#content').html(template({}));
  }
});

// DOM ready
$(function() {

  // $.ajaxSetup({contentType: 'application/json'});
  // CCHBBClient.initApp();
  CCHBBClient.router = new Router();
  Backbone.history.start();

  CCHBBClient.addEvents();

  Stripe.setPublishableKey('pk_test_0fbtu0To5Q8TurGcFy6XZ505');

  $('#content').on('click', '#checkout-button', function(event) {

    var $form = $('#payment-form');
    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);

    Stripe.card.createToken($form, CCHBBClient.stripeResponseHandler);

    // Prevent the form from submitting with the default action
    return false;
  });
});
