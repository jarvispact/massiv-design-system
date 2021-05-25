'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        before = _this.prepend ? _this.container.firstChild : _this.before;
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-ms-input-placeholder|-moz-read-write|-moz-read-only){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var e="-ms-";var r="-moz-";var a="-webkit-";var c="comm";var n="rule";var t="decl";var i="@import";var p="@keyframes";var k=Math.abs;var d=String.fromCharCode;function m(e,r){return (((r<<2^z(e,0))<<2^z(e,1))<<2^z(e,2))<<2^z(e,3)}function g(e){return e.trim()}function x(e,r){return (e=r.exec(e))?e[0]:e}function y(e,r,a){return e.replace(r,a)}function j(e,r){return e.indexOf(r)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}function S(e,r){return e.map(r).join("")}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function I(e,r,a){return H(e,r.root,r.parent,a,r.props,r.children,0)}function J(){return F}function K(){F=E>0?z(G,--E):0;if(B--,F===10)B=1,q--;return F}function L(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function N(){return z(G,E)}function P(){return E}function Q(e,r){return C(G,e,r)}function R(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return q=B=1,D=A(G=e),E=0,[]}function U(e){return G="",e}function V(e){return g(Q(E-1,_(e===91?e+2:e===40?e+1:e)))}function X(e){while(F=N())if(F<33)L();else break;return R(e)>2||R(F)>3?"":" "}function Z(e,r){while(--r&&L())if(F<48||F>102||F>57&&F<65||F>70&&F<97)break;return Q(e,P()+(r<6&&N()==32&&L()==32))}function _(e){while(L())switch(F){case e:return E;case 34:case 39:return _(e===34||e===39?e:F);case 40:if(e===41)_(e);break;case 92:L();break}return E}function ee(e,r){while(L())if(e+F===47+10)break;else if(e+F===42+42&&N()===47)break;return "/*"+Q(r,E-1)+"*"+d(e===47?e:L())}function re(e){while(!R(N()))L();return Q(e,E)}function ae(e){return U(ce("",null,null,null,[""],e=T(e),0,[0],e))}function ce(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var b=1;var w=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(w)switch(p=k,k=L()){case 34:case 39:case 91:case 40:z+=V(k);break;case 9:case 10:case 13:case 32:z+=X(p);break;case 92:z+=Z(P()-1,7);continue;case 47:switch(N()){case 42:case 47:O(te(ee(L(),P()),r,a),i);break;default:z+="/";}break;case 123*b:u[f++]=A(z)*$;case 125*b:case 59:case 0:switch(k){case 0:case 125:w=0;case 59+o:if(h>0&&A(z)-l)O(h>32?se(z+";",c,a,l-1):se(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ne(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)ce(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:ce(e,j,j,c&&O(ne(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:ce(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,b=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:if(b<1)if(k==123)--b;else if(k==125&&b++==0&&K()==125)continue;switch(z+=d(k),k*b){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(N()===45)z+=V(L());v=N(),o=A(m=z+=re(P())),k++;break;case 45:if(p===45&&A(z)==2)b=0;}}return t}function ne(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var b=0,w=0,$=0;b<c;++b)for(var d=0,m=C(e,v+1,v=k(w=u[b])),x=e;d<p;++d)if(x=g(w>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function te(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function se(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function ue(c,n){switch(m(c,n)){case 5103:return a+"print-"+c+c;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return a+c+c;case 5349:case 4246:case 4810:case 6968:case 2756:return a+c+r+c+e+c+c;case 6828:case 4268:return a+c+e+c+c;case 6165:return a+c+e+"flex-"+c+c;case 5187:return a+c+y(c,/(\w+).+(:[^]+)/,a+"box-$1$2"+e+"flex-$1$2")+c;case 5443:return a+c+e+"flex-item-"+y(c,/flex-|-self/,"")+c;case 4675:return a+c+e+"flex-line-pack"+y(c,/align-content|flex-|-self/,"")+c;case 5548:return a+c+e+y(c,"shrink","negative")+c;case 5292:return a+c+e+y(c,"basis","preferred-size")+c;case 6060:return a+"box-"+y(c,"-grow","")+a+c+e+y(c,"grow","positive")+c;case 4554:return a+y(c,/([^-])(transform)/g,"$1"+a+"$2")+c;case 6187:return y(y(y(c,/(zoom-|grab)/,a+"$1"),/(image-set)/,a+"$1"),c,"")+c;case 5495:case 3959:return y(c,/(image-set\([^]*)/,a+"$1"+"$`$1");case 4968:return y(y(c,/(.+:)(flex-)?(.*)/,a+"box-pack:$3"+e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+a+c+c;case 4095:case 3583:case 4068:case 2532:return y(c,/(.+)-inline(.+)/,a+"$1$2")+c;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(c)-1-n>6)switch(z(c,n+1)){case 109:if(z(c,n+4)!==45)break;case 102:return y(c,/(.+:)(.+)-([^]+)/,"$1"+a+"$2-$3"+"$1"+r+(z(c,n+3)==108?"$3":"$2-$3"))+c;case 115:return ~j(c,"stretch")?ue(y(c,"stretch","fill-available"),n)+c:c}break;case 4949:if(z(c,n+1)!==115)break;case 6444:switch(z(c,A(c)-3-(~j(c,"!important")&&10))){case 107:return y(c,":",":"+a)+c;case 101:return y(c,/(.+:)([^;!]+)(;|!.+)?/,"$1"+a+(z(c,14)===45?"inline-":"")+"box$3"+"$1"+a+"$2$3"+"$1"+e+"$2box$3")+c}break;case 5936:switch(z(c,n+11)){case 114:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb")+c;case 108:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"tb-rl")+c;case 45:return a+c+e+y(c,/[svh]\w+-[tblr]{2}/,"lr")+c}return a+c+e+c+c}return c}function ie(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function fe(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=ie(e.children,s))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function ve(c,s,u,i){if(!c.return)switch(c.type){case t:c.return=ue(c.value,c.length);break;case p:return ie([I(y(c.value,"@","@"+a),c,"")],i);case n:if(c.length)return S(c.props,(function(n){switch(x(n,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ie([I(y(n,/:(read-\w+)/,":"+r+"$1"),c,"")],i);case"::placeholder":return ie([I(y(n,/:(plac\w+)/,":"+a+"input-$1"),c,""),I(y(n,/:(plac\w+)/,":"+r+"$1"),c,""),I(y(n,/:(plac\w+)/,e+"input-$1"),c,"")],i)}return ""}))}}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (R(character)) {
      case 0:
        // &\f
        if (character === 38 && N() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += re(E - 1);
        break;

      case 2:
        parsed[index] += V(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = N() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += d(character);
    }
  } while (character = L());

  return parsed;
};

var getRules = function getRules(value, points) {
  return U(toRules(T(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // .length indicates if this rule contains pseudo or not
  !element.length) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser$1 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$1 ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [ve];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser$1 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$1) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser$1) {
    var currentSheet;
    var finalizingPlugins = [fe, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== c) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : le(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = oe(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return ie(ae(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [fe];

    var _serializer = oe(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return ie(ae(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles$1(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

function insertWithoutScoping(cache, serialized) {
  if (cache.inserted[serialized.name] === undefined) {
    return cache.insert('', serialized, cache.sheet, true);
  }
}

function merge$1(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles$1(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var createEmotion = function createEmotion(options) {
  var cache = createCache(options); // $FlowFixMe

  cache.sheet.speedy = function (value) {
    if (process.env.NODE_ENV !== 'production' && this.ctr !== 0) {
      throw new Error('speedy must be changed before any rules are inserted');
    }

    this.isSpeedy = value;
  };

  cache.compat = true;

  var css = function css() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered, undefined);
    insertStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var keyframes = function keyframes() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var serialized = serializeStyles(args, cache.registered);
    var animation = "animation-" + serialized.name;
    insertWithoutScoping(cache, {
      name: serialized.name,
      styles: "@keyframes " + animation + "{" + serialized.styles + "}"
    });
    return animation;
  };

  var injectGlobal = function injectGlobal() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    var serialized = serializeStyles(args, cache.registered);
    insertWithoutScoping(cache, serialized);
  };

  var cx = function cx() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    return merge$1(cache.registered, css, classnames(args));
  };

  return {
    css: css,
    cx: cx,
    injectGlobal: injectGlobal,
    keyframes: keyframes,
    hydrate: function hydrate(ids) {
      ids.forEach(function (key) {
        cache.inserted[key] = true;
      });
    },
    flush: function flush() {
      cache.registered = {};
      cache.inserted = {};
      cache.sheet.flush();
    },
    // $FlowFixMe
    sheet: cache.sheet,
    cache: cache,
    getRegisteredStyles: getRegisteredStyles$1.bind(null, cache.registered),
    merge: merge$1.bind(null, cache.registered, css)
  };
};

var classnames = function classnames(args) {
  var cls = '';

  for (var i = 0; i < args.length; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

var _createEmotion = createEmotion({
  key: 'css'
}),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var breakpoint = {
    s: '640px',
    m: '768px',
    l: '1024px',
    xl: '1280px',
    xxl: '1600px',
    xxxl: '1920px',
};
var color = {
    gray50: '#FAFAFA',
    gray100: '#F5F5F5',
    gray200: '#E5E5E5',
    gray300: '#D4D4D4',
    gray400: '#A3A3A3',
    gray500: '#737373',
    gray600: '#525252',
    gray700: '#404040',
    gray800: '#262626',
    gray900: '#171717',
    error50: '#FEF2F2',
    error100: '#FEE2E2',
    error200: '#FECACA',
    error300: '#FCA5A5',
    error400: '#F87171',
    error500: '#EF4444',
    error600: '#DC2626',
    error700: '#B91C1C',
    error800: '#991B1B',
    error900: '#7F1D1D',
    warning50: '#FFFBEB',
    warning100: '#FEF3C7',
    warning200: '#FDE68A',
    warning300: '#FCD34D',
    warning400: '#FBBF24',
    warning500: '#F59E0B',
    warning600: '#D97706',
    warning700: '#B45309',
    warning800: '#92400E',
    warning900: '#78350F',
    success50: '#F0FDF4',
    success100: '#DCFCE7',
    success200: '#BBF7D0',
    success300: '#86EFAC',
    success400: '#4ADE80',
    success500: '#22C55E',
    success600: '#16A34A',
    success700: '#15803D',
    success800: '#166534',
    success900: '#14532D',
    primary50: '#EFF6FF',
    primary100: '#DBEAFE',
    primary200: '#BFDBFE',
    primary300: '#93C5FD',
    primary400: '#60A5FA',
    primary500: '#3B82F6',
    primary600: '#2563EB',
    primary700: '#1D4ED8',
    primary800: '#1E40AF',
    primary900: '#1E3A8A',
    secondary50: '#FDF2F8',
    secondary100: '#FCE7F3',
    secondary200: '#FBCFE8',
    secondary300: '#F9A8D4',
    secondary400: '#F472B6',
    secondary500: '#EC4899',
    secondary600: '#DB2777',
    secondary700: '#BE185D',
    secondary800: '#9D174D',
    secondary900: '#831843',
};
var spacing = {
    px: '1px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '28': '7rem',
    '32': '8rem',
    '36': '9rem',
    '40': '10rem',
    '44': '11rem',
    '48': '12rem',
    '52': '13rem',
    '56': '14rem',
    '60': '15rem',
    '64': '16rem',
    '72': '18rem',
    '80': '20rem',
    '96': '24rem',
};
var fontFamily = {
    sans: [
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
    ].join(', '),
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(', '),
    mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(', '),
};
var fontSize = {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
};
var fontWeight = {
    xxs: '100',
    xs: '200',
    s: '300',
    m: '400',
    l: '500',
    xl: '600',
    '2xl': '700',
    '3xl': '800',
    '4xl': '900',
};
var lineHeight = {
    xs: '0.75rem',
    s: '0.875rem',
    m: '1rem',
    l: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
};
var letterSpacing = {
    xs: '-0.05em',
    s: '-0.025em',
    m: '0',
    l: '0.025em',
    xl: '0.05em',
    xxl: '0.1em',
};
var radii = {
    s: '2px',
    m: '4px',
    l: '6px',
    xl: '8px',
    circle: '9999px',
};
var shadow = {
    s: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    m: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    l: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};
var zIndex = {
    '0': 0,
    '10': 0,
    '20': 0,
    '30': 0,
    '40': 0,
    '50': 0,
};
var components = {
    Heading: function (variant) {
        var css = useCss().css;
        switch (variant) {
            case 'h1':
                return css({ fontFamily: 'serif', fontSize: { value: '3xl', m: '4xl' } });
            case 'h2':
                return css({ fontFamily: 'serif', fontSize: { value: '2xl', m: '3xl' } });
            case 'h3':
                return css({ fontFamily: 'serif', fontSize: { value: 'xl', m: '2xl' } });
            case 'h4':
                return css({ fontFamily: 'serif', fontSize: { value: 'l', m: 'xl' } });
            case 'h5':
                return css({ fontFamily: 'serif', fontSize: { value: 'm', m: 'l' } });
            case 'h6':
                return css({ fontFamily: 'serif', fontSize: { value: 'm', m: 'm' } });
            default:
                return css({ fontFamily: 'serif' });
        }
    },
    Text: function (variant) {
        var css = useCss().css;
        switch (variant) {
            case 'bold':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 'l' });
            case 'body1':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 'm' });
            case 'body2':
                return css({ fontFamily: 'sans', fontSize: 'm', fontWeight: 's' });
            case 'body3':
                return css({ fontFamily: 'sans', fontSize: 's', fontWeight: 's' });
            case 'body4':
                return css({ fontFamily: 'sans', fontSize: 's', fontWeight: 'xs' });
            case 'body5':
                return css({ fontFamily: 'sans', fontSize: 'xs', fontWeight: 'xs' });
            default:
                return css({ fontFamily: 'sans' });
        }
    },
};
var defaultTheme = {
    breakpoint: breakpoint,
    color: color,
    spacing: spacing,
    width: spacing,
    height: spacing,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    letterSpacing: letterSpacing,
    radii: radii,
    shadow: shadow,
    zIndex: zIndex,
    components: components,
};

/* eslint-disable @typescript-eslint/no-explicit-any */
var ThemeContext = React__default['default'].createContext({
    theme: defaultTheme,
    setTheme: function () { },
});
var ThemeProvider = function (_a) {
    var theme = _a.theme, children = _a.children;
    var _b = React.useState(theme), activeTheme = _b[0], setActiveTheme = _b[1];
    var context = {
        theme: activeTheme,
        setTheme: setActiveTheme,
    };
    return React__default['default'].createElement(ThemeContext.Provider, { value: context }, children);
};
var useTheme = function () { return React.useContext(ThemeContext); };

var objectKeys = function (obj) { return Object.keys(obj); };

var objectProps = ['value'];
// @ts-ignore
// eslint-disable-next-line prettier/prettier
var getValueFromThemeScopeWithFallback = function (value, theme, themeScope) { return themeScope ? theme[themeScope][value] || value : value; };
var buildCssObj = function (theme, definitions, obj) {
    var keys = objectKeys(obj);
    __spreadArray(__spreadArray([], objectKeys(theme.breakpoint)), objectProps);
    var breakpointValues = Object.values(theme.breakpoint);
    var retVal = {};
    keys.forEach(function (key) {
        if (key === 'customSelectors') {
            var value_1 = obj[key];
            objectKeys(value_1).forEach(function (selector) {
                var customObj = value_1[selector];
                objectKeys(customObj).forEach(function (customObjKey) {
                    var _a;
                    var def = definitions[customObjKey];
                    if (!def)
                        return;
                    retVal = __assign(__assign({}, retVal), (_a = {}, _a[selector] = __assign(__assign({}, retVal[selector]), def.getCSS(getValueFromThemeScopeWithFallback(customObj[customObjKey], theme, def.themeScope))), _a));
                });
            });
            return;
        }
        var def = definitions[key];
        if (!def)
            return;
        var value = obj[key];
        if (typeof value === 'string') {
            retVal = __assign(__assign({}, retVal), def.getCSS(getValueFromThemeScopeWithFallback(value, theme, def.themeScope)));
        }
        else if (Array.isArray(value)) {
            value.forEach(function (val, idx) {
                var _a;
                if (idx === 0) {
                    retVal = __assign(__assign({}, retVal), def.getCSS(getValueFromThemeScopeWithFallback(val, theme, def.themeScope)));
                }
                else {
                    var mediaQueryKey = "@media(min-width: " + breakpointValues[idx - 1] + ")";
                    retVal = __assign(__assign({}, retVal), (_a = {}, _a[mediaQueryKey] = __assign(__assign({}, retVal[mediaQueryKey]), def.getCSS(getValueFromThemeScopeWithFallback(val, theme, def.themeScope))), _a));
                }
            });
        }
        else {
            objectKeys(value).forEach(function (key) {
                var _a;
                if (key === 'value') {
                    retVal = __assign(__assign({}, retVal), def.getCSS(getValueFromThemeScopeWithFallback(value.value, theme, def.themeScope)));
                }
                else {
                    var mediaQueryKey = "@media(min-width: " + theme.breakpoint[key] + ")";
                    retVal = __assign(__assign({}, retVal), (_a = {}, _a[mediaQueryKey] = __assign(__assign({}, retVal[mediaQueryKey]), def.getCSS(getValueFromThemeScopeWithFallback(value[key], theme, def.themeScope))), _a));
                }
            });
        }
    });
    return retVal;
};

var paddingSystemDef = {
    padding: { themeScope: 'spacing', getCSS: function (v) { return ({ padding: v }); } },
    p: { themeScope: 'spacing', getCSS: function (v) { return ({ padding: v }); } },
    pt: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingTop: v }); } },
    pr: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingRight: v }); } },
    pb: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingBottom: v }); } },
    pl: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingLeft: v }); } },
    px: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingLeft: v, paddingRight: v }); } },
    py: { themeScope: 'spacing', getCSS: function (v) { return ({ paddingTop: v, paddingBottom: v }); } },
};

var marginSystemDef = {
    margin: { themeScope: 'spacing', getCSS: function (v) { return ({ margin: v }); } },
    m: { themeScope: 'spacing', getCSS: function (v) { return ({ margin: v }); } },
    mt: { themeScope: 'spacing', getCSS: function (v) { return ({ marginTop: v }); } },
    mr: { themeScope: 'spacing', getCSS: function (v) { return ({ marginRight: v }); } },
    mb: { themeScope: 'spacing', getCSS: function (v) { return ({ marginBottom: v }); } },
    ml: { themeScope: 'spacing', getCSS: function (v) { return ({ marginLeft: v }); } },
    mx: { themeScope: 'spacing', getCSS: function (v) { return ({ marginLeft: v, marginRight: v }); } },
    my: { themeScope: 'spacing', getCSS: function (v) { return ({ marginTop: v, marginBottom: v }); } },
};

var typographySystemDef = {
    fontFamily: { themeScope: 'fontFamily', getCSS: function (v) { return ({ fontFamily: v }); } },
    fontSize: { themeScope: 'fontSize', getCSS: function (v) { return ({ fontSize: v }); } },
    fontWeight: { themeScope: 'fontWeight', getCSS: function (v) { return ({ fontWeight: v }); } },
    lineHeight: { themeScope: 'lineHeight', getCSS: function (v) { return ({ lineHeight: v }); } },
    letterSpacing: { themeScope: 'letterSpacing', getCSS: function (v) { return ({ letterSpacing: v }); } },
    textOverflow: { themeScope: null, getCSS: function (v) { return ({ textOverflow: v }); } },
    whiteSpace: { themeScope: null, getCSS: function (v) { return ({ whiteSpace: v }); } },
    verticalAlign: { themeScope: null, getCSS: function (v) { return ({ verticalAlign: v }); } },
    textTransform: { themeScope: null, getCSS: function (v) { return ({ textTransform: v }); } },
};

var colorSystemDef = {
    backgroundColor: { themeScope: 'color', getCSS: function (v) { return ({ backgroundColor: v }); } },
    bg: { themeScope: 'color', getCSS: function (v) { return ({ backgroundColor: v }); } },
    color: { themeScope: 'color', getCSS: function (v) { return ({ color: v }); } },
};

var borderSystemDef = {
    borderStyle: { themeScope: null, getCSS: function (v) { return ({ borderStyle: v }); } },
    bs: { themeScope: null, getCSS: function (v) { return ({ borderStyle: v }); } },
    borderWidth: { themeScope: 'width', getCSS: function (v) { return ({ borderWidth: v }); } },
    bw: { themeScope: 'width', getCSS: function (v) { return ({ borderWidth: v }); } },
    borderColor: { themeScope: 'color', getCSS: function (v) { return ({ borderColor: v }); } },
    bc: { themeScope: 'color', getCSS: function (v) { return ({ borderColor: v }); } },
    borderRadius: { themeScope: 'radii', getCSS: function (v) { return ({ borderRadius: v }); } },
    br: { themeScope: 'radii', getCSS: function (v) { return ({ borderRadius: v }); } },
    borderTopStyle: { themeScope: null, getCSS: function (v) { return ({ borderTopStyle: v }); } },
    bts: { themeScope: null, getCSS: function (v) { return ({ borderTopStyle: v }); } },
    borderTopWidth: { themeScope: 'width', getCSS: function (v) { return ({ borderTopWidth: v }); } },
    btw: { themeScope: 'width', getCSS: function (v) { return ({ borderTopWidth: v }); } },
    borderTopColor: { themeScope: 'color', getCSS: function (v) { return ({ borderTopColor: v }); } },
    btc: { themeScope: 'color', getCSS: function (v) { return ({ borderTopColor: v }); } },
    borderBottomStyle: { themeScope: null, getCSS: function (v) { return ({ borderBottomStyle: v }); } },
    bbs: { themeScope: null, getCSS: function (v) { return ({ borderBottomStyle: v }); } },
    borderBottomWidth: { themeScope: 'width', getCSS: function (v) { return ({ borderBottomWidth: v }); } },
    bbw: { themeScope: 'width', getCSS: function (v) { return ({ borderBottomWidth: v }); } },
    borderBottomColor: { themeScope: 'color', getCSS: function (v) { return ({ borderBottomColor: v }); } },
    bbc: { themeScope: 'color', getCSS: function (v) { return ({ borderBottomColor: v }); } },
    borderLeftStyle: { themeScope: null, getCSS: function (v) { return ({ borderLeftStyle: v }); } },
    bls: { themeScope: null, getCSS: function (v) { return ({ borderLeftStyle: v }); } },
    borderLeftWidth: { themeScope: 'width', getCSS: function (v) { return ({ borderLeftWidth: v }); } },
    blw: { themeScope: 'width', getCSS: function (v) { return ({ borderLeftWidth: v }); } },
    borderLeftColor: { themeScope: 'color', getCSS: function (v) { return ({ borderLeftColor: v }); } },
    blc: { themeScope: 'color', getCSS: function (v) { return ({ borderLeftColor: v }); } },
    borderRightStyle: { themeScope: null, getCSS: function (v) { return ({ borderRightStyle: v }); } },
    brs: { themeScope: null, getCSS: function (v) { return ({ borderRightStyle: v }); } },
    borderRightWidth: { themeScope: 'width', getCSS: function (v) { return ({ borderRightWidth: v }); } },
    brw: { themeScope: 'width', getCSS: function (v) { return ({ borderRightWidth: v }); } },
    borderRightColor: { themeScope: 'color', getCSS: function (v) { return ({ borderRightColor: v }); } },
    brc: { themeScope: 'color', getCSS: function (v) { return ({ borderRightColor: v }); } },
    borderTopLeftRadius: { themeScope: 'radii', getCSS: function (v) { return ({ borderTopLeftRadius: v }); } },
    btlr: { themeScope: 'radii', getCSS: function (v) { return ({ borderTopLeftRadius: v }); } },
    borderTopRightRadius: { themeScope: 'radii', getCSS: function (v) { return ({ borderTopRightRadius: v }); } },
    btrr: { themeScope: 'radii', getCSS: function (v) { return ({ borderTopRightRadius: v }); } },
    borderBottomLeftRadius: { themeScope: 'radii', getCSS: function (v) { return ({ borderBottomLeftRadius: v }); } },
    bblr: { themeScope: 'radii', getCSS: function (v) { return ({ borderBottomLeftRadius: v }); } },
    borderBottomRghtRadius: { themeScope: 'radii', getCSS: function (v) { return ({ borderBottomRightRadius: v }); } },
    bbrr: { themeScope: 'radii', getCSS: function (v) { return ({ borderBottomRightRadius: v }); } },
};

var flexSystemDef = {
    flexDirection: { themeScope: null, getCSS: function (v) { return ({ flexDirection: v }); } },
    flexWrap: { themeScope: null, getCSS: function (v) { return ({ flexWrap: v }); } },
    flexFlow: { themeScope: null, getCSS: function (v) { return ({ flexFlow: v }); } },
    justifyContent: { themeScope: null, getCSS: function (v) { return ({ justifyContent: v }); } },
    alignItems: { themeScope: null, getCSS: function (v) { return ({ alignItems: v }); } },
    alignContent: { themeScope: null, getCSS: function (v) { return ({ alignContent: v }); } },
    flexGrow: { themeScope: null, getCSS: function (v) { return ({ flexGrow: v }); } },
    flexShrink: { themeScope: null, getCSS: function (v) { return ({ flexShrink: v }); } },
    flexBasis: { themeScope: null, getCSS: function (v) { return ({ flexBasis: v }); } },
    flex: { themeScope: null, getCSS: function (v) { return ({ flex: v }); } },
    alignSelf: { themeScope: null, getCSS: function (v) { return ({ alignSelf: v }); } },
};

var gridSystemDef = {
    gridTemplateColumns: { themeScope: null, getCSS: function (v) { return ({ gridTemplateColumns: v }); } },
    gridTemplateRows: { themeScope: null, getCSS: function (v) { return ({ gridTemplateRows: v }); } },
    gridTemplateAreas: { themeScope: null, getCSS: function (v) { return ({ gridTemplateAreas: v }); } },
    columnGap: { themeScope: 'spacing', getCSS: function (v) { return ({ columnGap: v }); } },
    rowGap: { themeScope: 'spacing', getCSS: function (v) { return ({ rowGap: v }); } },
    gap: { themeScope: 'spacing', getCSS: function (v) { return ({ gap: v }); } },
    justifyItems: { themeScope: null, getCSS: function (v) { return ({ justifyItems: v }); } },
    gridColumnStart: { themeScope: null, getCSS: function (v) { return ({ gridColumnStart: v }); } },
    gridColumnEnd: { themeScope: null, getCSS: function (v) { return ({ gridColumnEnd: v }); } },
    gridRowStart: { themeScope: null, getCSS: function (v) { return ({ gridRowStart: v }); } },
    gridRowEnd: { themeScope: null, getCSS: function (v) { return ({ gridRowEnd: v }); } },
    gridArea: { themeScope: null, getCSS: function (v) { return ({ gridArea: v }); } },
    justifySelf: { themeScope: null, getCSS: function (v) { return ({ justifySelf: v }); } },
    placeSelf: { themeScope: null, getCSS: function (v) { return ({ placeSelf: v }); } },
};

var widthSystemDef = {
    width: { themeScope: 'width', getCSS: function (v) { return ({ width: v }); } },
    w: { themeScope: 'width', getCSS: function (v) { return ({ width: v }); } },
    minWidth: { themeScope: 'width', getCSS: function (v) { return ({ minWidth: v }); } },
    minW: { themeScope: 'width', getCSS: function (v) { return ({ minWidth: v }); } },
    maxWidth: { themeScope: 'width', getCSS: function (v) { return ({ maxWidth: v }); } },
    maxW: { themeScope: 'width', getCSS: function (v) { return ({ maxWidth: v }); } },
};

var heightSystemDef = {
    height: { themeScope: 'height', getCSS: function (v) { return ({ height: v }); } },
    h: { themeScope: 'height', getCSS: function (v) { return ({ height: v }); } },
    minHeight: { themeScope: 'height', getCSS: function (v) { return ({ minHeight: v }); } },
    minH: { themeScope: 'height', getCSS: function (v) { return ({ minHeight: v }); } },
    maxHeight: { themeScope: 'height', getCSS: function (v) { return ({ maxHeight: v }); } },
    maxH: { themeScope: 'height', getCSS: function (v) { return ({ maxHeight: v }); } },
};

var miscSystemDef = {
    display: { themeScope: null, getCSS: function (v) { return ({ display: v }); } },
    clipPath: { themeScope: null, getCSS: function (v) { return ({ clipPath: v }); } },
    listStyle: { themeScope: null, getCSS: function (v) { return ({ listStyle: v }); } },
    textDecoration: { themeScope: null, getCSS: function (v) { return ({ textDecoration: v }); } },
    resize: { themeScope: null, getCSS: function (v) { return ({ resize: v }); } },
    position: { themeScope: null, getCSS: function (v) { return ({ position: v }); } },
    top: { themeScope: null, getCSS: function (v) { return ({ top: v }); } },
    left: { themeScope: null, getCSS: function (v) { return ({ left: v }); } },
    bottom: { themeScope: null, getCSS: function (v) { return ({ bottom: v }); } },
    right: { themeScope: null, getCSS: function (v) { return ({ right: v }); } },
    zIndex: { themeScope: null, getCSS: function (v) { return ({ zIndex: v }); } },
    boxShadow: { themeScope: 'shadow', getCSS: function (v) { return ({ boxShadow: v }); } },
    outline: { themeScope: null, getCSS: function (v) { return ({ outline: v }); } },
    outlineColor: { themeScope: 'color', getCSS: function (v) { return ({ outlineColor: v }); } },
    overflow: { themeScope: 'color', getCSS: function (v) { return ({ overflow: v }); } },
    overflowX: { themeScope: 'color', getCSS: function (v) { return ({ overflowX: v }); } },
    overflowY: { themeScope: 'color', getCSS: function (v) { return ({ overflowY: v }); } },
};

var animationSystemDef = {
    animation: { themeScope: null, getCSS: function (v) { return ({ animation: v }); } },
    animationName: { themeScope: null, getCSS: function (v) { return ({ animationName: v }); } },
    animationDuration: { themeScope: null, getCSS: function (v) { return ({ animationDuration: v }); } },
    animationDelay: { themeScope: null, getCSS: function (v) { return ({ animationDelay: v }); } },
    animationIterationCount: { themeScope: null, getCSS: function (v) { return ({ animationIterationCount: v }); } },
    animationDirection: { themeScope: null, getCSS: function (v) { return ({ animationDirection: v }); } },
    animationTimingFunction: { themeScope: null, getCSS: function (v) { return ({ animationTimingFunction: v }); } },
    animationFillMode: { themeScope: null, getCSS: function (v) { return ({ animationFillMode: v }); } },
};

var transitionSystemDef = {
    transition: { themeScope: null, getCSS: function (v) { return ({ transition: v }); } },
    transitionDelay: { themeScope: null, getCSS: function (v) { return ({ transitionDelay: v }); } },
    transitionDuration: { themeScope: null, getCSS: function (v) { return ({ transitionDuration: v }); } },
    transitionProperty: { themeScope: null, getCSS: function (v) { return ({ transitionProperty: v }); } },
    transitionTimingFunction: { themeScope: null, getCSS: function (v) { return ({ transitionTimingFunction: v }); } },
};

var allSystemDefinitions = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, paddingSystemDef), marginSystemDef), typographySystemDef), colorSystemDef), borderSystemDef), flexSystemDef), gridSystemDef), widthSystemDef), heightSystemDef), miscSystemDef), animationSystemDef), transitionSystemDef);

var commonPresetMap = {
    hover: '&:hover',
    focus: '&:hover',
};
var useCss = function () {
    var theme = useTheme().theme;
    var breakPointKeys = objectKeys(theme.breakpoint);
    var breakPointMap = breakPointKeys.reduce(function (accum, key) {
        accum[key] = "@media(min-width: " + theme.breakpoint[key] + ")";
        return accum;
    }, {});
    var lookupMap = __assign(__assign({}, commonPresetMap), breakPointMap);
    // @ts-ignore
    var selector = function (preset) { return "" + (lookupMap[preset] || preset); };
    var css$1 = function (obj) { return css(buildCssObj(theme, allSystemDefinitions, obj)); };
    return { css: css$1, theme: theme, selector: selector, cx: cx, keyframes: keyframes };
};

var omit = function (propertyList, obj) {
    var keys = Object.keys(obj);
    return keys.reduce(function (accum, key) {
        if (!propertyList.includes(key))
            accum[key] = obj[key];
        return accum;
    }, {});
};

var omitProps$2 = __spreadArray(__spreadArray([], Object.keys(allSystemDefinitions)), ['customSelectors']);
var Box = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'div' : _b, children = _a.children, className = _a.className, props = __rest(_a, ["as", "children", "className"]);
    var css = useCss().css;
    var dynamicStyle = css(props);
    var newClassName = cx(dynamicStyle, className);
    return React__default['default'].createElement(as, __assign(__assign({}, omit(omitProps$2, props)), { className: newClassName }), children);
};
var getBoxWithTheme = function () { return Box; };

var systemDefinitions$1 = __assign(__assign({}, typographySystemDef), colorSystemDef);
var omitProps$1 = Object.keys(systemDefinitions$1);
var Heading = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'h1' : _b, variant = _a.variant, children = _a.children, className = _a.className, props = __rest(_a, ["as", "variant", "children", "className"]);
    var _c = useCss(), css = _c.css, theme = _c.theme;
    var defaultStyle = theme.components.Heading(variant);
    var dynamicStyle = css(props);
    var newClassName = cx(defaultStyle, dynamicStyle, className);
    return React__default['default'].createElement(as, __assign(__assign({}, omit(omitProps$1, props)), { className: newClassName }), children);
};
var getHeadingWithTheme = function () { return Heading; };

var systemDefinitions = __assign(__assign({}, typographySystemDef), colorSystemDef);
var omitProps = Object.keys(systemDefinitions);
var Text = function (_a) {
    var _b = _a.as, as = _b === void 0 ? 'p' : _b, variant = _a.variant, children = _a.children, className = _a.className, props = __rest(_a, ["as", "variant", "children", "className"]);
    var _c = useCss(), css = _c.css, theme = _c.theme;
    var defaultStyle = theme.components.Text(variant);
    var dynamicStyle = css(props);
    var newClassName = cx(defaultStyle, dynamicStyle, className);
    return React__default['default'].createElement(as, __assign(__assign({}, omit(omitProps, props)), { className: newClassName }), children);
};
var getTextWithTheme = function () { return Text; };

var injectGlobalStyle = function () { return injectGlobal(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        vertical-align: baseline;\n        box-sizing: border-box;\n    }\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    input, textarea {\n        box-sizing: border-box;\n    }\n"], ["\n    html, body, div, span, applet, object, iframe,\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n    a, abbr, acronym, address, big, cite, code,\n    del, dfn, em, img, ins, kbd, q, s, samp,\n    small, strike, strong, sub, sup, tt, var,\n    b, u, i, center,\n    dl, dt, dd, ol, ul, li,\n    fieldset, form, label, legend,\n    table, caption, tbody, tfoot, thead, tr, th, td,\n    article, aside, canvas, details, embed, \n    figure, figcaption, footer, header, hgroup, \n    menu, nav, output, ruby, section, summary,\n    time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        vertical-align: baseline;\n        box-sizing: border-box;\n    }\n    article, aside, details, figcaption, figure, \n    footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n    ol, ul {\n        list-style: none;\n    }\n    blockquote, q {\n        quotes: none;\n    }\n    blockquote:before, blockquote:after,\n    q:before, q:after {\n        content: '';\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    input, textarea {\n        box-sizing: border-box;\n    }\n"]))); };
var CssReset = function () {
    React.useEffect(function () {
        injectGlobalStyle();
    }, []);
    return null;
};
var templateObject_1;

exports.Box = Box;
exports.CssReset = CssReset;
exports.Heading = Heading;
exports.Text = Text;
exports.ThemeContext = ThemeContext;
exports.ThemeProvider = ThemeProvider;
exports.allSystemDefinitions = allSystemDefinitions;
exports.animationSystemDef = animationSystemDef;
exports.borderSystemDef = borderSystemDef;
exports.cache = cache;
exports.colorSystemDef = colorSystemDef;
exports.css = css;
exports.cx = cx;
exports.defaultTheme = defaultTheme;
exports.flexSystemDef = flexSystemDef;
exports.flush = flush;
exports.getBoxWithTheme = getBoxWithTheme;
exports.getHeadingWithTheme = getHeadingWithTheme;
exports.getRegisteredStyles = getRegisteredStyles;
exports.getTextWithTheme = getTextWithTheme;
exports.gridSystemDef = gridSystemDef;
exports.heightSystemDef = heightSystemDef;
exports.hydrate = hydrate;
exports.injectGlobal = injectGlobal;
exports.injectGlobalStyle = injectGlobalStyle;
exports.keyframes = keyframes;
exports.marginSystemDef = marginSystemDef;
exports.merge = merge;
exports.miscSystemDef = miscSystemDef;
exports.paddingSystemDef = paddingSystemDef;
exports.sheet = sheet;
exports.transitionSystemDef = transitionSystemDef;
exports.typographySystemDef = typographySystemDef;
exports.useCss = useCss;
exports.useTheme = useTheme;
exports.widthSystemDef = widthSystemDef;
//# sourceMappingURL=index.js.map
