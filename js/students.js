!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.WEBPACK_GLOBAL=t():e.WEBPACK_GLOBAL=t()}(this,function(){"use strict";var e,t={};e=t,"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});const a=[];let s=document.querySelectorAll("[data-recalc-min-width]");s.length&&(s=[...s]);const o=t=>{if(t){let e=(()=>{if(!t)return 0;let e=parseInt(getComputedStyle(t).getPropertyValue("--table-padding"));return e=isNaN(e)?0:e})();if(t.style.minWidth="0px",0<=t.offsetWidth-t.scrollWidth&&(e=0),t.style.minWidth=t.scrollWidth+e+"px","0px"!==t.style.minWidth&&a.length)for(let e=0;e<a.length;e++)a[e].updateMetrics()}},n=(window.addEventListener("resize",()=>{if(s.length)for(let e=0;e<s.length;e++)o(s[e])}),()=>{if(!s.length)return null;for(let e=0;e<s.length;e++)o(s[e])}),w=e=>{if(e){const l=e.classList.contains("active")&&e.hasAttribute("data-tab-radio-toggle"),t=e.dataset.tabRadio;let o=e.dataset.tabRadioButton;e=e.dataset.tabRadioCalendar;e&&(o=e),t&&o&&document.body.querySelector(`[data-tab-radio="${t}"][data-tab-radio-body="${o}"]`)&&(document.querySelectorAll(`[data-tab-radio="${t}"]`).forEach(e=>{var t=e.dataset.tabRadioButton||null,a=e.dataset.tabRadioCalendar||null,s=e.dataset.tabRadioBody||null;t!==o&&s!==o&&a!==o||l?(e.classList.remove("active"),s&&(e.style.display="none")):(s&&e.style.removeProperty("display"),setTimeout(()=>{e.classList.add("active")},0))}),n())}},i={},r={},c={},d=new Map,u=e=>{var t="bottom left";if(!e||!e.length||"string"!=typeof e)return t;var a=e=>{let t=!1;switch(e){case"top":case"right":case"bottom":case"left":t=e}return t};let s=t;var[t,e]=e.split(" "),t=a(t),a=a(e);return s=t&&a?t+" "+a:s},v=e=>{if(!e||"string"!=typeof e)return 0;const[t=0,a=0,s=0]=e.split(" "),o=(()=>{let e=0;if(a&&"string"==typeof a)switch(a.toLowerCase()){case"январь":case"января":e=0;break;case"февраль":case"февраля":e=1;break;case"март":case"марта":e=2;break;case"апрель":case"апреля":e=3;break;case"май":case"майя":e=4;break;case"июнь":case"июня":e=5;break;case"июль":case"июля":e=6;break;case"август":case"августа":e=7;break;case"сентябрь":case"сентября":e=8;break;case"октябрь":case"октября":e=9;break;case"ноябрь":case"ноября":e=10;break;case"декабрь":case"декабря":e=11}return e})();return+new Date(s,o,t)},h=Intl.DateTimeFormat("ru",{day:"numeric",month:"long",year:"numeric"}),l=()=>{const o=new Event("change"),e=document.body.querySelectorAll("[date-datepicker-range]"),l=[];e.length&&(e.forEach(e=>{var t,a=e.id,s=e.querySelector("input");s&&"init"!==e.dataset.datepickerRange&&(e.dataset.datepickerRange="init",e=s.value,t=u(s.dataset.dpPosition),t=new AirDatepicker(s,{classes:"custom-datepicker",autoClose:!0,range:!0,multipleDatesSeparator:" - ",isMobile:document.body.offsetWidth<768,onSelect(e){var t,a,s,e=e["datepicker"];e.$el.dispatchEvent(o),function(e,t){var a,t=1<arguments.length&&void 0!==t?t:"range";(e||e instanceof AirDatepicker)&&(a=e.$el,e=e.selectedDates.length,"range"===t)&&2===e&&w(a)}(e),a=(e=e).$el,(s=a.closest("[data-tab-redraw-container]"))&&a.hasAttribute("data-tab-redraw")&&2===e.selectedDates.length&&(e=a.dataset.tabRedraw,s=s.dataset.tabRedrawContainer,(a=(t=a).closest("[data-tab-redraw-container]"))&&a.querySelectorAll("[data-tab-redraw]").forEach(e=>{e===t?e.classList.add("active"):e.classList.remove("active")}),function(e){var{nameContainer:e,value:t}=0<arguments.length&&void 0!==e?e:{};("reports"===e?change_section:update_table)(t)}({nameContainer:s,value:e}))},position:t}),l.push(t),s.hasAttribute("data-tab-redraw")&&d.set(s,t),a)&&(r[a]=t,e)&&([s,t]=e.split(" - "),e=a,a={from:s,to:t},e=r[e])&&({from:a,to:s}=a,a)&&s&&(a=isNaN(a)?v(a):1e3*+a,s=isNaN(s)?v(s):1e3*+s,e.selectDate([a,s]))}),window.addEventListener("resize",()=>{var t=document.body.offsetWidth;if(l.length)for(let e=0;e<l.length;e++)l[e].update({isMobile:t<768})}))};var S=()=>{{const e=document.body.querySelectorAll("[date-datepicker]"),r=[];e.length&&(e.forEach(e=>{var t=e.id,e=e.querySelector("input");if(e){const a=e.value,o=e.hasAttribute("data-go-week"),s=u(e.dataset.dpPosition),l=Boolean(e.getAttribute("data-dp-as-popup")),n=new AirDatepicker(e,{classes:"custom-datepicker",autoClose:!0,isMobile:l||document.body.offsetWidth<768,position:s,dateFormat(e){return h.format(e)},onSelect(e){var e=e["datepicker"],t=e;if(t){var a=t.$el.dataset.radioName;if(a){a=document.body.querySelectorAll(`input[type='radio'][name='${a}']`);if(a.length){const s=e=>{e=e.target;t.selectedDates.length&&(t.clear({silent:!0}),e.removeEventListener("change",s))};a.forEach(e=>{e.checked=!1,e.addEventListener("change",s)})}}}o&&(a=e)instanceof AirDatepicker&&(a=+a.selectedDates[0]/1e3,isNaN(a)||week.go_week(a))}});r.push(n),t&&(i[t]=n,a)&&(e=t,t=a,e=i[e],t=isNaN(t)?v(t):1e3*+t,e&&!isNaN(t)&&e.selectDate(t))}}),window.addEventListener("resize",()=>{var t=document.body.offsetWidth;if(r.length)for(let e=0;e<r.length;e++){var a=r[e];Boolean(a.$el.getAttribute("data-dp-as-popup"))||a.update({isMobile:t<768})}}))}l();{const t=document.body.querySelectorAll(".input-date-to"),n=[];t.length&&(t.forEach(e=>{var t,a=e.id,s=e.querySelector('[date-datepicker-to="min"]'),e=e.querySelector('[date-datepicker-to="max"]');let o,l;s&&e&&(o=new AirDatepicker(s,{classes:"custom-datepicker",isMobile:document.body.offsetWidth<768,autoClose:!0,dateFormat(e){return h.format(e)},onSelect(e){e=e.date;l.update({minDate:e})}}),l=new AirDatepicker(e,{classes:"custom-datepicker",isMobile:document.body.offsetWidth<768,autoClose:!0,dateFormat(e){return h.format(e)},onSelect(e){e=e.date;o.update({maxDate:e})}}),n.push(o,l),a)&&(c[a]=[o,l],s=s.value,e=e.value,s)&&e&&(a=a,s={from:s,to:e},a=c[a])&&({from:s,to:e}=s,s)&&e&&(s=isNaN(s)?v(s):1e3*+s,e=isNaN(e)?v(e):1e3*+e,[a,t]=a,a.selectDate(s),t.selectDate(e))}),window.addEventListener("resize",()=>{var t=document.body.offsetWidth;if(n.length)for(let e=0;e<n.length;e++)n[e].update({isMobile:t<768})}))}},k=()=>{var e=document.body.querySelectorAll(".input-file");e.length&&e.forEach(o=>{const e=o.querySelector("input"),l=o.querySelector(".input-file__label");e&&l&&(e.onchange=()=>{var t=e.files[0];if(t){let e=t.name;20<e.length&&(e=e.slice(0,20)+"…");{var a=o;const s=new FileReader;s.readAsDataURL(t),s.onload=()=>{var e=a.querySelector(".input-file__icon");e&&(e.classList.add("image"),e.innerHTML=`<img src="${s.result}" alt="Photo">`)}}l.textContent=""===e?l.textContent:e}})})};const E=e=>{var e=e["target"],t=e.inputmask.unmaskedvalue();3<=t.length&&t<1&&(e.value="001")},q=e=>{var e=e["target"],t=e.inputmask.unmaskedvalue(),a=(2<=t[0]&&t[1]&&3<t[1]&&(e.value=2),e);if(a&&a.inputmask&&1===a.inputmask.unmaskedvalue().length){t=a.dataset.radioName;if(t){t=document.body.querySelectorAll(`input[type='radio'][name='${t}']`);if(t.length){const s=e=>{e=e.target;a.value="",e.removeEventListener("change",s)};t.forEach(e=>{e.checked=!1,e.addEventListener("change",s)})}}}},m=e=>{new Inputmask({regex:"[0-2][0-9]:[0-5][0-9]"}).mask(e)},f=t=>{var t=t["target"],a=t.inputmask.unmaskedvalue();if(2<=a[0]&&a[1]&&3<a[1]&&(t.value=23),!(a.length<4)){let e=t.closest("[data-range-time]").querySelectorAll('[type="tel"]')[1];e&&((e=e.inputmask.unmaskedvalue()).length<4||(t.value=a>=e?"":a))}},p=t=>{var t=t["target"],a=t.inputmask.unmaskedvalue();if(2<=a[0]&&a[1]&&3<a[1]&&(t.value=23),!(a.length<4)){let e=t.closest("[data-range-time]").querySelectorAll('[type="tel"]')[0];e&&((e=e.inputmask.unmaskedvalue()).length<4||(t.value=a<=e?"":a))}};var A=()=>{var e=document.body.querySelectorAll("[data-range-time]");e.length&&e.forEach(e=>{var t;(e=e.querySelectorAll('[type="tel"]')).length&&(t=e[0],e=e[1],t&&(m(t),t.addEventListener("input",f)),e)&&(m(e),e.addEventListener("input",p))})};const C=[],y=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;e.length&&t.length&&(e.forEach(e=>{e.classList.remove("active")}),t.forEach(e=>{e.style.display="none"}))},g=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;const s=e.closest("[data-tab-button]").dataset.tabButton.toLowerCase();t.length&&a.length&&(t.forEach(e=>{var t=e.dataset.tabButton.toLowerCase();s===t?e.classList.add("active"):e.classList.remove("active")}),a.forEach(e=>{e.dataset.tabItem.toLowerCase()!==s?e.style.display="none":(e.style.removeProperty("display"),n())}))};function x(){let l=0<arguments.length&&void 0!==arguments[0]&&arguments[0];var e=document.querySelectorAll("[data-tab]");e.length&&e.forEach(e=>{const s=e.querySelectorAll("[data-tab-button]"),o=e.querySelectorAll("[data-tab-item]");s.length&&(s.forEach((t,e)=>{var a=t.hasAttribute("data-tab-active");0===e&&g(t,s,o),a&&g(t,s,o),t.addEventListener("click",e=>{e=e.target;l&&t.hasAttribute("data-tab-toggle")&&t.classList.contains("active")?y(s,o):g(e,s,o)})}),l)&&y(s,o)})}const b=e=>({button:e.querySelector("[data-spoller-button]")||null,body:e.querySelector("[data-spoller-body]")||null}),L=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:200;e.classList.contains("closing")||(e.classList.add("closing"),e.style.height=e.offsetHeight+"px",e.style.overflow="hidden",e.style.transitionProperty="height",e.style.transitionDuration=t+"ms",setTimeout(()=>{e.style.height="0"},0),setTimeout(()=>{e.removeAttribute("style"),e.style.display="none",e.classList.remove("closing")},t))},_=function(t){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:200;if(!t.classList.contains("opening")){let e;t.classList.add("opening"),t.style.display="block",e=t.offsetHeight,t.style.height="0",t.style.width="100%",t.style.overflow="hidden",t.style.transitionProperty="height",t.style.transitionDuration=a+"ms",setTimeout(()=>{t.style.height=e+"px"},0),setTimeout(()=>{t.removeAttribute("style"),t.classList.remove("opening")},a)}},B=e=>{if(e.classList.contains("spoller-offline")){e.classList.remove("spoller-offline");const a=e.querySelectorAll("[data-spoller]");for(var t of a){const a=b(t)["body"];(t.classList.contains("show")?_:(t.classList.remove("active"),L))(a,0)}}},D=l=>{let e=!1;if(l.classList.contains("modal__body")){const r=l.querySelector("[data-spoller-button]"),s=l.querySelector("[data-spoller-body]");e=!r||!s}if(!e){if(!l.querySelector(".show[data-spoller]")){var n=l;if(n){let e=n.dataset.spollerBreakpoint,o=0,l=9999;if(n.classList.add("spoller-offline"),B(n),e){for(var t of e=e.split("|"))t.includes("min")&&(o=+t.slice(3)),t.includes("max")&&(l=+t.slice(3));var a=()=>{var e=document.body.offsetWidth;if(e<o||e>l){var t=n;if(!t.classList.contains("spoller-offline")){t.classList.add("spoller-offline");const s=t.querySelectorAll("[data-spoller]");for(var a of s){const s=b(a)["body"];a.classList.remove("active"),a.classList.remove("show"),_(s,0)}}}else(e>o||e<l)&&B(n)};a(),window.addEventListener("resize",a)}}}const r=l.querySelectorAll("[data-spoller]");for(let o of r){const{button:i,body:c}=b(o);i&&c&&i.addEventListener("click",e=>{if(e.preventDefault(),!(l.classList.contains("spoller-offline")||c.classList.contains("opening")||c.classList.contains("closing"))){var t=r,a=c,s;for(s of t){const t=b(s)["body"];t===a||t.hasAttribute("style")||(s.classList.remove("active"),L(t,P))}o.classList.toggle("active"),((e=c).hasAttribute("style")?_:L)(e,P),o.classList.contains("show")&&(o.classList.remove("show"),o.classList.remove("active"))}})}}},P=200,I=e=>{e&&(e.classList.add("close"),e.addEventListener("transitionend",()=>{e.remove()}))};return document.addEventListener("DOMContentLoaded",e=>{{const a=document.body.querySelector(".sidebar__list");a&&(a.addEventListener("mouseover",e=>{var{}=e;a.classList.contains("hover")||a.classList.add("hover")}),a.addEventListener("mouseout",e=>{e=e.relatedTarget;e&&(e.closest(".sidebar__list")===a?a.classList.add("hover"):a.classList.remove("hover"))}))}{const s=document.body,o=s.querySelector(".header__button"),l=s.querySelector(".sidebar"),n=s.querySelector(".head"),r=s.querySelector(".head__menu-button");if(o&&l){const i=()=>{o.classList.remove("active"),l.classList.remove("show"),s.classList.remove("no-scroll"),r&&(r.classList.remove("active"),n.classList.remove("active"))};o.onclick=()=>{r&&(r.classList.toggle("active"),n.classList.toggle("active")),o.classList.toggle("active"),l.classList.toggle("show"),s.classList.toggle("no-scroll")},r&&(r.onclick=()=>{o.classList.toggle("active"),n.classList.toggle("active"),r.classList.toggle("active"),l.classList.toggle("show"),s.classList.toggle("no-scroll")}),l.addEventListener("click",e=>{e=e.target;e===l&&i()}),window.addEventListener("resize",()=>{992<=s.offsetWidth&&l.classList.contains("show")&&!l.classList.contains("sidebar_move")&&i()})}}S(),function(e){const o=document.querySelectorAll(0<arguments.length&&void 0!==e?e:"[data-select]");if(!o.length)return;o.forEach((e,t)=>{e.hasAttribute("style")||(e.style.zIndex=""+(o.length-t+999));const l=e.querySelector("[data-select-input]"),a=e.querySelectorAll("[data-select-option]"),s=e.querySelector("[data-option-current]");l&&a.length&&(s&&(l.value=(null==(t=s.textContent)?void 0:t.trim())||"",l.dataset.inputValue=s.dataset.selectOption||""),e.hasAttribute("data-select-hover")&&e.removeAttribute("data-select-hover"),e.addEventListener("click",e=>{var t,e=e["target"],a=e.closest("[data-select]"),e=e.closest("[data-select-option]"),s=e?e.textContent:null,e=e?e.dataset.selectOption:null,o=(s&&(l.value=s.trim(),l.dataset.inputValue=e,l.dispatchEvent(new CustomEvent("custom-select"))),n(a),a);for(t of document.body.querySelectorAll("[data-select]"))t.classList.contains("show")?t.classList.remove("show"):t===o&&t.classList.add("show")}))});const n=e=>{var t,a=e.querySelector("[data-select-option]");a&&(a=a.parentElement,t=document.documentElement.clientHeight-e.getBoundingClientRect().bottom,a.offsetHeight+20>=t?(l(),e.classList.add("reverse")):(s(),e.classList.remove("reverse")))},s=()=>{const a=document.body.querySelectorAll("[data-select]");a.forEach((e,t)=>{e.style.zIndex=""+(a.length-t+999)})},l=()=>{const a=document.body.querySelectorAll("[data-select]");a.forEach((e,t)=>{e.style.zIndex=""+(a.length+t+999)})};document.body.addEventListener("click",e=>{e=e.target;e.closest("[data-select]")||document.body.querySelectorAll("[data-select]").forEach(e=>e.classList.remove("show"))})}(),k();var t=document.body.querySelectorAll('[data-mask="tel"]');if(t.length){const c=new Inputmask("+7 (999) 999-99-99");t.forEach(e=>c.mask(e))}if((t=document.body.querySelectorAll('[data-mask="hour"]')).length){const d=new Inputmask("999 ч.");t.forEach(e=>{d.mask(e),e.oninput=E})}if((t=document.body.querySelectorAll('[data-mask="min"]')).length){const u=new Inputmask("999 мин.");t.forEach(e=>{u.mask(e),e.oninput=E})}if((t=document.body.querySelectorAll('[data-mask="time"]')).length){const v=new Inputmask({regex:"[0-2][0-9]:[0-5][0-9]"});t.forEach(e=>{v.mask(e),e.oninput=q})}{const h=document.body,m=h.querySelectorAll("[data-label-mobile]");if(m.length){const f=(e,t)=>{var a=e.dataset.labelMobile||e.textContent;e.dataset.labelInit||(e.dataset.labelInit=e.textContent),h.offsetWidth<t?e.textContent=a:e.dataset.labelInit&&(e.textContent=e.dataset.labelInit)};m.forEach(e=>{f(e,576)}),window.addEventListener("resize",()=>{m.forEach(e=>{f(e,576)})})}}{const p=document.body,y=p.querySelectorAll("[data-label-table]");if(y.length){const g=(e,t)=>{var a=e.dataset.labelTable||e.textContent;e.dataset.labelInit||(e.dataset.labelInit=e.textContent),p.offsetWidth<t?e.textContent=a:e.dataset.labelInit&&(e.textContent=e.dataset.labelInit)};y.forEach(e=>{g(e,768)}),window.addEventListener("resize",()=>{y.forEach(e=>{g(e,768)})})}}if(function(e){e=document.querySelectorAll(0<arguments.length&&void 0!==e?e:"[data-spollers]");e.length&&e.forEach(e=>D(e))}(),t=document.body.querySelector(".slider-calendar")){const b=t.querySelector(".slider-calendar__month"),L=t.querySelector(".slider-calendar__swiper");L&&L.querySelector(".swiper-wrapper")&&new Swiper(L,{slidesPerView:1,spaceBetween:10,grabCursor:!0,autoHeight:!0,navigation:{nextEl:".slider-calendar__slide-next",prevEl:".slider-calendar__slide-prev"},on:{init:function(){var e;b&&(e=this.slides[0].dataset.monthName,b.textContent=e||b.textContent),x()}}}).on("slideChange",e=>{b&&(e=e.slides[e.activeIndex].dataset.monthName,b.textContent=e||b.textContent)})}(t=document.body.querySelectorAll(".clients-columns__slider")).length&&t.forEach(e=>{e=new Swiper(e,{slidesPerView:1,spaceBetween:20,grabCursor:!0,freeMode:!0,observer:!0,observeParents:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0},breakpoints:{400:{slidesPerView:1.1,spaceBetween:20},500:{slidesPerView:1.5,spaceBetween:20},550:{slidesPerView:1.6,spaceBetween:20},655:{slidesPerView:1.9,spaceBetween:20},750:{slidesPerView:2.1,spaceBetween:20},992:{slidesPerView:2.1,spaceBetween:20},1100:{slidesPerView:2.4,spaceBetween:20},1300:{slidesPerView:2.8,spaceBetween:20},1650:{slidesPerView:3,spaceBetween:30}}});C.push(e)}),A(),document.body.querySelector(".calendar[data-tab]")||document.body.querySelector(".clients[data-tab]")||x(),document.body.querySelector(".clients[data-tab]")&&x(!0),(t=document.body.querySelector("#note_message"))&&function(e,t){e=0<arguments.length&&void 0!==e?e:null,t=1<arguments.length&&void 0!==t&&t;if(e){const a=document.body,s=document.createElement("div");s.classList.add("notification-user"),t&&s.classList.add("error"),setTimeout(()=>{s.classList.add("show")},0);s.insertAdjacentHTML("afterbegin",`
    <div class="notification-user__close">
      <svg id="cross" viewBox="0 0 18 18">
      <path
        d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V8.25H17C17.4142 8.25 17.75 8.58579 17.75 9C17.75 9.41421 17.4142 9.75 17 9.75H9.75V17C9.75 17.4142 9.41421 17.75 9 17.75C8.58579 17.75 8.25 17.4142 8.25 17V9.75H1C0.585786 9.75 0.25 9.41421 0.25 9C0.25 8.58579 0.585786 8.25 1 8.25H8.25V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
      />
      </svg>
    </div>

    <div class="notification-user__wrapper">
      <p class="notification-user__text">${e}</p>
    </div>
  `),a.insertAdjacentElement("afterbegin",s);t=s;if(t){const o=t.offsetHeight;document.body.querySelectorAll(".notification-user.show").forEach(e=>{var t=+window.getComputedStyle(e).top.match(/^\d+/)[0];e.style.top=o+t+20+"px"})}s.addEventListener("click",e=>{e=e.target;I(e.closest(".notification-user"))}),setTimeout(()=>{I(s)},5e3)}}(t.value),(t=document.body.querySelectorAll("[data-tab-radio][data-tab-radio-button]")).length&&t.forEach(e=>{e.hasAttribute("data-tab-radio-init")&&w(e),e.onclick=()=>{w(e)}})}),t});