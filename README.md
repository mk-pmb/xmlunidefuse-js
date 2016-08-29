
xmlunidefuse
============
Encode the [predefined XML entities][xml-predent] (amp, lt, gt, apos, quot)
and some additional, easily overlooked Unicode characters.
Opt-out [CharRef][xml-charref] 39 for HTML ([Why?][why-opt-out]).

Usage
-----
From [test.js](test.js):
```javascript
var xud = require("xmlunidefuse"), eq = require("assert").strictEqual,
  raw = "<​!-- <u snow=\"man'>☃</u -->";

eq(xud(raw),        //  HTML compat mode:    ...
  "&lt;&#x200B;!-- &lt;u&#xA0;snow=&quot;man&#39;&gt;☃&lt;/u&#x205F;--&gt;");

eq(xud.apos(raw),   //  apos opt-in:         ....
  "&lt;&#x200B;!-- &lt;u&#xA0;snow=&quot;man&apos;&gt;☃&lt;/u&#x205F;--&gt;");

//  CDATA encoding is implemented but not recommended,
//  because it makes the sneaky chars VERY visible.
eq(xud.cdata(raw),
  '<![CDATA[<]]>&#x200B;<![CDATA[!-- <u]]>&#xA0;<![CDATA[snow="ma' +
  "n'>☃</u]]>&#x205F;<![CDATA[-->]]>");
```




Related
-------
  * [univeil](https://www.npmjs.com/package/univeil):
    Unveil sneaky Unicode characters.
  * [xmldefuse](https://www.npmjs.com/package/xmldefuse):
    Encode only the predefined XML entities.
  * [xmldecode](https://www.npmjs.com/package/xmldecode):
    Decode the predefined XML entities, CharRefs and CDATA sections.


  [why-opt-out]: https://www.npmjs.com/package/xmldefuse#why-is-apos-opt-in
  [xml-charref]: https://www.w3.org/TR/REC-xml/#NT-CharRef
  [xml-predent]: https://www.w3.org/TR/REC-xml/#sec-predefined-ent


License
-------
ISC
