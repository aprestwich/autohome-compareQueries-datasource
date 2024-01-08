define(["lodash","moment","@grafana/data","app/plugins/sdk"],((e,t,r,i)=>(()=>{"use strict";var a={305:e=>{e.exports=r},735:e=>{e.exports=i},980:t=>{t.exports=e},283:e=>{e.exports=t}},n={};function s(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return a[e](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return(()=>{s.r(o),s.d(o,{ConfigCtrl:()=>h,Datasource:()=>l,QueryCtrl:()=>c});var e=s(980),t=s.n(e),r=s(283),i=s.n(r),a=s(305);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l{testDatasource(){return new Promise((function(e,t){e({status:"success",message:"Compare Query Source is working correctly",title:"Success"})}))}query(e){let r=this,i=t().groupBy(e.targets,(function(e){return void 0===e.datasource.uid?e.datasource:e.datasource.uid})),a=t().groupBy(e.targets,"refId"),n=[];return t().forEach(i,(function(i,s){let o=t().cloneDeep(e),l=r.datasourceSrv.get(s).then((function(t){if(t.meta.id===r.meta.id)return r._compareQuery(e,i,a,r);{o.targets=i;let e=t.query(o);return"function"==typeof e.toPromise?e.toPromise():e}}));n.push(l)})),this.$q.all(n).then((function(e){return{data:t().flatten(t().filter(t().map(e,(function(e){let r=e.data;return r&&(r=t().filter(e.data,(function(e){return!0!==e.hide}))),r})),(function(e){return null!=e})))}}))}_compareQuery(e,r,i,n){let s=[];return t().forEach(r,(function(r){let o=r.query;if(null===o||""===o||null===i[o])return;let l=t().cloneDeep(i[o][0]);if(l.hide=!1,l){let i=l.datasource;r.timeShifts&&r.timeShifts.length>0&&t().forEach(r.timeShifts,(function(o){let u,f,c=o.aliasType||"suffix",d=o.delimiter||"_",h=n.datasourceSrv.get(i).then((function(r){if(r.meta.id===n.meta.id)return{data:[]};if(u=n.templateSrv.replace(o.value,e.scopedVars),f=n.templateSrv.replace(o.alias,e.scopedVars)||u,null===u||""===u||void 0===u)return{data:[]};let i=t().cloneDeep(e);i.range.from=n.addTimeShift(i.range.from,u),i.range.to=n.addTimeShift(i.range.to,u),i.range.raw={from:i.range.from,to:i.range.to},i.rangeRaw=i.range.raw,l.refId=l.refId+"_"+u,i.targets=[l],i.requestId=i.requestId+"_"+u;let a=r.query(i);return"function"==typeof a.toPromise?a.toPromise():a})).then((function(e){let t=e.data;return t.forEach((function(e){if(e.target)e.target=n.generalAlias(e.target,f,c,d),void 0!==e.title&&null!==e.title&&(e.title=n.generalAlias(e.title,f,c,d));else if(e.fields)e.fields.forEach((function(e){e.name&&(e.name=n.generalAlias(e.name,f,c,d)),e.config&&e.config.displayName&&(e.config.displayName=n.generalAlias(e.config.displayName,f,c,d)),e.config&&e.config.displayNameFromDS&&(e.config.displayNameFromDS=n.generalAlias(e.config.displayNameFromDS,f,c,d))}));else if(e.columns)for(let t=1;t<e.columns.length;t++){let r=e.columns[t];r.text&&(r.text=n.generalAlias(r.text,f,c,d))}if(r.process){let t=n.parseShiftToMs(u);if("table"===e.type)e.rows&&e.rows.forEach((function(e){e[0]=e[0]+t}));else if(e.datapoints)e.datapoints.forEach((function(e){e[1]=e[1]+t}));else if(e.fields&&e.fields.length>0){const r=e.fields.find((e=>"time"===e.type));if(r){const i={name:r.name,type:r.type,config:r.config||{},labels:r.labels,values:new a.ArrayVector};for(let a=0;a<e.length;a++)i.values.set(a,r.values.get(a)+t);e.fields[0]=i}}}e.hide=r.hide})),{data:t}}));s.push(h)}))}})),this.$q.all(s).then((function(e){return{data:t().flatten(t().filter(t().map(e,(function(e){let r=e.data;return r&&(r=t().filter(e.data,(function(e){return!0!==e.hide}))),r})),(function(e){return null!=e})))}}))}generalAlias(e,t,r,i){switch(r){case"prefix":return t+i+e;case"absolute":return t;default:return e+i+t}}parseShiftToMs(e){let r=this.parseTimeShift(e);if(!r)return;let a=0-r.num,n=r.unit;if(t().includes(this.units,n)){let e=i()(),t=e.clone().add(a,n);return e.valueOf()-t.valueOf()}}parseTimeShift(e){let t=e,r=e.length,i=0;for(;i<r&&!isNaN(t.charAt(i));)if(i++,i>10)return;return{num:parseInt(t.substring(0,i),10),unit:t.charAt(i)}}addTimeShift(e,r){let i=this.parseTimeShift(r);if(!i)return;let a=0-i.num,n=i.unit;return t().includes(this.units,n)?e.clone().add(a,n):void 0}constructor(e,t,r){n(this,"datasourceSrv",void 0),n(this,"$q",void 0),n(this,"templateSrv",void 0),n(this,"meta",void 0),n(this,"units",["y","M","w","d","h","m","s"]),this.datasourceSrv=t,this.$q=e,this.templateSrv=r}}var u=s(735);function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class c extends u.QueryCtrl{targetBlur(){this.refresh()}onChangeInternal(){this.refresh()}addTimeShifts(){let e=this.getTimeShiftId();this.target.timeShifts.push({id:e})}removeTimeShift(e){if(this.target.timeShifts&&this.target.timeShifts.length<=1)return;let r=t().indexOf(this.target.timeShifts,e);this.target.timeShifts.splice(r,1),this.refreshTimeShifts()}refreshTimeShifts(){this.refresh()}onAliasAsChange(e){console.error("timeShift.aliasAs="+this.target.aliasAs),console.error("aliasAs="+e)}getTimeShiftId(){let e=0;for(;;){if(t().every(this.target.timeShifts,(function(t){return t.id!==e})))return e;e++}}constructor(e,t){super(e,t),f(this,"errors",void 0),f(this,"query",void 0),f(this,"target",void 0),f(this,"aliasTypes",["suffix","prefix","absolute"]),this.target.timeShifts||(this.target.timeShifts=[]),0===this.target.timeShifts.length&&this.addTimeShifts(),void 0===this.target.process&&(this.target.process=!0)}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}f(c,"templateUrl","partials/query.editor.html");class h{constructor(){d(this,"current",void 0)}}d(h,"templateUrl","partials/config.html")})(),o})()));
//# sourceMappingURL=module.js.map