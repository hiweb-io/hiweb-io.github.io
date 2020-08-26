(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{268:function(t,s,a){"use strict";a.r(s);var r=a(28),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"order-api-reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order-api-reference"}},[t._v("#")]),t._v(" Order API Reference")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Endpoint:")]),t._v(" "),a("p",[a("b",[t._v("https://[client].hiweb.io/api/orders")])])]),t._v(" "),a("p",[t._v("Order resource object:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orders"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(string)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item_count"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"phone"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ip"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reference"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"note"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payment_status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string|in:pending,authorized,partially-paid,paid,partially-refunded,refunded,voided"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fulfillment_status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string|in:pending,processing,partial-processing,success,partial-success,failure,partial-failure,cancelled,error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subtotal_price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_discount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shipping_fee"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Float"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"discount_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string|uuid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"discount_rule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"array"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"total_grams"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" (float)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"user_agent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string|datetime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string|datetime"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relationships"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fulfillments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Fulfillment Resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"order_items"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Order Item Resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"transactions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Array "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Transaction Resources"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shipping_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object (Address Resource)\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"billing_address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object (Address Resource)\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"shipping"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object (Shipping Resource)\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cart"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object (Cart Resource)\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Related resources: "),a("RouterLink",{attrs:{to:"/api/resources/order-items.html"}},[t._v("Order Item")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/addresses.html"}},[t._v("Address")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/transactions.html"}},[t._v("Transaction")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/fulfillments.html"}},[t._v("Fulfillment")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/carts.html"}},[t._v("Cart")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/discounts.html"}},[t._v("Discount")]),t._v(", "),a("RouterLink",{attrs:{to:"/api/resources/shippings.html"}},[t._v("Shipping")])],1),t._v(" "),a("ul",[a("li",[t._v("Note: "),a("code",[t._v("shipping")]),t._v(" and "),a("code",[t._v("cart")]),t._v(" relationships are only avaiable for getting a single order request.")])]),t._v(" "),a("h2",{attrs:{id:"writable-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writable-fields"}},[t._v("#")]),t._v(" Writable fields")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field name")]),t._v(" "),a("th",[t._v("Creating")]),t._v(" "),a("th",[t._v("Updating")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[t._v("string|email|max:255")]),t._v(" "),a("td",[t._v("string|email|max:255")])]),t._v(" "),a("tr",[a("td",[t._v("phone")]),t._v(" "),a("td",[t._v("string|max:30")]),t._v(" "),a("td",[t._v("string|max:30")])]),t._v(" "),a("tr",[a("td",[t._v("reference")]),t._v(" "),a("td",[t._v("string|max:255")]),t._v(" "),a("td",[t._v("string|max:255")])]),t._v(" "),a("tr",[a("td",[t._v("note")]),t._v(" "),a("td",[t._v("string|max:20000")]),t._v(" "),a("td",[t._v("string|max:20000")])]),t._v(" "),a("tr",[a("td",[t._v("shipping_fee")]),t._v(" "),a("td",[t._v("float|min:0")]),t._v(" "),a("td",[t._v("float|min:0")])]),t._v(" "),a("tr",[a("td",[t._v("send_notification")]),t._v(" "),a("td",[t._v("boolean")]),t._v(" "),a("td",[t._v("boolean")])])])]),t._v(" "),a("h2",{attrs:{id:"writable-relationships"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writable-relationships"}},[t._v("#")]),t._v(" Writable relationships")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Relationship name")]),t._v(" "),a("th",[t._v("Relationship resource type")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Creating")]),t._v(" "),a("th",[t._v("Updating")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cart")]),t._v(" "),a("td",[t._v("carts")]),t._v(" "),a("td",[t._v("To-one")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("shipping_address")]),t._v(" "),a("td",[t._v("addresses")]),t._v(" "),a("td",[t._v("To-one")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("billing_address")]),t._v(" "),a("td",[t._v("addresses")]),t._v(" "),a("td",[t._v("To-one")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")])]),t._v(" "),a("tr",[a("td",[t._v("shipping")]),t._v(" "),a("td",[t._v("shippings")]),t._v(" "),a("td",[t._v("To-one")]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("Yes")])])])]),t._v(" "),a("h2",{attrs:{id:"sortable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sortable"}},[t._v("#")]),t._v(" Sortable")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Field name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("number")])]),t._v(" "),a("tr",[a("td",[t._v("reference")])]),t._v(" "),a("tr",[a("td",[t._v("payment_status")])]),t._v(" "),a("tr",[a("td",[t._v("fulfillment_status")])]),t._v(" "),a("tr",[a("td",[t._v("created_at")])]),t._v(" "),a("tr",[a("td",[t._v("updated_at")])])])]),t._v(" "),a("h2",{attrs:{id:"filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filters"}},[t._v("#")]),t._v(" Filters")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Filter name")]),t._v(" "),a("th",[t._v("Detail")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("number")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("cart_id")]),t._v(" "),a("td",[t._v("string|uuid")])]),t._v(" "),a("tr",[a("td",[t._v("reference")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("payment_status")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("fulfillment_status")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("created_at")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("updated_at")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("search")]),t._v(" "),a("td",[t._v("Full text search")])]),t._v(" "),a("tr",[a("td",[t._v("ids")]),t._v(" "),a("td",[t._v("Filter by order ids")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);