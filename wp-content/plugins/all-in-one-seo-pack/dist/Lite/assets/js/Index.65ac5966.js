import{u as at}from"./vue-router.2f910c93.js";import{k as Z,u as Y,K as $,j as rt,l as O,g as M,b as tt,p as ct}from"./index.506b73e8.js";import{l as lt}from"./license.857c8098.js";import{a as dt}from"./allowed.90fca9f9.js";/* empty css             */import{g as ut,r as ft}from"./params.af7ed354.js";import{C as mt,u as gt}from"./Tabs.95165f45.js";import{S as et,d as _t,_ as ot,c as W,e as it,C as pt}from"./Caret.a21d4ca8.js";import{C as ht,_ as vt,G as yt}from"./Header.e1357a46.js";import{a as bt,C as kt}from"./LicenseKeyBar.e4dded7c.js";import{S as St}from"./Logo.6c9d2b19.js";import{_ as N}from"./_plugin-vue_export-helper.eefbdd86.js";import{o as r,c as d,a as i,v as m,k as v,b as f,C as u,E as y,F as T,J as I,t as l,G as x,l as _,x as k,g as Ct,f as V,q as st,m as F,T as K}from"./runtime-dom.esm-bundler.5c3c7d72.js";import{S as Nt}from"./Support.e867db75.js";import"./translations.d159963e.js";import{_ as c,s as A}from"./default-i18n.20001971.js";import{j as wt}from"./helpers.53868b98.js";import{b as Dt}from"./date.a0d85d51.js";import{u as Lt}from"./Url.9d3a2412.js";import{S as Tt}from"./Exclamation.22e53a8b.js";import{S as Pt}from"./Gear.bd4e1565.js";import{T as E}from"./Slide.39c07c03.js";const At={},Bt={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-description"},It=i("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Mt=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",fill:"currentColor"},null,-1),xt=[It,Mt];function Ht(e,t){return r(),d("svg",Bt,xt)}const Ut=N(At,[["render",Ht]]),Ot={},Et={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-folder-open"},zt=i("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),qt=i("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",fill:"currentColor"},null,-1),Vt=[zt,qt];function Rt(e,t){return r(),d("svg",Et,Vt)}const jt=N(Ot,[["render",Rt]]),C="all-in-one-seo-pack",Gt={setup(){return{licenseStore:Z(),rootStore:Y(),helpPanelStore:$(),settingsStore:rt(),links:O}},components:{CoreApiBar:bt,CoreLicenseKeyBar:kt,CoreUpgradeBar:ht,SvgAioseoLogo:St,SvgClose:et,SvgDescription:Ut,SvgFolderOpen:jt,SvgSupport:Nt},data(){return{searchItem:null,strings:{close:c("Close",C),search:c("Search",C),viewAll:c("View All",C),docs:c("Docs",C),viewDocumentation:c("View Documentation",C),browseDocumentation:A(c("Browse documentation, reference material, and tutorials for %1$s.",C),"AIOSEO"),viewAllDocumentation:c("View All Documentation",C),getSupport:c("Get Support",C),submitTicket:c("Submit a ticket and our world class support team will be in touch soon.",C),submitSupportTicket:c("Submit a Support Ticket",C),upgradeToPro:c("Upgrade to Pro",C)}}},computed:{filteredDocs(){return this.searchItem!==""?Object.values(this.helpPanelStore.docs).filter(e=>this.searchItem!==null?e.title.toLowerCase().includes(this.searchItem.toLowerCase()):null):null}},methods:{inputSearch:function(e){_t(()=>{this.searchItem=e},1e3)},toggleSection:function(e){e.target.parentNode.parentNode.classList.toggle("opened")},toggleDocs:function(e){e.target.previousSibling.classList.toggle("opened"),e.target.style.display="none"},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},getCategoryDocs(e){return Object.values(this.helpPanelStore.docs).filter(t=>t.categories.flat().includes(e)?t:null)}}},Ft={id:"aioseo-help-modal",class:"aioseo-help"},Kt={class:"aioseo-help-header"},Yt={class:"logo"},Wt=["href"],Xt=["title"],Jt={class:"help-content"},Qt={id:"aioseo-help-search"},Zt={id:"aioseo-help-result"},$t={class:"aioseo-help-docs"},te={class:"icon"},ee=["href"],oe={id:"aioseo-help-categories"},ie={class:"aioseo-help-categories-toggle"},se={class:"folder-open"},ne={class:"title"},ae=i("span",{class:"dashicons dashicons-arrow-right-alt2"},null,-1),re={class:"aioseo-help-docs"},ce={class:"icon"},le=["href"],de={class:"aioseo-help-additional-docs"},ue={class:"icon"},fe=["href"],me={id:"aioseo-help-footer"},ge={class:"aioseo-help-footer-block"},_e=["href"],pe={class:"aioseo-help-footer-block"},he=["href"];function ve(e,t,a,o,s,n){const p=m("core-upgrade-bar"),h=m("core-license-key-bar"),g=m("core-api-bar"),b=m("svg-aioseo-logo"),H=m("svg-close"),z=m("base-input"),B=m("svg-description"),X=m("svg-folder-open"),U=m("base-button"),nt=m("svg-support");return r(),d("div",Ft,[!o.rootStore.isPro&&o.settingsStore.settings.showUpgradeBar&&o.rootStore.pong?(r(),v(p,{key:0})):f("",!0),o.rootStore.isPro&&o.licenseStore.isUnlicensed&&o.rootStore.pong?(r(),v(h,{key:1})):f("",!0),o.rootStore.pong?f("",!0):(r(),v(g,{key:2})),i("div",Kt,[i("div",Yt,[o.licenseStore.isUnlicensed?(r(),d("a",{key:0,href:o.links.utmUrl("header-logo"),target:"_blank"},[u(b,{id:"aioseo-help-logo"})],8,Wt)):f("",!0),o.licenseStore.isUnlicensed?f("",!0):(r(),v(b,{key:1,id:"aioseo-help-logo"}))]),i("div",{id:"aioseo-help-close",title:s.strings.close,onClick:t[0]||(t[0]=y((...w)=>n.toggleModal&&n.toggleModal(...w),["stop"]))},[u(H)],8,Xt)]),i("div",Jt,[i("div",Qt,[u(z,{type:"text",size:"medium",placeholder:s.strings.search,"onUpdate:modelValue":t[1]||(t[1]=w=>n.inputSearch(w))},null,8,["placeholder"])]),i("div",Zt,[i("ul",$t,[(r(!0),d(T,null,I(n.filteredDocs,(w,P)=>(r(),d("li",{key:P},[i("span",te,[u(B)]),i("a",{href:o.links.utmUrl("help-panel-doc","",w.url),rel:"noopener noreferrer",target:"_blank"},l(w.title),9,ee)]))),128))])]),i("div",oe,[i("ul",ie,[(r(!0),d(T,null,I(o.helpPanelStore.categories,(w,P)=>(r(),d("li",{key:P,class:x(["aioseo-help-category",{opened:P==="getting-started"}])},[i("header",{onClick:t[2]||(t[2]=y(D=>n.toggleSection(D),["stop"]))},[i("span",se,[u(X)]),i("span",ne,l(w),1),ae]),i("ul",re,[(r(!0),d(T,null,I(n.getCategoryDocs(P).slice(0,5),(D,q)=>(r(),d("li",{key:q},[i("span",ce,[u(B)]),i("a",{href:o.links.utmUrl("help-panel-doc","",D.url),rel:"noopener noreferrer",target:"_blank"},l(D.title),9,le)]))),128)),i("div",de,[(r(!0),d(T,null,I(n.getCategoryDocs(P).slice(5,n.getCategoryDocs(P).length),(D,q)=>(r(),d("li",{key:q},[i("span",ue,[u(B)]),i("a",{href:o.links.utmUrl("help-panel-doc","",D.url),rel:"noopener noreferrer",target:"_blank"},l(D.title),9,fe)]))),128))]),n.getCategoryDocs(P).length>=5?(r(),v(U,{key:0,class:"aioseo-help-docs-viewall gray medium",onClick:t[3]||(t[3]=y(D=>n.toggleDocs(D),["stop"]))},{default:_(()=>[k(l(s.strings.viewAll)+" "+l(w)+" "+l(s.strings.docs),1)]),_:2},1024)):f("",!0)])],2))),128))])]),i("div",me,[i("div",ge,[i("a",{href:o.links.utmUrl("help-panel-all-docs","","https://aioseo.com/docs/"),rel:"noopener noreferrer",target:"_blank"},[u(B),i("h3",null,l(s.strings.viewDocumentation),1),i("p",null,l(s.strings.browseDocumentation),1),u(U,{class:"aioseo-help-docs-viewall gray small"},{default:_(()=>[k(l(s.strings.viewAllDocumentation),1)]),_:1})],8,_e)]),i("div",pe,[i("a",{href:!o.rootStore.isPro||!o.licenseStore.license.isActive?o.links.getUpsellUrl("help-panel","get-support","liteUpgrade"):o.links.utmUrl("help-panel-support","","https://aioseo.com/account/support/"),rel:"noopener noreferrer",target:"_blank"},[u(nt),i("h3",null,l(s.strings.getSupport),1),i("p",null,l(s.strings.submitTicket),1),o.rootStore.isPro&&o.licenseStore.license.isActive?(r(),v(U,{key:0,class:"aioseo-help-docs-support blue small"},{default:_(()=>[k(l(s.strings.submitSupportTicket),1)]),_:1})):f("",!0),!o.rootStore.isPro||!o.licenseStore.license.isActive?(r(),v(U,{key:1,class:"aioseo-help-docs-support green small"},{default:_(()=>[k(l(s.strings.upgradeToPro),1)]),_:1})):f("",!0)],8,he)])])])])}const ye=N(Gt,[["render",ve]]),R="all-in-one-seo-pack",be=()=>{const e={notifications:c("Notifications",R),newNotifications:c("New Notifications",R),activeNotifications:c("Active Notifications",R)},t=Ct(!1),a=M(),o=V(()=>t.value?a.dismissedNotificationsCount:a.activeNotificationsCount),s=V(()=>t.value?a.dismissedNotifications:a.activeNotifications),n=V(()=>t.value?e.notifications:e.newNotifications);return{dismissed:t,notificationTitle:n,notifications:s,notificationsCount:o,strings:e}},ke=""+window.__aioseoDynamicImportPreload__("images/dannie-detective.b4823250.png"),Se="all-in-one-seo-pack",Ce={emits:["dismissed-notification"],setup(){const{button1Loading:e,button2Loading:t,getHref:a,getTagType:o,getTarget:s,processButtonClick:n}=Lt();return{button1Loading:e,button2Loading:t,getHref:a,getTagType:o,getTarget:s,notificationsStore:M(),processButtonClick:n}},components:{BaseButton:ot,SvgCircleCheck:W,SvgCircleClose:it,SvgCircleExclamation:Tt,SvgGear:Pt,TransitionSlide:E},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:c("Dismiss",Se)}}},computed:{getIcon(){switch(this.notification.type){case"warning":return"svg-circle-exclamation";case"error":return"svg-circle-close";case"info":return"svg-gear";case"success":default:return"svg-circle-check"}},getDate(){return Dt(this.notification.start)}},methods:{processDismissNotification(){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug]),this.$emit("dismissed-notification")},getButtonType(e){switch(this.notification.notification_name){case"search-console-site-not-connected":case"search-console-site-not-verified":case"email-reports-enable-reminder":return e===1?"blue":"gray";default:return"gray"}}}},Ne={class:"icon"},we={class:"body"},De={class:"title"},Le={class:"date"},Te=["innerHTML"],Pe={class:"actions"};function Ae(e,t,a,o,s,n){const p=m("base-button"),h=m("transition-slide");return r(),v(h,{class:x(["aioseo-notification",[`aioseo-notification-${a.notification.notification_name}`]]),active:s.active},{default:_(()=>[i("div",null,[i("div",Ne,[(r(),v(st(n.getIcon),{class:x(a.notification.type)},null,8,["class"]))]),i("div",we,[i("div",De,[i("div",null,l(a.notification.title),1),i("div",Le,l(n.getDate),1)]),i("div",{class:"notification-content",innerHTML:a.notification.content},null,8,Te),i("div",Pe,[a.notification.button1_label&&a.notification.button1_action?(r(),v(p,{key:0,size:"small",type:n.getButtonType(1),class:"aioseo-button1",tag:o.getTagType(a.notification.button1_action),href:o.getHref(a.notification.button1_action),target:o.getTarget(a.notification.button1_action),onClick:t[0]||(t[0]=g=>o.processButtonClick(a.notification.button1_action,1)),loading:o.button1Loading},{default:_(()=>[k(l(a.notification.button1_label),1)]),_:1},8,["type","tag","href","target","loading"])):f("",!0),a.notification.button2_label&&a.notification.button2_action?(r(),v(p,{key:1,size:"small",type:n.getButtonType(2),class:"aioseo-button2",tag:o.getTagType(a.notification.button2_action),href:o.getHref(a.notification.button2_action),target:o.getTarget(a.notification.button2_action),onClick:t[1]||(t[1]=g=>o.processButtonClick(a.notification.button2_action,2)),loading:o.button2Loading},{default:_(()=>[k(l(a.notification.button2_label),1)]),_:1},8,["type","tag","href","target","loading"])):f("",!0),a.notification.dismissed?f("",!0):(r(),d("a",{key:2,href:"#",class:"dismiss",onClick:t[2]||(t[2]=y((...g)=>n.processDismissNotification&&n.processDismissNotification(...g),["stop","prevent"]))},l(s.strings.dismiss),1))])])])]),_:1},8,["class","active"])}const Be=N(Ce,[["render",Ae]]),S="all-in-one-seo-pack",Ie={emits:["dismissed-notification"],setup(){return{licenseStore:Z(),notificationsStore:M(),optionsStore:tt(),rootStore:Y()}},components:{SvgCircleCheck:W,TransitionSlide:E},props:{notification:{type:Object,required:!0}},data(){return{step:1,active:!0,strings:{dismiss:c("Dismiss",S),yesILoveIt:c("Yes, I love it!",S),notReally:c("Not Really...",S),okYouDeserveIt:c("Ok, you deserve it",S),nopeMaybeLater:c("Nope, maybe later",S),giveFeedback:c("Give feedback",S),noThanks:c("No thanks",S)}}},computed:{title(){switch(this.step){case 2:return c("That's Awesome!",S);case 3:return c("Help us improve",S);default:return A(c("Are you enjoying %1$s?",S),"AIOSEO")}},content(){switch(this.step){case 2:return c("Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",S);case 3:return A(c("We're sorry to hear you aren't enjoying %1$s. We would love a chance to improve. Could you take a minute and let us know what we can do better?",S),"All in One SEO");default:return""}},feedbackUrl(){const e=this.optionsStore.options.general&&this.licenseStore.licenseKey?this.licenseStore.licenseKey:"",t=this.rootStore.isPro?"pro":"lite";return O.utmUrl("notification-review-notice",this.rootStore.aioseo.version,"https://aioseo.com/plugin-feedback/?wpf7528_24="+encodeURIComponent(this.rootStore.aioseo.urls.home)+"&wpf7528_26="+e+"&wpf7528_27="+t+"&wpf7528_28="+this.rootStore.aioseo.version)}},methods:{processDismissNotification(e=!1){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug+(e?"-delay":"")]),this.$emit("dismissed-notification")}}},Me={class:"icon"},xe={class:"body"},He={class:"title"},Ue=["innerHTML"],Oe={class:"actions"};function Ee(e,t,a,o,s,n){const p=m("svg-circle-check"),h=m("base-button"),g=m("transition-slide");return r(),v(g,{class:"aioseo-notification",active:s.active},{default:_(()=>[i("div",null,[i("div",Me,[u(p,{class:"success"})]),i("div",xe,[i("div",He,[i("div",null,l(n.title),1)]),i("div",{class:"notification-content",innerHTML:n.content},null,8,Ue),i("div",Oe,[s.step===1?(r(),d(T,{key:0},[u(h,{size:"small",type:"blue",onClick:t[0]||(t[0]=y(b=>s.step=2,["stop"]))},{default:_(()=>[k(l(s.strings.yesILoveIt),1)]),_:1}),u(h,{size:"small",type:"gray",onClick:t[1]||(t[1]=y(b=>s.step=3,["stop"]))},{default:_(()=>[k(l(s.strings.notReally),1)]),_:1})],64)):f("",!0),s.step===2?(r(),d(T,{key:1},[u(h,{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:t[2]||(t[2]=b=>n.processDismissNotification(!1))},{default:_(()=>[k(l(s.strings.okYouDeserveIt),1)]),_:1}),u(h,{size:"small",type:"gray",onClick:t[3]||(t[3]=y(b=>n.processDismissNotification(!0),["stop","prevent"]))},{default:_(()=>[k(l(s.strings.nopeMaybeLater),1)]),_:1})],64)):f("",!0),s.step===3?(r(),d(T,{key:2},[u(h,{tag:"a",href:n.feedbackUrl,size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:t[4]||(t[4]=b=>n.processDismissNotification(!1))},{default:_(()=>[k(l(s.strings.giveFeedback),1)]),_:1},8,["href"]),u(h,{size:"small",type:"gray",onClick:t[5]||(t[5]=y(b=>n.processDismissNotification(!1),["stop","prevent"]))},{default:_(()=>[k(l(s.strings.noThanks),1)]),_:1})],64)):f("",!0),a.notification.dismissed?f("",!0):(r(),d("a",{key:3,class:"dismiss",href:"#",onClick:t[6]||(t[6]=y(b=>n.processDismissNotification(!1),["stop","prevent"]))},l(s.strings.dismiss),1))])])])]),_:1},8,["active"])}const ze=N(Ie,[["render",Ee]]),L="all-in-one-seo-pack",qe={emits:["dismissed-notification"],setup(){return{notificationsStore:M()}},components:{BaseButton:ot,SvgCircleCheck:W,TransitionSlide:E},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:c("Dismiss",L),yesILoveIt:c("Yes, I love it!",L),notReally:c("Not Really...",L),okYouDeserveIt:c("Ok, you deserve it",L),nopeMaybeLater:c("Nope, maybe later",L),giveFeedback:c("Give feedback",L),noThanks:c("No thanks",L)}}},computed:{title(){return A(c("Are you enjoying %1$s?",L),"AIOSEO")},content(){return A(c("Hey, we noticed you have been using %1$s for some time - that’s awesome! Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",L),"<strong>All in One SEO</strong>")}},methods:{processDismissNotification(e=!1){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug+(e?"-delay":"")]),this.$emit("dismissed-notification")}}},Ve={class:"icon"},Re={class:"body"},je={class:"title"},Ge=["innerHTML"],Fe={class:"actions"};function Ke(e,t,a,o,s,n){const p=m("svg-circle-check"),h=m("base-button"),g=m("transition-slide");return r(),v(g,{class:"aioseo-notification",active:s.active},{default:_(()=>[i("div",null,[i("div",Ve,[u(p,{class:"success"})]),i("div",Re,[i("div",je,[i("div",null,l(n.title),1)]),i("div",{class:"notification-content",innerHTML:n.content},null,8,Ge),i("div",Fe,[u(h,{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:t[0]||(t[0]=b=>n.processDismissNotification(!1))},{default:_(()=>[k(l(s.strings.okYouDeserveIt),1)]),_:1}),u(h,{size:"small",type:"gray",onClick:t[1]||(t[1]=y(b=>n.processDismissNotification(!0),["stop","prevent"]))},{default:_(()=>[k(l(s.strings.nopeMaybeLater),1)]),_:1}),a.notification.dismissed?f("",!0):(r(),d("a",{key:0,class:"dismiss",href:"#",onClick:t[2]||(t[2]=y(b=>n.processDismissNotification(!1),["stop","prevent"]))},l(s.strings.dismiss),1))])])])]),_:1},8,["active"])}const Ye=N(qe,[["render",Ke]]),j="all-in-one-seo-pack",We={components:{SvgCircleClose:it,TransitionSlide:E},props:{notification:{type:Object,required:!0}},data(){return{links:O,active:!0,strings:{title:A(c("%1$s Addons Not Configured Properly",j),"AIOSEO"),learnMore:c("Learn More",j),upgrade:c("Upgrade",j)}}},computed:{content(){let e="<ul>";return this.notification.addons.forEach(t=>{e+="<li><strong>AIOSEO - "+t.name+"</strong></li>"}),e+="</ul>",this.notification.message+e}}},Xe={class:"icon"},Je={class:"body"},Qe={class:"title"},Ze=["innerHTML"],$e={class:"actions"};function to(e,t,a,o,s,n){const p=m("svg-circle-close"),h=m("base-button"),g=m("transition-slide");return r(),v(g,{class:"aioseo-notification",active:s.active},{default:_(()=>[i("div",null,[i("div",Xe,[u(p,{class:"error"})]),i("div",Je,[i("div",Qe,[i("div",null,l(s.strings.title),1)]),i("div",{class:"notification-content",innerHTML:n.content},null,8,Ze),i("div",$e,[u(h,{size:"small",type:"green",tag:"a",href:s.links.utmUrl("notification-unlicensed-addons"),target:"_blank"},{default:_(()=>[k(l(s.strings.upgrade),1)]),_:1},8,["href"])])])])]),_:1},8,["active"])}const eo=N(We,[["render",to]]),G="all-in-one-seo-pack",oo={emits:["toggle-dismissed","dismissed-notification"],components:{CoreNotification:Be,NotificationsReview:ze,NotificationsReview2:Ye,NotificationsUnlicensedAddons:eo},props:{dismissedCount:{type:Number,required:!0},notifications:{type:Array,required:!0}},data(){return{dannieDetectiveImg:ke,strings:{greatScott:c("Great Scott! Where'd they all go?",G),noNewNotifications:c("You have no new notifications.",G),seeDismissed:c("See Dismissed Notifications",G)}}},methods:{getAssetUrl:wt}},io={class:"aioseo-notification-cards"},so={key:"no-notifications"},no={class:"no-notifications"},ao=["src"],ro={class:"great-scott"},co={class:"no-new-notifications"};function lo(e,t,a,o,s,n){return r(),d("div",io,[a.notifications.length?(r(!0),d(T,{key:0},I(a.notifications,p=>(r(),v(st(p.component?p.component:"core-notification"),{key:p.slug,notification:p,ref_for:!0,ref:"notification",onDismissedNotification:t[0]||(t[0]=h=>e.$emit("dismissed-notification"))},null,40,["notification"]))),128)):f("",!0),a.notifications.length?f("",!0):(r(),d("div",so,[F(e.$slots,"no-notifications",{},()=>[i("div",no,[i("img",{alt:"Dannie the Detective",src:n.getAssetUrl(s.dannieDetectiveImg)},null,8,ao),i("div",ro,l(s.strings.greatScott),1),i("div",co,l(s.strings.noNewNotifications),1),a.dismissedCount?(r(),d("a",{key:0,href:"#",class:"dismiss",onClick:t[1]||(t[1]=y(p=>e.$emit("toggle-dismissed"),["stop","prevent"]))},l(s.strings.seeDismissed),1)):f("",!0)])])]))])}const uo=N(oo,[["render",lo]]),J="all-in-one-seo-pack",fo={setup(){const{dismissed:e,notificationTitle:t,notifications:a,notificationsCount:o,strings:s}=be();return{composableStrings:s,dismissed:e,notificationsStore:M(),notificationTitle:t,notifications:a,notificationsCount:o}},components:{CoreNotificationCards:uo,SvgClose:et},data(){return{maxNotifications:Number.MAX_SAFE_INTEGER,currentPage:0,totalPages:1,strings:ct(this.composableStrings,{dismissedNotifications:c("Dismissed Notifications",J),dismissAll:c("Dismiss All",J)})}},watch:{"notificationsStore.showNotifications"(e){e?(this.currentPage=0,this.setMaxNotifications(),this.addBodyClass()):this.removeBodyClass()},dismissed(){this.setMaxNotifications()},notifications(){this.setMaxNotifications()}},computed:{filteredNotifications(){return[...this.notifications].splice(this.currentPage===0?0:this.currentPage*this.maxNotifications,this.maxNotifications)},pages(){if(typeof this.totalPages!="number"||!isFinite(this.totalPages)||0>=this.totalPages)return 1;const e=[];for(let t=0;t<this.totalPages;t++)e.push({number:t+1});return e}},methods:{escapeListener(e){e.key==="Escape"&&this.notificationsStore.showNotifications&&this.notificationsStore.toggleNotifications()},addBodyClass(){document.body.classList.add("aioseo-show-notifications")},removeBodyClass(){document.body.classList.remove("aioseo-show-notifications")},documentClick(e){if(!this.notificationsStore.showNotifications)return;const t=e&&e.target?e.target:null,a=document.querySelector("#wp-admin-bar-aioseo-notifications");if(a&&(a===t||a.contains(t)))return;const o=document.querySelector("#toplevel_page_aioseo .wp-first-item"),s=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");if(o&&o.contains(s)&&(o===t||o.contains(t)))return;const n=this.$refs["aioseo-notifications"];n&&(n===t||n.contains(t))||this.notificationsStore.toggleNotifications()},notificationsLinkClick(e){e.preventDefault(),this.notificationsStore.toggleNotifications()},processDismissAllNotifications(){const e=[];this.notifications.forEach(t=>{e.push(t.slug)}),this.notificationsStore.dismissNotifications(e).then(()=>{this.setMaxNotifications()})},setMaxNotifications(){const e=this.currentPage;this.currentPage=0,this.totalPages=1,this.maxNotifications=Number.MAX_SAFE_INTEGER,this.$nextTick(async()=>{const a=Array.from(document.querySelectorAll(".notification-menu .aioseo-notification")).map(s=>{const n=window.getComputedStyle?getComputedStyle(s,null):s.currentStyle,p=parseInt(n.marginTop)||0,h=parseInt(n.marginBottom)||0;return s.offsetHeight+p+h}),o=document.querySelector(".notification-menu .aioseo-notification-cards");if(o&&0<a.length){let s=0,n=0;for(const p of a){if(n+=p,n>o.offsetHeight)break;s++}this.maxNotifications=s||1,isFinite(s)&&0<s&&(this.totalPages=Math.ceil(a.length/s))}this.currentPage=e>this.totalPages-1?this.totalPages-1:e})}},mounted(){document.addEventListener("keydown",this.escapeListener),document.addEventListener("mousedown",this.documentClick);const e=document.querySelector("#wp-admin-bar-aioseo-notifications .ab-item");e&&e.addEventListener("mousedown",this.notificationsLinkClick);const t=document.querySelector("#toplevel_page_aioseo .wp-first-item"),a=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");t&&a&&t.addEventListener("mousedown",this.notificationsLinkClick)}},mo={class:"aioseo-notifications",ref:"aioseo-notifications"},go={key:0,class:"notification-menu"},_o={class:"notification-header"},po={class:"new-notifications"},ho={class:"dismissed-notifications"},vo={key:0,class:"notification-footer"},yo={class:"pagination"},bo=["onClick"],ko={key:0,class:"dismiss-all"};function So(e,t,a,o,s,n){const p=m("svg-close"),h=m("core-notification-cards");return r(),d("div",mo,[u(K,{name:"notifications-slide"},{default:_(()=>[o.notificationsStore.showNotifications?(r(),d("div",go,[i("div",_o,[i("span",po,"("+l(o.notificationsCount)+") "+l(o.notificationTitle),1),i("div",ho,[!o.dismissed&&o.notificationsStore.dismissedNotificationsCount?(r(),d("a",{key:0,href:"#",onClick:t[0]||(t[0]=y(g=>o.dismissed=!0,["stop","prevent"]))},l(s.strings.dismissedNotifications),1)):f("",!0),o.dismissed&&o.notificationsStore.dismissedNotificationsCount?(r(),d("a",{key:1,href:"#",onClick:t[1]||(t[1]=y(g=>o.dismissed=!1,["stop","prevent"]))},l(s.strings.activeNotifications),1)):f("",!0)]),i("div",{onClick:t[2]||(t[2]=y((...g)=>o.notificationsStore.toggleNotifications&&o.notificationsStore.toggleNotifications(...g),["stop"]))},[u(p)])]),u(h,{class:"notification-cards",notifications:n.filteredNotifications,dismissedCount:o.notificationsStore.dismissedNotificationsCount,onToggleDismissed:t[3]||(t[3]=g=>o.dismissed=!o.dismissed)},null,8,["notifications","dismissedCount"]),s.totalPages>1||!o.dismissed&&o.notifications.length?(r(),d("div",vo,[i("div",yo,[s.totalPages>1?(r(!0),d(T,{key:0},I(n.pages,(g,b)=>(r(),d("div",{class:x(["page-number",{active:g.number===1+s.currentPage}]),key:b,onClick:y(H=>s.currentPage=g.number-1,["stop"])},l(g.number),11,bo))),128)):f("",!0)]),o.dismissed?f("",!0):(r(),d("div",ko,[o.notifications.length?(r(),d("a",{key:0,href:"#",class:"dismiss",onClick:t[4]||(t[4]=y((...g)=>n.processDismissAllNotifications&&n.processDismissAllNotifications(...g),["stop","prevent"]))},l(s.strings.dismissAll),1)):f("",!0)]))])):f("",!0)])):f("",!0)]),_:1}),u(K,{name:"notifications-fade"},{default:_(()=>[o.notificationsStore.showNotifications?(r(),d("div",{key:0,onClick:t[5]||(t[5]=(...g)=>o.notificationsStore.toggleNotifications&&o.notificationsStore.toggleNotifications(...g)),class:"overlay"})):f("",!0)]),_:1})],512)}const Co=N(fo,[["render",So]]),Q="all-in-one-seo-pack",No={setup(){const e=at(),{processSaveChanges:t}=gt();return{helpPanelStore:$(),notificationsStore:M(),optionsStore:tt(),processSaveChanges:t,rootStore:Y(),route:e}},components:{CoreAlert:pt,CoreHeader:vt,CoreHelp:ye,CoreMainTabs:mt,CoreNotifications:Co,GridContainer:yt},props:{pageName:{type:String,required:!0},showTabs:{type:Boolean,default(){return!0}},showSaveButton:{type:Boolean,default(){return!0}},excludeTabs:{type:Array,default(){return[]}},containerClasses:{type:Array,default(){return[]}}},data(){return{tabsKey:0,strings:{saveChanges:c("Save Changes",Q)}}},watch:{excludeTabs(){this.tabsKey+=1}},computed:{tabs(){return this.$router.options.routes.filter(e=>e.name&&e.meta&&e.meta.name).filter(e=>dt(e.meta.access)).filter(e=>!e.meta.license||lt.hasMinimumLevel(e.meta.license)).filter(e=>!(e.meta.display==="lite"&&this.rootStore.isPro||e.meta.display==="pro"&&!this.rootStore.isPro)).filter(e=>!this.excludeTabs.includes(e.name)).map(e=>({slug:e.name,name:e.meta.name,url:{name:e.name},access:e.meta.access,label:e.meta.label}))},shouldShowSaveButton(){if(this.$route&&this.$route.name){const e=this.$router.options.routes.find(t=>t.name===this.$route.name);if(e&&e.meta&&e.meta.hideSaveButton)return!1}return this.showSaveButton},errorSaving(){const e=this.roootStore.isPro?"https://aioseo.com/plugin/pro-support":"https://aioseo.com/plugin/lite-support";return A(c("Oops! It looks like an error occurred while saving the changes. Please try again or %1$scontact our support team%2$s.",Q),'<a href="'+O.utmUrl("error-saving",this.rootStore.aioseo.page,e)+'" target="_blank">',"</a>")}},mounted(){ut().notifications&&(this.notificationsStore.showNotifications||this.notificationsStore.toggleNotifications(),setTimeout(()=>{ft("notifications")},500)),this.notificationsStore.force&&this.notificationsStore.active.length&&(this.notificationsStore.force=!1,this.notificationsStore.toggleNotifications())}},wo={class:"aioseo-main"},Do=["innerHTML"],Lo={key:2,class:"save-changes"};function To(e,t,a,o,s,n){const p=m("core-notifications"),h=m("core-header"),g=m("core-alert"),b=m("core-main-tabs"),H=m("base-button"),z=m("grid-container"),B=m("core-help");return r(),d("div",null,[u(p),i("div",wo,[u(h,{"page-name":a.pageName},null,8,["page-name"]),u(z,{class:x(a.containerClasses)},{default:_(()=>[o.optionsStore.saveError?(r(),v(g,{key:0,type:"red"},{default:_(()=>[i("div",{innerHTML:n.errorSaving},null,8,Do)]),_:1})):f("",!0),a.showTabs?(r(),v(b,{key:s.tabsKey,tabs:n.tabs,showSaveButton:n.shouldShowSaveButton},{extra:_(()=>[F(e.$slots,"extra")]),_:3},8,["tabs","showSaveButton"])):f("",!0),u(K,{name:"route-fade",mode:"out-in"},{default:_(()=>[F(e.$slots,"default")]),_:3}),n.shouldShowSaveButton?(r(),d("div",Lo,[u(H,{type:"blue",size:"medium",loading:o.rootStore.loading,onClick:t[0]||(t[0]=X=>o.processSaveChanges(o.route.name))},{default:_(()=>[k(l(s.strings.saveChanges),1)]),_:1},8,["loading"])])):f("",!0)]),_:3},8,["class"])]),o.helpPanelStore.docs&&Object.keys(o.helpPanelStore.docs).length?(r(),v(B,{key:0})):f("",!0)])}const Qo=N(No,[["render",To]]);export{Qo as C,uo as a,be as u};
