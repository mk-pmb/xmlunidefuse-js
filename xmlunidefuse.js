/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var xdf = require('xmldefuse'), uvl = require('univeil'), xcr = uvl.xmlCharRef;

function xmlunidefuse(text) { return uvl(xdf(text), xcr); }
xmlunidefuse.apos = function (text) { return uvl(xdf.apos(text), xcr); };

xmlunidefuse.cdata = (function () {
  var CDStart = '<![CDATA[', CDEnd = ']]>',
    wrapIt = function (ch) { return CDEnd + xcr(ch) + CDStart; };
  return function (text) { return CDStart + uvl(text, wrapIt) + CDEnd; };
}());

module.exports = xmlunidefuse;
