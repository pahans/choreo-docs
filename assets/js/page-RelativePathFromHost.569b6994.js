(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{523:function(t,a,e){"use strict";e.r(a);var o=e(1),p=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"relative-path-from-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relative-path-from-host"}},[t._v("#")]),t._v(" Relative Path From Host")]),t._v(" "),e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("When creating a Choreo application with an API trigger, the Relative path from the host field allows you to specify the path used to trigger the Choreo application. It could also be used to pass path parameters to your application.")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/assets/img/path/image1.png"),alt:"Step 1"}}),t._v(" "),e("p",[t._v("Suppose you create a Choreo application named sample with an API trigger.")]),t._v(" "),e("p",[t._v("Once you deploy the application, you will receive a hostname as follows.\nhttps://sample-username.choreoapps.dev")]),t._v(" "),e("p",[t._v("The URL that you need to invoke to trigger the application changes as follows based on the Relative path from the host field that you specify.")]),t._v(" "),e("h3",{attrs:{id:"empty-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#empty-path"}},[t._v("#")]),t._v(" Empty path")]),t._v(" "),e("p",[t._v("If you leave this field blank, invoking the hostname triggers the Choreo application.")]),t._v(" "),e("p",[t._v("E.g.\nRelative path from host: empty\nTrigger URL: https://sample-username.choreoapps.dev")]),t._v(" "),e("h3",{attrs:{id:"single-path"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-path"}},[t._v("#")]),t._v(" Single path")]),t._v(" "),e("p",[t._v("If you provide a single path for this field, you need to append it to the hostname to invoke your application.")]),t._v(" "),e("p",[t._v("E.g.\nRelative path from host: /path1\nTrigger URL: https://sample-username.choreoapps.dev/path1")]),t._v(" "),e("h3",{attrs:{id:"multiple-path-strings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiple-path-strings"}},[t._v("#")]),t._v(" Multiple path Strings")]),t._v(" "),e("p",[t._v("You could also provide multiple paths for this field. If you do so, you need to append them to the hostname to invoke your application.")]),t._v(" "),e("p",[t._v("E.g.\nRelative path from host: /path1/path2/path3\nTrigger URL: https://sample-username.choreoapps.dev/path1/path2/path3")]),t._v(" "),e("h3",{attrs:{id:"path-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[t._v("#")]),t._v(" Path Parameters")]),t._v(" "),e("p",[t._v("When a path parameter is specified, it could be read from within your Choreo application. This allows you to read values provided within the path")]),t._v(" "),e("p",[t._v("Format: [<data type> <parameter name>]")]),t._v(" "),e("p",[t._v("E.g.\nRelative path from host: /[int date]/[string day]\nTrigger URL: https://sample-username.choreoapps.dev/8/monday")]),t._v(" "),e("p",[t._v("This allows you to read the value of date; “8” and day; “Monday” within your Choreo application")])])}),[],!1,null,null,null);a.default=p.exports}}]);