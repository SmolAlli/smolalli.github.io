var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let p;function h(t){p=t}const d=[],m=[],w=[],v=[],$=Promise.resolve();let C=!1;function x(t){w.push(t)}const b=new Set;let y=0;function k(){const t=p;do{for(;y<d.length;){const t=d[y];y++,h(t),_(t.$$)}for(h(null),d.length=0,y=0;m.length;)m.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];b.has(n)||(b.add(n),n())}w.length=0}while(d.length);for(;v.length;)v.pop()();C=!1,b.clear(),h(t)}function _(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const M=new Set;function L(t,n){t&&t.i&&(M.delete(t),t.i(n))}function E(t,n,e,r){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}function A(t){t&&t.c()}function B(t,e,s,c){const{fragment:a,on_mount:l,on_destroy:i,after_update:u}=t.$$;a&&a.m(e,s),c||x((()=>{const e=l.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(x)}function S(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(d.push(t),C||(C=!0,$.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,o,s,c,a,i,u,f=[-1]){const g=p;h(n);const d=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(g?g.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:o.target||g.$$.root};u&&u(d.root);let m=!1;if(d.ctx=s?s(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),m&&T(n,t)),e})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);d.fragment&&d.fragment.l(t),t.forEach(l)}else d.fragment&&d.fragment.c();o.intro&&L(n.$$.fragment),B(n,o.target,o.anchor,o.customElement),k()}h(g)}class z{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function I(n){let e,r,o;return{c(){e=i("a"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 512 512" class="theme-icon" id="lightIcon"><g class="fa-group"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z" class="fa-primary"></path></g></svg> \n\n\t<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 0 512 512" class="theme-icon" id="darkIcon"><g class="fa-group"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" class="fa-primary"></path></g></svg> \n\n\t<span class="link-text">Theme</span>',g(e,"class","nav-item"),g(e,"id","themeButton")},m(t,s){a(t,e,s),r||(o=f(e,"click",n[0]),r=!0)},p:t,i:t,o:t,d(t){t&&l(e),r=!1,o()}}}function j(t){const n={dark:"light",light:"dark"};let e;const r=localStorage.getItem("theme")||(e=Object.keys(n)[0],localStorage.setItem("theme",e),e),o=document.body.classList;return o.add(r),[function(){const t=localStorage.getItem("theme"),e=n[t];o.replace(t,e),localStorage.setItem("theme",e)}]}class O extends z{constructor(t){super(),H(this,t,j,I,s,{})}}function D(n){let e,r,o,s,p,h,d,m,w,v,$,C,x,b;return $=new O({}),{c(){e=i("nav"),r=i("div"),o=i("a"),o.innerHTML='<img src="https://avatars.githubusercontent.com/u/22519967" alt="SmolAlli"/>',s=u(),p=i("a"),p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><g class="fa-group"><path fill="#3E82E5" d="M1402.2,631.7c-9.7-353.4-286.2-496-642.6-496H68.4v714.1l442,398V490.7h257c274.5,0,274.5,344.9,0,344.9H597.6v329.5h169.8c274.5,0,274.5,344.8,0,344.8h-699v354.9h691.2c356.3,0,632.8-142.6,642.6-496c0-162.6-44.5-284.1-122.9-368.6C1357.7,915.8,1402.2,794.3,1402.2,631.7z"></path><path fill="currentColor" d="M1262.5,135.2L1262.5,135.2l-76.8,0c26.6,13.3,51.7,28.1,75,44.3c70.7,49.1,126.1,111.5,164.6,185.3c39.9,76.6,61.5,165.6,64.3,264.6l0,1.2v1.2c0,141.1,0,596.1,0,737.1v1.2l0,1.2c-2.7,99-24.3,188-64.3,264.6c-38.5,73.8-93.8,136.2-164.6,185.3c-22.6,15.7-46.9,30.1-72.6,43.1h72.5c346.2,1.9,671-171.2,671-567.9V716.7C1933.5,312.2,1608.7,135.2,1262.5,135.2z" class="fa-primary"></path></g></svg> \n\t\t\t<span class="link-text">BetterDiscord</span>',h=u(),d=i("a"),d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -10 75 75"><g xmlns="http://www.w3.org/2000/svg" clippath="url(#clip0)"><path fill="currentColor" d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" class="fa-primary"></path></g></svg> \n\t\t\t<span class="link-text">Discord</span>',m=u(),w=i("a"),w.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g class="fa-group"><path xmlns="http://www.w3.org/2000/svg" fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" class="fa-primary"></path></g></svg> \n\t\t\t<span class="link-text">Github</span>',v=u(),A($.$$.fragment),g(o,"class","nav-item logo"),g(o,"href","/"),g(p,"class","nav-item"),g(p,"href","/BetterDiscord"),g(d,"class","nav-item"),g(d,"href",""),g(w,"href","https://github.com/SmolAlli/"),g(w,"class","nav-item"),g(w,"target","_blank"),g(w,"rel","noopener noreferrer"),g(r,"class","navbar-nav"),g(e,"id","navbar"),g(e,"class","navbar-main")},m(t,l){a(t,e,l),c(e,r),c(r,o),c(r,s),c(r,p),c(r,h),c(r,d),c(r,m),c(r,w),c(r,v),B($,r,null),C=!0,x||(b=f(d,"click",n[0]),x=!0)},p:t,i(t){C||(L($.$$.fragment,t),C=!0)},o(t){E($.$$.fragment,t),C=!1},d(t){t&&l(e),S($),x=!1,b()}}}function N(t){return[()=>{window.open("https://discord.gg/mUX9Q8u","_blank").focus()}]}class Z extends z{constructor(t){super(),H(this,t,N,D,s,{})}}function U(n){let e,r,o,s;return e=new Z({}),{c(){A(e.$$.fragment),r=u(),o=i("main"),o.innerHTML="<h1>In progress</h1> \n\t<p>This website is still in the works, come back later to see what&#39;s done.\n\t\t(Also, how did you get here?)</p>"},m(t,n){B(e,t,n),a(t,r,n),a(t,o,n),s=!0},p:t,i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){S(e,t),t&&l(r),t&&l(o)}}}const V=new class extends z{constructor(t){super(),H(this,t,null,U,s,{})}}({target:document.body});return window.ServerURL="",V}();
