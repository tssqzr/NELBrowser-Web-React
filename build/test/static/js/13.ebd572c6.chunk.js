webpackJsonp([13],{318:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,i=n(0),o=(n.n(i),n(325)),r=n(326),l=n(334),p=n(358),s=(n.n(p),n(18)),A=n(98),c=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),b=this&&this.__decorate||function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},d=this&&this.__awaiter||function(t,e,n,a){return new(n||(n=Promise))(function(i,o){function r(t){try{p(a.next(t))}catch(t){o(t)}}function l(t){try{p(a.throw(t))}catch(t){o(t)}}function p(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(r,l)}p((a=a.apply(t,e||[])).next())})},m=this&&this.__generator||function(t,e){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=e.call(t,r)}catch(t){o=[6,t],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={vinList:[],outList:[]},e.intrl=e.props.intl.messages,e.transVTableTh=[{name:e.intrl.tableTh.address,key:"address"},{name:e.intrl.tableTh.asset,key:"value"}],e.nep5TransTableTh=[{name:e.intrl.tableTh.asset,key:"asset"},{name:e.intrl.tableTh.from,key:"from"},{name:e.intrl.tableTh.to,key:"to"},{name:e.intrl.tableTh.value,key:"value"}],e.getTransactionInfo=function(t){return e.props.transaction.getTransInfo(t)},e.onGoBack=function(){e.props.history.push("/transactions/")},e.goBlockInfo=function(t){e.props.history.push("/block/"+t)},e.doVinVoutList=function(){if(e.props.transaction.tranInfo){if(0!==e.props.transaction.tranInfo.vin.length){var t=e.props.transaction.tranInfo.vin.map(function(t){return{address:t.address,value:t.value+" "+t.asset}});e.setState({vinList:t})}if(0!==e.props.transaction.tranInfo.vout.length){var n=e.props.transaction.tranInfo.vout.map(function(t){return{address:t.address,value:t.value+" "+t.asset}});e.setState({outList:n})}}},e.getNep5Name=function(t){return d(e,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:return[4,this.props.transaction.getNep5Info(t)];case 1:return e.sent(),[2,this.props.transaction.nep5Info?this.props.transaction.nep5Info.symbol:""]}})})},e.renderVinVout=function(t,e){return"address"===e?i.createElement("span",{className:"addr-text"},t):null},e.renderNep5Trans=function(t,n){return"asset"===n?i.createElement("span",null,i.createElement("a",{href:"javascript:;",onClick:e.goNep5Info.bind(e,t.assetid)},t.symbol)):"from"===n?i.createElement("span",{className:"addr-text"},t):"to"===n?i.createElement("span",{className:"addr-text"},t):null},e.goNep5Info=function(t){e.props.history.push("/nep5/"+t)},e}return c(e,t),e.prototype.componentDidMount=function(){return d(this,void 0,void 0,function(){var t;return m(this,function(e){switch(e.label){case 0:return t=this.props.match.params,[4,this.getTransactionInfo(t.txid)];case 1:return e.sent(),this.doVinVoutList(),[4,this.props.transaction.getNep5Transbytxid(t.txid)];case 2:return e.sent(),[2]}})})},e.prototype.componentWillUnmount=function(){this.props.transaction.transList=[],this.props.transaction.transListCount=0},e.prototype.render=function(){return this.props.transaction.tranInfo?i.createElement("div",{className:"transactioninfo-page"},i.createElement("div",{className:"goback-wrapper"},i.createElement("span",{className:"goback-text",onClick:this.onGoBack},"<<  ",this.intrl.btn.goback)),i.createElement("div",{className:"info-content"},i.createElement(o.a,{text:this.intrl.transaction.titleinfo1,isInfoTitle:!0}),i.createElement("div",{className:"info-list"},i.createElement("ul",null,i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.txid),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.txid)),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.type),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.type.replace("Transaction",""))),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.netFee),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.net_fee," GAS")),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.sysFee),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.sys_fee," GAS")),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.size),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.size," bytes")),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.height),i.createElement("span",{className:"type-content"},i.createElement("a",{href:"javascript:;",onClick:this.goBlockInfo.bind(this,this.props.transaction.tranInfo.blockindex)},this.props.transaction.tranInfo&&this.props.transaction.tranInfo.blockindex))),i.createElement("li",null,i.createElement("span",{className:"type-name"},this.intrl.transaction.time),i.createElement("span",{className:"type-content"},this.props.transaction.tranInfo&&l.a("yyyy/MM/dd | hh:mm:ss",this.props.transaction.tranInfo.blocktime.toString(),this.props.intl.locale)))))),i.createElement("div",{className:"transactioninfo-input-output"},i.createElement("div",{className:"input-wrapper"},i.createElement(o.a,{text:this.intrl.transaction.input}),i.createElement(r.a,{tableTh:this.transVTableTh,tableData:this.state.vinList})),i.createElement("div",{className:"output-wrapper"},i.createElement(o.a,{text:this.intrl.transaction.output}),i.createElement(r.a,{tableTh:this.transVTableTh,tableData:this.state.outList}))),i.createElement("div",{className:"nep5-trans-wrapper"},i.createElement(o.a,{text:this.intrl.transaction.nep5}),i.createElement("div",{className:"nep5-trans-table"},i.createElement(r.a,{tableTh:this.nep5TransTableTh,tableData:this.props.transaction.nep5Trans,render:this.renderNep5Trans})))):null},e=b([Object(s.b)("transaction"),s.c],e)}(i.Component);e.default=Object(A.c)(u)},325:function(t,e,n){"use strict";var a,i=n(0),o=(n.n(i),n(327)),r=(n.n(o),n(54)),l=n.n(r),p=this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return p(e,t),e.prototype.render=function(){var t=l()("title-text-wrapper",{"info-title":!!this.props.isInfoTitle&&this.props.isInfoTitle,"table-title":!!this.props.isTableTitle&&this.props.isTableTitle});return i.createElement("div",{className:t},i.createElement("h3",null,this.props.img&&i.createElement("img",{src:this.props.img,alt:""}),this.props.text),!this.props.isInline&&i.createElement("div",{className:"right"},this.props.children),this.props.isInline&&i.createElement("div",{className:"inline-select"},this.props.children))},e}(i.Component);e.a=s},326:function(t,e,n){"use strict";var a,i=n(0),o=(n.n(i),n(18)),r=n(54),l=n.n(r),p=n(98),s=n(329),A=(n.n(s),this&&this.__extends||(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)})),c=this&&this.__decorate||function(t,e,n,a){var i,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,a);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},b=function(t){function e(e){var n=t.call(this,e)||this;return n.tableThKeys=n.props.tableTh.map(function(t){return{key:t.key,name:t.name}}),n}return A(e,t),e.prototype.render=function(){var t,e=this,n="table-wrap";return this.props.className&&(n=l()("table-wrap",((t={})[this.props.className]=!!this.props.className,t))),this.props.tableData?i.createElement("div",{className:n},this.props.children,i.createElement("div",{className:"table-content"},i.createElement("div",{className:"table-th"},i.createElement("ul",null,this.props.tableTh.map(function(t,e){return i.createElement("li",{key:e},t.name)}))),0===this.props.tableData.length&&i.createElement("div",{className:"no-data-content"},this.props.intl.messages.tableTh.nodata),0!==this.props.tableData.length&&i.createElement("div",{className:"table-body"},i.createElement("ul",null,this.props.tableData.map(function(t,n){return i.createElement("li",{key:n},e.tableThKeys.map(function(n,a){if(!e.props.render)return i.createElement("span",{key:a},t[n.key]);var o=e.props.render(t[n.key],n.key,t);return o?i.createElement(i.Fragment,{key:a},o):i.createElement("span",{key:a},t[n.key])}))})))),i.createElement("div",{className:"mobile-table-content"},0===this.props.tableData.length&&i.createElement("div",{className:"table-body"},i.createElement("ul",null,i.createElement("li",null,this.props.tableTh.map(function(t,n){return i.createElement("div",{className:"table-line",key:n},i.createElement("span",{className:"line-title"},t.name),i.createElement("span",{className:"line-content"},e.props.intl.messages.tableTh.nodata))})))),0!==this.props.tableData.length&&i.createElement("div",{className:"table-body"},i.createElement("ul",null,this.props.tableData.map(function(t,n){return i.createElement("li",{key:n},e.tableThKeys.map(function(n,a){var o=e.props.render?e.props.render(t[n.key],n.key,t):null;return i.createElement("div",{className:"table-line",key:a},i.createElement("span",{className:"line-title"},n.name),i.createElement("span",{className:"line-content"},e.props.render&&o||t[n.key]))}))}))))):i.createElement("div",{className:n},this.props.children,i.createElement("div",{className:"table-content"},i.createElement("div",{className:"table-th"},i.createElement("ul",null,this.props.tableTh.map(function(t,e){return i.createElement("li",{key:e},t.name)}))),i.createElement("div",{className:"no-data-content"},this.props.intl.messages.tableTh.nodata)),i.createElement("div",{className:"mobile-table-content"},i.createElement("div",{className:"table-body"},i.createElement("ul",null,i.createElement("li",null,this.props.tableTh.map(function(t,n){return i.createElement("div",{className:"table-line",key:n},i.createElement("span",{className:"line-title"},t.name),i.createElement("span",{className:"line-content"},e.props.intl.messages.tableTh.nodata))}))))))},e=c([o.c],e)}(i.Component);e.a=Object(p.c)(b)},327:function(t,e,n){var a=n(328);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(308)(a,i);a.locals&&(t.exports=a.locals)},328:function(t,e,n){(t.exports=n(307)(!0)).push([t.i,".title-text-wrapper{padding-bottom:20px;position:relative}.title-text-wrapper img{width:20px;height:20px;margin-right:10px}.title-text-wrapper.table-title{padding:20px;border-bottom:3px solid #ececec;color:#333}.title-text-wrapper.table-title img{width:20px;height:20px;margin-right:10px}.title-text-wrapper h3{font-size:20px;display:inline-block;font-weight:500;font-family:NotoSansHans-Medium;margin-right:30px}.title-text-wrapper.info-title{color:#fff;background:#151a1e;padding:20px 30px;border-radius:3px 3px 0 0}.title-text-wrapper .right{float:right}.title-text-wrapper .inline-select{display:inline-block}.title-text-wrapper .inline-select .button-group{position:absolute;top:20px;right:20px}@media (max-width:768px){.title-text-wrapper{padding-bottom:15px}.title-text-wrapper.table-title{padding:20px 15px}.title-text-wrapper.info-title{padding:20px 10px}}","",{version:3,sources:["/Users/apple/demo/NELBrowser-Web-React/src/components/titletext/index.less"],names:[],mappings:"AAAA,oBACE,oBAAqB,AACrB,iBAAmB,CACpB,AACD,wBACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,gCACE,aAAc,AACd,gCAAiC,AACjC,UAAY,CACb,AACD,oCACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,uBACE,eAAgB,AAChB,qBAAsB,AACtB,gBAAiB,AACjB,gCAAiC,AACjC,iBAAmB,CACpB,AACD,+BACE,WAAY,AACZ,mBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC5B,AACD,2BACE,WAAa,CACd,AACD,mCACE,oBAAsB,CACvB,AACD,iDACE,kBAAmB,AACnB,SAAU,AACV,UAAY,CACb,AACD,yBACE,oBACE,mBAAqB,CACtB,AACD,gCACE,iBAAmB,CACpB,AACD,+BACE,iBAAmB,CACpB,CACF",file:"index.less",sourcesContent:[".title-text-wrapper {\n  padding-bottom: 20px;\n  position: relative;\n}\n.title-text-wrapper img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper.table-title {\n  padding: 20px;\n  border-bottom: 3px solid #ECECEC;\n  color: #333;\n}\n.title-text-wrapper.table-title img {\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n}\n.title-text-wrapper h3 {\n  font-size: 20px;\n  display: inline-block;\n  font-weight: 500;\n  font-family: NotoSansHans-Medium;\n  margin-right: 30px;\n}\n.title-text-wrapper.info-title {\n  color: #fff;\n  background: #151A1E;\n  padding: 20px 30px;\n  border-radius: 3px 3px 0 0;\n}\n.title-text-wrapper .right {\n  float: right;\n}\n.title-text-wrapper .inline-select {\n  display: inline-block;\n}\n.title-text-wrapper .inline-select .button-group {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n@media (max-width: 768px) {\n  .title-text-wrapper {\n    padding-bottom: 15px;\n  }\n  .title-text-wrapper.table-title {\n    padding: 20px 15px;\n  }\n  .title-text-wrapper.info-title {\n    padding: 20px 10px;\n  }\n}\n"],sourceRoot:""}])},329:function(t,e,n){var a=n(330);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(308)(a,i);a.locals&&(t.exports=a.locals)},330:function(t,e,n){(t.exports=n(307)(!0)).push([t.i,".table-wrap{background:#fff;border-radius:3px}.table-wrap .table-content{display:block}.table-wrap .table-content .no-data-content{text-align:center;height:54px;line-height:54px}.table-wrap .table-content .table-th{border-bottom:3px solid #ececec;padding:0 15px}.table-wrap .table-content .table-th ul{display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px 0}.table-wrap .table-content .table-th ul li{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;text-align:center;font-size:12px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-th ul li.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li{border-bottom:1px solid #ececec;padding:20px 0;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:54px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 15px}.table-wrap .table-content .table-body ul li span{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;font-size:14px;font-family:NotoSansHans-Regular}.table-wrap .table-content .table-body ul li span.img-text{text-align:left;text-indent:.2rem}.table-wrap .table-content .table-body ul li span.img-text-bg{text-align:left;text-indent:.95rem}.table-wrap .table-content .table-body ul li span.tran-img-text{text-align:left;text-indent:1rem}.table-wrap .table-content .table-body ul li span.addr-text{min-width:315px}.table-wrap .table-content .table-body ul li span.small-font{font-size:12px}.table-wrap .table-content .table-body ul li span.addr-utxo-text{min-width:540px}.table-wrap .table-content .table-body ul li span.nns-peirod{color:#2dde4f}.table-wrap .table-content .table-body ul li span.nns-overtime{color:#fb985f}.table-wrap .table-content .table-body ul li span a{color:#2dde4f}.table-wrap .table-content .table-body ul li span a:hover{color:#6bec83;text-decoration:underline}.table-wrap .table-content .table-body ul li span img{width:20px;height:20px;vertical-align:middle;margin-right:10px;border:none}.table-wrap .table-content .table-body ul li:last-child{border-bottom:none}.table-wrap .mobile-table-content{display:none}@media (max-width:768px){.table-wrap .table-content{display:none}.table-wrap .mobile-table-content{display:block;margin-bottom:30px}.table-wrap .mobile-table-content .table-body ul li{padding:20px 10px;border-bottom:1px solid #ececec}.table-wrap .mobile-table-content .table-body ul li .table-line{font-size:12px;margin-bottom:20px}.table-wrap .mobile-table-content .table-body ul li .table-line .line-title{display:inline-block;vertical-align:middle;text-align:left;width:85px;color:#b2b2b2}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content{display:inline-block;vertical-align:middle;text-align:left;word-break:break-word;width:1.8rem}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content img{display:none}.table-wrap .mobile-table-content .table-body ul li .table-line .line-content .hint-img img{display:initial}.table-wrap .mobile-table-content .table-body ul li .table-line:last-child{margin-bottom:0}.table-wrap .mobile-table-content .table-body ul li:last-child{border-bottom:none}.table-wrap .mobile-table-content .table-body ul li span a{color:#2dde4f}}","",{version:3,sources:["/Users/apple/demo/NELBrowser-Web-React/src/components/Table/index.less"],names:[],mappings:"AAAA,YACE,gBAAoB,AACpB,iBAAmB,CACpB,AACD,2BACE,aAAe,CAChB,AACD,4CACE,kBAAmB,AACnB,YAAa,AACb,gBAAkB,CACnB,AACD,qCACE,gCAAiC,AACjC,cAAgB,CACjB,AACD,wCACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,cAAgB,CACjB,AACD,2CACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,kBAAmB,AACnB,eAAgB,AAChB,gCAAkC,CACnC,AACD,qDACE,eAAiB,CAClB,AACD,6CACE,gCAAiC,AACjC,eAAgB,AAChB,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,2BAA4B,AACxB,sBAAuB,AACnB,mBAAoB,AAC5B,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,cAAgB,CACjB,AACD,kDACE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,eAAgB,AAChB,gCAAkC,CACnC,AACD,2DACE,gBAAiB,AACjB,iBAAoB,CACrB,AACD,8DACE,gBAAiB,AACjB,kBAAqB,CACtB,AACD,gEACE,gBAAiB,AACjB,gBAAkB,CACnB,AACD,4DACE,eAAiB,CAClB,AACD,6DACE,cAAgB,CACjB,AACD,iEACE,eAAiB,CAClB,AACD,6DACE,aAAe,CAChB,AACD,+DACE,aAAe,CAChB,AACD,oDACE,aAAe,CAChB,AACD,0DACE,cAAe,AACf,yBAA2B,CAC5B,AACD,sDACE,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,kBAAmB,AACnB,WAAa,CACd,AACD,wDACE,kBAAoB,CACrB,AACD,kCACE,YAAc,CACf,AACD,yBACE,2BACE,YAAc,CACf,AACD,kCACE,cAAe,AACf,kBAAoB,CACrB,AACD,oDACE,kBAAmB,AACnB,+BAAiC,CAClC,AACD,gEACE,eAAgB,AAChB,kBAAoB,CACrB,AACD,4EACE,qBAAsB,AACtB,sBAAuB,AACvB,gBAAiB,AACjB,WAAY,AACZ,aAAe,CAChB,AACD,8EACE,qBAAsB,AACtB,sBAAuB,AACvB,gBAAiB,AACjB,sBAAuB,AACvB,YAAc,CACf,AACD,kFACE,YAAc,CACf,AACD,4FACE,eAAiB,CAClB,AACD,2EACE,eAAiB,CAClB,AACD,+DACE,kBAAoB,CACrB,AACD,2DACE,aAAe,CAChB,CACF",file:"index.less",sourcesContent:[".table-wrap {\n  background: #FFFFFF;\n  border-radius: 3px;\n}\n.table-wrap .table-content {\n  display: block;\n}\n.table-wrap .table-content .no-data-content {\n  text-align: center;\n  height: 54px;\n  line-height: 54px;\n}\n.table-wrap .table-content .table-th {\n  border-bottom: 3px solid #ECECEC;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-th ul {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 0;\n}\n.table-wrap .table-content .table-th ul li {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  text-align: center;\n  font-size: 12px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-th ul li.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li {\n  border-bottom: 1px solid #ECECEC;\n  padding: 20px 0;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 54px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 15px;\n}\n.table-wrap .table-content .table-body ul li span {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  font-size: 14px;\n  font-family: NotoSansHans-Regular;\n}\n.table-wrap .table-content .table-body ul li span.img-text {\n  text-align: left;\n  text-indent: 0.2rem;\n}\n.table-wrap .table-content .table-body ul li span.img-text-bg {\n  text-align: left;\n  text-indent: 0.95rem;\n}\n.table-wrap .table-content .table-body ul li span.tran-img-text {\n  text-align: left;\n  text-indent: 1rem;\n}\n.table-wrap .table-content .table-body ul li span.addr-text {\n  min-width: 315px;\n}\n.table-wrap .table-content .table-body ul li span.small-font {\n  font-size: 12px;\n}\n.table-wrap .table-content .table-body ul li span.addr-utxo-text {\n  min-width: 540px;\n}\n.table-wrap .table-content .table-body ul li span.nns-peirod {\n  color: #2DDE4F;\n}\n.table-wrap .table-content .table-body ul li span.nns-overtime {\n  color: #FB985F;\n}\n.table-wrap .table-content .table-body ul li span a {\n  color: #2DDE4F;\n}\n.table-wrap .table-content .table-body ul li span a:hover {\n  color: #6BEC83;\n  text-decoration: underline;\n}\n.table-wrap .table-content .table-body ul li span img {\n  width: 20px;\n  height: 20px;\n  vertical-align: middle;\n  margin-right: 10px;\n  border: none;\n}\n.table-wrap .table-content .table-body ul li:last-child {\n  border-bottom: none;\n}\n.table-wrap .mobile-table-content {\n  display: none;\n}\n@media (max-width: 768px) {\n  .table-wrap .table-content {\n    display: none;\n  }\n  .table-wrap .mobile-table-content {\n    display: block;\n    margin-bottom: 30px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li {\n    padding: 20px 10px;\n    border-bottom: 1px solid #ECECEC;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line {\n    font-size: 12px;\n    margin-bottom: 20px;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-title {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    width: 85px;\n    color: #B2B2B2;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content {\n    display: inline-block;\n    vertical-align: middle;\n    text-align: left;\n    word-break: break-word;\n    width: 1.8rem;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content img {\n    display: none;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line .line-content .hint-img img {\n    display: initial;\n  }\n  .table-wrap .mobile-table-content .table-body ul li .table-line:last-child {\n    margin-bottom: 0;\n  }\n  .table-wrap .mobile-table-content .table-body ul li:last-child {\n    border-bottom: none;\n  }\n  .table-wrap .mobile-table-content .table-body ul li span a {\n    color: #2DDE4F;\n  }\n}\n"],sourceRoot:""}])},334:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t,e,n){var a=i(e.toString()),o=new Date(a);if("en"===n){var r=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"),l=o.getUTCMonth(),p=o.getUTCDate().toString();1===p.length&&(p="0"+p);var s=o.getUTCHours().toString();1===s.length&&(s="0"+s);var A=o.getUTCMinutes().toString();1===A.length&&(A="0"+A);var c=o.getUTCSeconds().toString();return 1===c.length&&(c="0"+c),p+" "+r[l]+" "+o.getUTCFullYear()+" "+s+":"+A+":"+c+" GMT"}var b=function(t){return{"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()}}(o);for(var d in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length))),b)new RegExp("("+d+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?b[d]:("00"+b[d]).substr((""+b[d]).length)));return t},i=function(t){return 10===t.toString().length?1e3*parseInt(t.toString(),10):parseInt(t.toString(),10)}},358:function(t,e,n){var a=n(359);"string"===typeof a&&(a=[[t.i,a,""]]);var i={hmr:!1,transform:void 0};n(308)(a,i);a.locals&&(t.exports=a.locals)},359:function(t,e,n){(t.exports=n(307)(!0)).push([t.i,".transaction-page,.transactioninfo-page{width:10.88rem;min-width:1088px;padding:0 20px;margin:0 auto;margin-top:.8rem;margin-bottom:1rem}.transactioninfo-page .transactioninfo-input-output{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.transactioninfo-page .transactioninfo-input-output .input-wrapper,.transactioninfo-page .transactioninfo-input-output .output-wrapper{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;margin-bottom:50px}.transactioninfo-page .transactioninfo-input-output .input-wrapper .table-wrap,.transactioninfo-page .transactioninfo-input-output .output-wrapper .table-wrap{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5)}.transactioninfo-page .transactioninfo-input-output .input-wrapper{margin-right:20px}.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px}.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(2),.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(3){min-width:315px}.transaction-page .loading-wrapper{text-align:center}.transaction-page .transaction-table{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);border-radius:3px}@media screen and (max-width:768px){.transaction-page,.transactioninfo-page{width:100%;min-width:3.75rem;padding:0 20px;margin:0 auto;margin-top:.5rem;margin-bottom:1rem;-webkit-box-sizing:border-box;box-sizing:border-box}.transaction-page .inline-select,.transactioninfo-page .inline-select{margin-top:15px!important}.transaction-page .info-content .info-list ul li,.transactioninfo-page .info-content .info-list ul li{min-height:.54rem;height:auto;padding-top:.05rem;padding-bottom:.05rem;-webkit-box-sizing:border-box;box-sizing:border-box}.transaction-page .info-content .info-list ul li span.type-name,.transactioninfo-page .info-content .info-list ul li span.type-name{-webkit-flex-grow:0;-ms-flex-positive:0;flex-grow:0;width:1.1rem;min-width:1.1rem;text-indent:.15rem}.transaction-page .info-content .info-list ul li span.type-content,.transactioninfo-page .info-content .info-list ul li span.type-content{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;padding-right:.1rem}.transactioninfo-page .transactioninfo-input-output{display:block;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.transactioninfo-page .transactioninfo-input-output .input-wrapper,.transactioninfo-page .transactioninfo-input-output .output-wrapper{-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;margin-right:0;margin-bottom:50px}.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table,.transactioninfo-page .transactioninfo-input-output .input-wrapper .table-wrap,.transactioninfo-page .transactioninfo-input-output .output-wrapper .table-wrap{background:#fff;-webkit-box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5);box-shadow:0 2px 10px 0 hsla(0,0%,73%,.5)}.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table{border-radius:3px}.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(2),.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(3){min-width:315px}}","",{version:3,sources:["/Users/apple/demo/NELBrowser-Web-React/src/containers/transaction/index.less"],names:[],mappings:"AAAA,wCAEE,eAAgB,AAChB,iBAAkB,AAClB,eAAgB,AAChB,cAAe,AACf,iBAAmB,AACnB,kBAAoB,CACrB,AACD,oDACE,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,+BAAgC,AAC5B,qBAAsB,AAClB,sBAAwB,CACjC,AACD,uIAEE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,kBAAoB,CACrB,AACD,+JAEE,gBAAiB,AACjB,kDAA0D,AAClD,yCAAkD,CAC3D,AACD,mEACE,iBAAmB,CACpB,AACD,4DACE,gBAAiB,AACjB,kDAA0D,AAClD,0CAAkD,AAC1D,iBAAmB,CACpB,AACD,gLAEE,eAAiB,CAClB,AACD,mCACE,iBAAmB,CACpB,AACD,qCACE,gBAAiB,AACjB,kDAA0D,AAClD,0CAAkD,AAC1D,iBAAmB,CACpB,AACD,oCACE,wCAEE,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,iBAAmB,AACnB,mBAAoB,AACpB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,sEAEE,yBAA4B,CAC7B,AACD,sGAEE,kBAAoB,AACpB,YAAa,AACb,mBAAqB,AACrB,sBAAwB,AACxB,8BAA+B,AACvB,qBAAuB,CAChC,AACD,oIAEE,oBAAqB,AACjB,oBAAqB,AACjB,YAAa,AACrB,aAAc,AACd,iBAAkB,AAClB,kBAAqB,CACtB,AACD,0IAEE,sBAAuB,AACnB,oBAAqB,AACjB,cAAe,AACvB,mBAAsB,CACvB,AACD,oDACE,cAAe,AACf,uBAAwB,AACpB,mBAAoB,AAChB,cAAgB,CACzB,AACD,uIAEE,iBAAkB,AACd,aAAc,AACV,SAAU,AAClB,eAAgB,AAChB,kBAAoB,CACrB,AAOD,2NAJE,gBAAiB,AACjB,kDAA0D,AAClD,yCAAkD,CAO3D,AALD,4DAIE,iBAAmB,CACpB,AACD,gLAEE,eAAiB,CAClB,CACF",file:"index.less",sourcesContent:[".transaction-page,\n.transactioninfo-page {\n  width: 10.88rem;\n  min-width: 1088px;\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 0.8rem;\n  margin-bottom: 1rem;\n}\n.transactioninfo-page .transactioninfo-input-output {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.transactioninfo-page .transactioninfo-input-output .input-wrapper,\n.transactioninfo-page .transactioninfo-input-output .output-wrapper {\n  -webkit-flex: 1 1;\n      -ms-flex: 1 1;\n          flex: 1 1;\n  margin-bottom: 50px;\n}\n.transactioninfo-page .transactioninfo-input-output .input-wrapper .table-wrap,\n.transactioninfo-page .transactioninfo-input-output .output-wrapper .table-wrap {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n}\n.transactioninfo-page .transactioninfo-input-output .input-wrapper {\n  margin-right: 20px;\n}\n.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(2),\n.transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(3) {\n  min-width: 315px;\n}\n.transaction-page .loading-wrapper {\n  text-align: center;\n}\n.transaction-page .transaction-table {\n  background: #fff;\n  -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n          box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  border-radius: 3px;\n}\n@media screen and (max-width: 768px) {\n  .transaction-page,\n  .transactioninfo-page {\n    width: 100%;\n    min-width: 3.75rem;\n    padding: 0 20px;\n    margin: 0 auto;\n    margin-top: 0.5rem;\n    margin-bottom: 1rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  .transaction-page .inline-select,\n  .transactioninfo-page .inline-select {\n    margin-top: 15px !important;\n  }\n  .transaction-page .info-content .info-list ul li,\n  .transactioninfo-page .info-content .info-list ul li {\n    min-height: 0.54rem;\n    height: auto;\n    padding-top: 0.05rem;\n    padding-bottom: 0.05rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n  .transaction-page .info-content .info-list ul li span.type-name,\n  .transactioninfo-page .info-content .info-list ul li span.type-name {\n    -webkit-flex-grow: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    width: 1.1rem;\n    min-width: 1.1rem;\n    text-indent: 0.15rem;\n  }\n  .transaction-page .info-content .info-list ul li span.type-content,\n  .transactioninfo-page .info-content .info-list ul li span.type-content {\n    -webkit-flex-shrink: 0;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n    padding-right: 0.1rem;\n  }\n  .transactioninfo-page .transactioninfo-input-output {\n    display: block;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  .transactioninfo-page .transactioninfo-input-output .input-wrapper,\n  .transactioninfo-page .transactioninfo-input-output .output-wrapper {\n    -webkit-flex: 1 1;\n        -ms-flex: 1 1;\n            flex: 1 1;\n    margin-right: 0;\n    margin-bottom: 50px;\n  }\n  .transactioninfo-page .transactioninfo-input-output .input-wrapper .table-wrap,\n  .transactioninfo-page .transactioninfo-input-output .output-wrapper .table-wrap {\n    background: #fff;\n    -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n            box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n  }\n  .transactioninfo-page .nep5-trans-wrapper .nep5-trans-table {\n    background: #fff;\n    -webkit-box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n            box-shadow: 0 2px 10px 0 rgba(185, 185, 185, 0.5);\n    border-radius: 3px;\n  }\n  .transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(2),\n  .transactioninfo-page .nep5-trans-wrapper .nep5-trans-table .table-th li:nth-of-type(3) {\n    min-width: 315px;\n  }\n}\n"],sourceRoot:""}])}});