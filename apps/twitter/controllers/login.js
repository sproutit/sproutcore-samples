// ==========================================================================
// Project:   Twitter.loginController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Twitter Base64*/

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/


Twitter.loginController = SC.Object.create(
/** @scope Twitter.loginController.prototype */ {
  
  username: '',
  password: '',

  openDialog: function() {
     var pane = SC.SheetPane.create({
       layout: { width: 400, height: 150, centerX: 0 },
       contentView: SC.View.extend({
         layout: { top: 0, left: 0, bottom: 0, right: 0 },
         childViews: 'userTextField passwordTextField buttonView cancelButtonView'.w(),

         userTextField: SC.TextFieldView.extend({
           layout: { centerY: -40, height: 24, centerX: 0, width: 300 },
           textAlign: SC.ALIGN_CENTER,
           controlSize: SC.LARGE_CONTROL_SIZE,
           hint: "USERNAME"
         }),

         passwordTextField: SC.TextFieldView.extend({
            layout: { centerY: 0, height: 24, centerX: 0, width: 300 },
            textAlign: SC.ALIGN_CENTER,
            controlSize: SC.LARGE_CONTROL_SIZE,
            isPassword: YES,
            hint: "PASSWORD"
          }),

         buttonView: SC.ButtonView.extend({
           layout: { width: 80, bottom: 20, height: 24, centerX: 50 },
           title: "Login",
           action: "login",
           target: "Twitter.loginController",
           isDefault: YES
         }),
         
         cancelButtonView: SC.ButtonView.extend({
            layout: { width: 80, bottom: 20, height: 24, centerX: -50 },
            title: "Cancel",
            action: "cancel",
            target: "Twitter.loginController"
          })
       })
     });
     pane.append();
     this.set('sheetPane', pane);
   },
   
   credentialsDidChange: function() {
     Twitter.listsController.reload();
   }.observes('username', 'password'),
   
   login:function(){
     var username = this.getPath('sheetPane.contentView.userTextField.value');
     this.beginPropertyChanges();
     this.set('username', username);
     var password = this.getPath('sheetPane.contentView.passwordTextField.value');
     this.set('password', password);
     this.endPropertyChanges();
     var auth = Base64.encode(username+":"+password);
     SC.Request.getUrl('account/verify_credentials.json').json()
          .notify(this, 'loginSuccess')
          .header('Authorization', "Basic "+auth)
          .send();
     this.loginSuccess();
   },
   
   loginSuccess:function(response){
     if (SC.ok(response)) this.get('sheetPane').remove();
     else alert('Try again, username or password incorrect');
   },
   
   
   cancel: function(){
     this.get('sheetPane').remove();
   },
   
   authData: function() {
    var username = this.get('username'),
        password = this.get('password');
        
     return "Basic "+Base64.encode(username+":"+password);
   }.property('username', 'password').cacheable()

}) ;


/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = 0, c1 = 0, c2 = 0, c3;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}
 
};