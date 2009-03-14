// ==========================================================================
// Product Customizer
// ==========================================================================
/*global main $ Store */

sc_require('jquery');

/**
  Can be used to customize a product by choosing from a variety of options.
  The new total and taxes will be added automatically.
*/
Store = {};

// ..........................................................
// PRIVATE HELPERS
// 

// Helper to scrub HTML
function toFloat(str) {
  return parseFloat(str.replace(/[^0-9\.]/g, '')) ;
}

// ..........................................................
// MODELS
// 

/**
  Describes a single entry in the current shopping cart.  Note that a
  line item both describes the product and the quantity.  For a particular
  product, you could always define a subclass if you want and then create
  instances to fill in the quantity.
*/
Store.LineItem = SC.Object.extend({
  
  productCode: 'none',
  desc: '(None)',
  price: 0.00,
  quantity: 0,
  category: 'none',
  
  total: function() {
    return this.get('price') * this.get('quantity') ;
  }.property('price', 'quantity').cacheable()
  
});

// ..........................................................
// VIEWS
// 

/**
  Manages a single customizer option.  You must set a lineItem for 
  the view, which will be used to automatically display pricing information
  as well as binding the 'selectedLineItem' to a property shared by all
  option views in the same category.
*/
Store.CustomizerOptionView = SC.Object.extend({

  /** 
    The lineItem managed by the option view.  This should have a preset
    quantity.  It will be added to/removed from the order as needed.
  */
  lineItem: null,

  /**
    The currently selected line item for the category this option view
    belongs to.  Bind this to the same property as all other option views
    in the same category.
  */
  selectedLineItem: null,

  /**
    Invoked whenever the selected line item changes.  This will update 
    the hint in the UI as well as the selected state of the input tag 
    to reflect the new state.
  */
  lineItemsDidChange: function() {
    
    // update hint...
    var myLineItem = this.get('lineItem');
    var selected = this.get('selectedLineItem');
    
    // update the hint.  if this is the selected line item, hide hint...
    var hint = this.$().parent().parent().find('.hint');
    if (myLineItem === selected) {
      hint.addClass('hidden');
      
    // otherwise, compute the price difference and show it.
    } else {
      var diff = myLineItem.get('price') - selected.get('price');
      var verb = (diff>0) ? 'Add' : 'Subtract';
      
      hint.removeClass('hidden');
      hint.text((diff === 0) ? '[No Change]' : ('['+verb+' $'+Math.abs(diff).toFixed(0)+']') );        
    }
  }.observes('lineItem', 'selectedLineItem'),

  /**
    Returns a jQuery object for the input element matching the current 
    line item.
  */
  $: function() {
    var li = this.get('lineItem');
    return li ?  $('input[name='+li.get('category')+'][value='+li.get('productCode')+']') : null;  
  },

  /**
    Invoked whenever the state of the input element for this option view
    changes.  This will update the selectedLineItem property.
  */
  inputDidChangeHandler: function(e) {
    
    SC.RunLoop.begin();
    
    var view = e.data ;
    var checked = $(this).attr('checked') ;
    var li = view.get('lineItem') ;
    if (checked) {
      view.set('selectedLineItem', li);
    } else {
      if (view.get('selectedLineItem') === li) {
        view.set('selectedLineItem', null) ;
      }
    }
    
    SC.RunLoop.end();
  }        
});

/**
  Create this view.  Pass the input element you want to manage along with
  any attributes hash to pass to create().  Your attrs should include a 
  line item.
*/
Store.CustomizerOptionView.viewFor = function(e, attrs) {
  var ret = this.create(attrs) ;
  $(e).bind('change', ret, ret.inputDidChangeHandler) ; // listen 
  return ret ;
} ;

// ..........................................................
// CONTROLLER
// 

/**
  Manages the customizer for a page.
*/
Store.customizer = SC.Object.create({

  /**
    Array of categories that should be used to compute the current order.
  */
  categories: [],

  /**
    The current order.  This property is computed automatically from the
    current set of categories.  It is invalidated whenever a category value
    changes.
    
    Note that dependencies for the order are added dynamically as they are
    discovered on the page.
    
    @property
  */
  order: function() {
    
    // only include line items whose product code is not 'none'.
    return this.get('categories').map(function(cat) {
      var li = this.get(cat);
      return (li && li.productCode !== 'none') ? li : null;
    },this).compact();
  }.property().cacheable(),

  /**
    The current tax rate.  Used to calculate the total.
  */
  taxRate: 0.00,

  /**
    The current subtotal.  This is simply retrieved from the current order.
    
    @property
  */
  subtotal: function() {
    var order = this.get('order') ;
    return (order) ? order.get('@sum(total)') : 0;
  }.property('order').cacheable(),

  /**
    The final total that includes any taxes..
    
    @property
  */
  total: function() {
    return this.get('subtotal') * (1+this.get('taxRate'));
  }.property('subtotal', 'taxRate').cacheable(),


  /**
    Used to register a category.  This will dynamically add the category
    property to the object and make the order property dependent on it.
    
    This method is called automatically during setup() as categories are
    discovered on the page.
  */
  registerCategory: function(cat) {
    var categories = this.get('categories');
    // only setup once...
    // array:indexOf() is not available in runtime
    var found = false ;
    for (var idx=0, len=categories.length; idx<len; idx++) {
      if (categories[idx] === cat) {
        found = true ;
        break ;
      }
    }
    if (!found) {
      categories.push(cat);
      this.registerDependentKey('order', cat);
    }
    return this ;
  },

  /** 
    Call this method when the page is ready to setup the customizer.  This
    will autodiscover the customizer from the HTML and set it up.
  */
  setup: function() {
    
    this.beginPropertyChanges();

    // first create a base line item for the product since this will always
    // be included.
    var lineItem = Store.LineItem.create({
      productCode: $('input#product').val(),
      desc: $('#product-name').text(),
      quantity: 1,
      price: toFloat($('#order-subtotal').text()),
      category: 'base'
    });
    this.registerCategory('base').set('base', lineItem);

    // also find tax rate.
    this.set('taxRate', toFloat($('#tax-rate').text())/100) ;
    
    // find & setup option views.
    var controller = this ;
    this._views = $('#customizer input').map(function() {

      // Build a line item based on the current HTML settings...
      var e = $(this), root = e.parent().parent(), cat ;
      var lineItem = Store.LineItem.create({
        category: e.attr('name'),
        productCode: e.attr('value'),
        price: toFloat(root.find('.price').text()),
        desc: root.find('.desc').text(),
        quantity: 1 
      }) ;
      cat = lineItem.get('category');
      controller.registerCategory(cat);

      // create the view and bind to controller...
      var view = Store.CustomizerOptionView.viewFor(e, { 
        lineItem: lineItem
      });
      view.bind('selectedLineItem', controller, cat) ;
      
      // cleanup to avoid memory leaks...
      root = e = null ;
      
      // return new view.
      return view ;
    });
    
    this.endPropertyChanges() ;
    return this ;
  },

  // whenever the subtotal changes, we need to update the UI...
  subtotalDidChange: function() {
    $('#order-subtotal').text(this.get('subtotal').toFixed(2));
  }.observes('subtotal'),

  // whenever the total changes, update the UI
  totalDidChange: function() {
    $('#order-total').text(this.get('total').toFixed(2));
    $('#order-tax').text((this.get('total')*this.get('taxRate')).toFixed(2)) ;
  }.observes('total'),

  // whenever the tax rate changes, update the UI
  taxRateDidChange: function() {
    $('#tax-rate').text(Math.floor(this.get('taxRate')*100).toFixed(2));
  }.observes('taxRate')
      
});

// this will display an order summary by generating the appropriate HTML
Store.orderSummaryController = SC.Object.create({
  
  order: [],
  orderBinding: 'Store.customizer.order',
  
  // generate new summary...
  orderDidChange: function() {
    console.log('orderDidChange');
    $('#summary-detail').html(this.get('order').map(function(lineItem) {
      return ['<li>',
        '<span class="code">', lineItem.get('productCode'), '</span>',
        '<span class="desc">', lineItem.get('desc'), '</span>',
        '<span class="price">', lineItem.get('price').toFixed(2), '</span>',
      '</li>'].join('');
    }, this).join(''));
    $('#summary-total .price').text(this.getPath('order.@sum(total)').toFixed(2)) ;
  }.observes('order')
});

// startup method 
$.fn.ready(function() {
  SC.RunLoop.begin();
  Store.customizer.setup();
  SC.RunLoop.end();
});
