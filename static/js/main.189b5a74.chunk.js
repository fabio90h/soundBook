(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},14:function(e,t,a){e.exports=a.p+"static/media/1.f3764d39.svg"},15:function(e,t,a){e.exports=a.p+"static/media/4.5ca56613.svg"},17:function(e,t,a){e.exports=a.p+"static/media/play-icon-rotate.642a3f89.svg"},18:function(e,t,a){e.exports=a.p+"static/media/play-solid-icon.756a2721.svg"},19:function(e,t,a){e.exports=a.p+"static/media/stop-icon-solid.3e862b63.svg"},23:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),r=a.n(o),d=(a(31),a(13)),s=a.n(d),p=a(14),l=a.n(p),c=a(15),u=a.n(c);const g=[{imageSrc:l.a,sounds:[a(5),a(9),a(5)]},{imageSrc:u.a,sounds:[a(5),a(9)]},{imageSrc:s.a,sounds:[a(5)]}];var m=a(16),x=a.n(m),h=(a(44),a(2)),b=a(17),f=a.n(b),w=a(18),v=a.n(w),k=a(19),$=a.n(k);const E=h.a.span`
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #ddddf4;
  opacity: 1;

  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
`,y=h.a.div`
  /* border: 1px solid red; */

  width: 40px;
  height: 40px;

  margin: 50px auto;
  z-index: 100;

  width: 40px;
  height: 40px;

  position: absolute;

  left: 45%;
  top: 20%;

  cursor: ${e=>e.next?"mouse":"pointer"};

  animation-delay: 3s;
  animation: ${e=>e.next&&e.open?"bounce 2s infinite":"none"};

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(30px);
    }
    40% {
      transform: translateX(0px);
    }
    60% {
      transform: translateX(15px);
    }
  }

  span:nth-child(1) {
    //top side
    transform: ${e=>e.open?"rotate(30deg)":"left center"};

    left: ${e=>e.open?"-7%":"0"};
    top: ${e=>e.open?"25%":"0px"};

    width: 100%;
  }

  span:nth-child(2) {
    //left side
    transform: ${e=>{let{next:t,open:a}=e;return t&&a?"rotate(0deg)":"rotate(90deg)"}};
    left: -50%;
    top: 50%;

    width: 100%;
  }

  span:nth-child(3) {
    //right side
    width: ${e=>e.open?"0px":"100%"};

    transform: rotate(90deg);

    left: 50%;
    top: 50%;
  }

  span:nth-child(4) {
    //bottom side
    transform: ${e=>e.open?"rotate(-30deg)":"left center"};

    left: ${e=>e.open?"-8%":"0%"};
    top: ${e=>e.open?"75%":"100%"};

    width: 100%;
  }
`,S=e=>{let{onClick:t,playing:a,done:n}=e;const[o,r]=i.a.useState(a),[d,s]=i.a.useState(n);return i.a.useEffect(()=>{r(a)},[a]),i.a.useEffect(()=>{s(n)},[n]),i.a.createElement(y,{next:d,open:o,onClick:()=>{t(),r(a)}},i.a.createElement(E,null),i.a.createElement(E,null),i.a.createElement(E,null),i.a.createElement(E,null))},_=h.a.div`
  background: #eef3f7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  border-radius: 15px;
  padding: 30px;
  width: 90%;
  margin: auto;
  margin-top: 30vh;
  margin-bottom: 75px;
  max-width: 600px;
`,z=h.a.div`
  width: 90%;
  position: relative;
  border-radius: 15px;
  z-index: 1;
  margin-top: -8vh;

  height: 35vh;
`,C=h.a.div`
  width: 100%;
  height: 85%;

  background-image: url(${e=>e.$url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: unset;

  background-size: cover;
  background-position: center;

  flex-shrink: 0;
  position: relative;
  z-index: 2;
  border-radius: 15px;

  &:after {
    content: "";
    background: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
    display: block;
    z-index: 2;
    position: absolute;
    border-radius: 15px;
  }

  &:before {
    content: "";
    background: inherit;
    width: 100%;
    height: 100%;
    box-shadow: 0px 10px 40px 0px rgba(76, 70, 124, 0.5);
    display: block;
    z-index: 1;
    position: absolute;
    top: 30px;
    transform: scale(0.9);
    filter: blur(10px);
    opacity: 0.9;
    border-radius: 15px;
  }
`,j=h.a.div`
  width: 90%;
  overflow-y: scroll;

  z-index: 1;

  height: 10vh;
`,L=h.a.img`
  width: 20px;
  height: 20px;

  cursor: ${e=>e.disabled?"mouse":"pointer"};
`,T=h.a.div`
  backdrop-filter: blur(7px);
  border-radius: 15px;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 100;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
`,F=h.a.div`
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,B=h.a.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
`,I=h.a.div`
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${e=>e.completed?"#9dd6a1":"#ddddf4"};
`,D=h.a.progress`
  height: 30px;
  width: 75%;

  height: 8px;
  background-color: #d0d8e6;

  &::-webkit-progress-bar {
    background-color: #d0d8e6;
    border-radius: 10px;
  }

  &::-webkit-progress-value {
    background-color: ${e=>e.$done?"#9dd6a1":"#a3b3ce"};
    border-radius: 10px;
  }
`,O=h.a.hr`
  border: 1px solid #ccd0d4;
  opacity: 0.6;
`,X=e=>{const{pageNumber:t,pageSounds:a,imageSrc:n,setCounter:o,counter:r,wasSwiped:d,setWasSwiped:s}=e,[p,l]=i.a.useState(-1),[c,u]=i.a.useState(0),[g,m]=i.a.useState(0),[x,h]=i.a.useState(new Set),b=a.length,w=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;if(e===b)return;const a=document.getElementById(`audio_tag_page${t}-${e}`);console.log(`audio_tag_page${t}-${e}`,b,x),p===e?(a.pause(),l(-1)):(a.currentTime=0,u(a.duration),a.play(),l(e),o(e),a.addEventListener("timeupdate",()=>{m(a.currentTime)}),a.addEventListener("ended",()=>{h(a=>a.add(`audio_tag_page${t}-${e}`)),l(-1),o(e=>e<b?e+1:e)}))},k=(e,a,n,i)=>p===e?a:x.has(`audio_tag_page${t}-${e}`)?n:i;return i.a.useEffect(()=>{d&&(s(!1),l(-1),h(new Set))},[s,d]),i.a.createElement(_,{id:`${t}`},i.a.createElement(z,null,i.a.createElement(C,{$url:n},i.a.createElement(T,null,i.a.createElement(S,{onClick:()=>w(),playing:-1===p,done:x.size===b}),i.a.createElement(B,null,a.map((e,a)=>i.a.createElement(I,{completed:x.has(`audio_tag_page${t}-${a}`)})))))),i.a.createElement(j,null,a.map((e,n)=>i.a.createElement(i.a.Fragment,null,i.a.createElement(F,null,i.a.createElement("audio",{id:`audio_tag_page${t}-${n}`,src:e}),i.a.createElement(L,{disabled:-1!==p&&p!==n,src:k(n,$.a,f.a,v.a),onClick:-1!==p&&p!==n?void 0:()=>w(n)}),i.a.createElement(D,{$done:x.has(`audio_tag_page${t}-${n}`),max:c,value:k(n,g,c,0)})),n<a.length-1&&i.a.createElement(O,null)))))},J={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}};var N=()=>{const[e,t]=Object(n.useState)(0),[a,o]=Object(n.useState)(!1);return i.a.createElement(x.a,{responsive:J,swipeable:!0,draggable:!0,partialVisible:!1,removeArrowOnDeviceType:["tablet","mobile"],afterChange:a=>(a=>{const n=document.getElementById(`audio_tag_page${a}-${e}`);n&&(n.pause(),n.currentTime=0),o(!0),t(0)})(a)},g.map((n,r)=>i.a.createElement(X,{key:r,pageSounds:n.sounds,imageSrc:n.imageSrc,pageNumber:r,wasSwiped:a,setWasSwiped:o,counter:e,setCounter:t})))};var P=function(){return i.a.createElement("div",null,i.a.createElement(N,null))};var W=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then(t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:o,getTTFB:r}=t;a(e),n(e),i(e),o(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(P,null))),W()},5:function(e,t,a){e.exports=a.p+"static/media/Landing.4ce2379d.mp3"},9:function(e,t,a){e.exports=a.p+"static/media/Slide 1.1a4a04bf.mp3"}},[[23,1,2]]]);
//# sourceMappingURL=main.189b5a74.chunk.js.map