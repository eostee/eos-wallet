webpackJsonp([18],{MqAs:function(e,t){},"UEs/":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),o=r.n(n),a=r("woOf"),s=r.n(a),i=r("NYxO"),l=r("VSB1"),c={name:"delegatebw",data:function(){return{form:{from:"",receiver:"",stake_net_quantity:"",stake_cpu_quantity:"",transfer:0},rules:{from:{required:!0,message:"请选择账户名",trigger:"change"},receiver:{required:!0,validator:function(e,t,r){""===t?r(new Error("请输入账户名")):/^[1-5a-z]+$/g.test(t)?r():r(new Error("名字只能包含 1-5 a-z ！"))},trigger:"blur"},stake_net_quantity:{required:!0,message:"请输入抵押数量，例:10.0000 EOS",trigger:"blur"},stake_cpu_quantity:{required:!0,message:"请输入抵押数量，例:10.0000 EOS",trigger:"blur"},transfer:{required:!0,message:"请选择",trigger:"change"}},eosmonitorTransaction:"https://eosmonitor.io/txn",eosmonitorAccounts:"https://eosmonitor.io/accounts",eosmonitorAccount:"https://eosmonitor.io/account"}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return t.$message.warning("填写有误"),console.log("error submit!!"),!1;t.openFullScreenLoading(),t.delegatebw()})},network:function(){var e=s()({keyProvider:this.privateKey},this.eosConfig);return this.$eosjs(e)},delegatebw:function(){var e=this;this.network().delegatebw(this.form).then(function(t){var r=t.transaction_id;e.loading.close(),e.$notify({title:"抵押成功",message:'\n            <p>接下来可以</p>\n            <a href="'+e.eosmonitorTransaction+"/"+r+'" target="_blank">前往查看浏览器操作详情<a>\n            ',duration:4e3,type:"success",dangerouslyUseHTMLString:!0})}).catch(function(t){e.$message.error(Object(l.a)(t)),e.loading.close(),e.$notify({title:"抵押失败",message:'\n            <p>可能的原因</p>\n            <ol>\n              <li>接收账户不存在</li>\n              <li>账户余额不足</li>\n            </ol>\n            <br>\n            前往查看账户余额： <a href="'+e.eosmonitorAccount+"/"+e.form.from+'" target="_blank">'+e.form.from+'<a>\n            <br>\n            前往查看账户是否存在：<a href="'+e.eosmonitorAccounts+'" target="_blank">'+e.form.receiver+"<a>\n            <br>\n            ",duration:4e3,type:"error",dangerouslyUseHTMLString:!0})})},openFullScreenLoading:function(){this.loading=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})}},computed:o()({},Object(i.c)({privateKey:function(e){return e.key.priKeys},accountNames:function(e){return e.accountNames},eosConfig:function(e){return e.eosConfig}}))},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"container"},[r("el-col",{attrs:{xs:24,sm:22,lg:14}},[r("el-card",[r("h3",[e._v("抵押EOS")]),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"账户",prop:"from"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择账户"},model:{value:e.form.from,callback:function(t){e.$set(e.form,"from",t)},expression:"form.from"}},e._l(e.accountNames,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"接收账户",prop:"receiver"}},[r("el-input",{attrs:{maxlength:"12",placeholder:"字符范围 1-5 a-z"},model:{value:e.form.receiver,callback:function(t){e.$set(e.form,"receiver",t)},expression:"form.receiver"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"抵押net数量 -- 例: 10.0000 EOS",prop:"stake_net_quantity"}},[r("el-input",{attrs:{placeholder:"EOS网络的NET"},model:{value:e.form.stake_net_quantity,callback:function(t){e.$set(e.form,"stake_net_quantity",t)},expression:"form.stake_net_quantity"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"抵押cpu数量 -- 例: 10.0000 EOS",prop:"stake_cpu_quantity"}},[r("el-input",{attrs:{placeholder:"EOS网络的CPU"},model:{value:e.form.stake_cpu_quantity,callback:function(t){e.$set(e.form,"stake_cpu_quantity",t)},expression:"form.stake_cpu_quantity"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"transfer"}},[r("el-radio",{attrs:{label:1},model:{value:e.form.transfer,callback:function(t){e.$set(e.form,"transfer",t)},expression:"form.transfer"}},[e._v("true")]),e._v(" "),r("el-radio",{attrs:{label:0},model:{value:e.form.transfer,callback:functi
on(t){e.$set(e.form,"transfer",t)},expression:"form.transfer"}},[e._v("false")]),e._v(" "),r("span",[e._v("( 这一项设置为 true 时，抵押会转给账户账号 )")])],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("form")}}},[e._v("确定抵押")])],1)],1)],1)],1),e._v(" "),r("el-col",{staticClass:"aside-spaceing",attrs:{xs:24,sm:22,lg:8}},[r("el-card",{staticStyle:{color:"#909399"}},[r("h3",{staticStyle:{color:"#2c3e50"}},[e._v("提示：")]),e._v(" "),r("ol",[r("li",[e._v("账号格式 1-5 a-z")]),e._v(" "),r("li",[e._v("代币数量格式 数量+空格+符号")]),e._v(" "),r("li",[e._v("代币数量需保留四位小数")])])])],1)],1)},staticRenderFns:[]};var f=r("VU/8")(c,u,!1,function(e){r("MqAs")},"data-v-2f4e95d3",null);t.default=f.exports}});
//# sourceMappingURL=18.dcb037c18d8f46ce2ad9.js.map
