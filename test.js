/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var xud = require("xmlunidefuse"), eq = require("assert").strictEqual, raw;

raw = "<​!-- <u snow=\"man'>☃</u -->";
eq(xud(raw),
  "&lt;&#x200B;!-- &lt;u&#xA0;snow=&quot;man&#39;&gt;☃&lt;/u&#x205F;--&gt;");
                                          // ^^^
eq(xud.apos(raw),
  "&lt;&#x200B;!-- &lt;u&#xA0;snow=&quot;man&apos;&gt;☃&lt;/u&#x205F;--&gt;");
                                          // ^^^^

//  CDATA encoding is implemented but not recommended,
//  because it makes the sneaky chars VERY visible.
eq(xud.cdata(raw),
  '<![CDATA[<]]>&#x200B;<![CDATA[!-- <u]]>&#xA0;<![CDATA[snow="ma' +
  "n'>☃</u]]>&#x205F;<![CDATA[-->]]>");
