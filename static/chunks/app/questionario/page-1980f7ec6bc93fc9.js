(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60],{8773:function(t,e,o){Promise.resolve().then(o.bind(o,9028))},9028:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return Questionario}});var a=o(7437),s=o(2265),i=o(4033),n=o(2173);function Questionario(){let t=(0,i.useRouter)(),[e,o]=(0,s.useState)([]),[l,c]=(0,s.useState)(0),[r,x]=(0,s.useState)(0),[d,p]=(0,s.useState)(-1),[b,u]=(0,s.useState)(!1),[h,f]=(0,s.useState)(!1),[m,g]=(0,s.useState)(!1),[w,j]=(0,s.useState)(!1),[y,N]=(0,s.useState)(!1),[k,v]=(0,s.useState)(!1);(0,s.useEffect)(()=>{n.Z.get("https://homolog-cog-diagnostic-robot-f875ef890e1c.herokuapp.com/api/v1/questions/",{headers:{Authorization:"Token ".concat("b93335d2be7fd0c7a4032ac0aeef944d25a4861e")}}).then(t=>{o(t.data.results),c(t.data.count)}).catch(()=>console.log("catch()")),animateFadeIn()},[]);let animateFadeIn=()=>{u(!1),f(!1),g(!1),j(!1),N(!1),v(!1);let t=setTimeout(()=>{u(!0)},200),e=setTimeout(()=>{f(!0)},500),o=setTimeout(()=>{g(!0)},1e3),a=setTimeout(()=>{j(!0)},1500),s=setTimeout(()=>{N(!0)},2e3),i=setTimeout(()=>{v(!0)},2500);return()=>{clearTimeout(t),clearTimeout(e),clearTimeout(o),clearTimeout(a),clearTimeout(s),clearTimeout(i)}},handleSair=()=>{t.push("/")},handleVoltar=()=>{0==r?t.push("/diagnostico"):(animateFadeIn(),x(r-1),p(-1))},handleProximo=()=>{-1!=d&&(animateFadeIn(),r+1<l?(x(r+1),p(-1)):t.push("/relatorio"))},handleSelectQuestao=t=>{console.log("q: ",t),p(t)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between bg-slate-900 overflow-y-auto",children:e&&e.map((t,e)=>e==r&&(0,a.jsxs)("div",{className:"w-[1728px] h-[1068px] relative bg-slate-900",children:[(0,a.jsxs)("div",{className:"w-[910px] h-[120px] left-[461.79px] top-[141px] absolute p-[10px] transition-all duration-100 ".concat(b?"opacity-100":"opacity-0"),children:[(0,a.jsx)("div",{className:"w-[910px] h-[190px] left-0 top-0 absolute bg-slate-950 rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex"}),(0,a.jsx)("div",{className:"h-[4px] w-[890px] bg-neutral-200 dark:bg-neutral-600 absolute",children:(0,a.jsx)("div",{className:"h-full bg-white absolute",style:{width:(e+1)/l*890}})}),(0,a.jsxs)("div",{className:"w-[794px] left-[24px] top-[20px] absolute",children:[(0,a.jsx)("span",{className:"text-white text-[20px] font-normal font-['Roboto_Mono']",children:t.description}),(0,a.jsx)("br",{})]})]}),(0,a.jsx)("div",{className:"left-[366px] top-[132px] absolute text-white text-[70px] font-normal",children:"\uD83E\uDD16"}),(0,a.jsxs)("div",{className:"h-[434px] left-[462px] top-[375px] absolute",children:[(0,a.jsxs)("button",{className:"w-[905px] h-[74px] p-4 left-0 top-0 absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ".concat(0==d?"bg-white":"bg-slate-950"," transition-all duration-500 ").concat(h?"opacity-100":"opacity-0"),onClick:()=>handleSelectQuestao(0),children:[(0,a.jsx)("div",{className:"text-2xl font-bold font-['Space_Grotesk'] ".concat(0==d?"text-slate-950":"text-white"),children:"A -"}),(0,a.jsx)("div",{className:"grow shrink basis-0  text-base text-left font-bold font-['Roboto_Mono'] ".concat(0==d?"text-slate-950":"text-white"),children:t.alternatives[0].description})]}),(0,a.jsxs)("button",{className:"w-[905px] h-[74px] p-4 left-0 top-[90px] absolute  rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ".concat(1==d?"bg-white":"bg-slate-950"," transition-all duration-500 ").concat(m?"opacity-100":"opacity-0"),onClick:()=>handleSelectQuestao(1),children:[(0,a.jsx)("div",{className:"text-2xl font-bold font-['Space_Grotesk'] ".concat(1==d?"text-slate-950":"text-white"),children:"B -"}),(0,a.jsx)("div",{className:"grow shrink basis-0 text-base text-left font-bold font-['Roboto Mono'] ".concat(1==d?"text-slate-950":"text-white"),children:t.alternatives[1].description})]}),(0,a.jsxs)("button",{className:"w-[905px] h-[74px] p-4 left-0 top-[180px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ".concat(2==d?"bg-white":"bg-slate-950"," transition-all duration-500 ").concat(w?"opacity-100":"opacity-0"),onClick:()=>handleSelectQuestao(2),children:[(0,a.jsx)("div",{className:"text-2xl font-bold font-['Space_Grotesk'] ".concat(2==d?"text-slate-950":"text-white"),children:"C -"}),(0,a.jsx)("div",{className:"grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono'] ".concat(2==d?"text-slate-950":"text-white"),children:t.alternatives[2].description})]}),(0,a.jsxs)("button",{className:"w-[905px] h-[74px] p-4 left-0 top-[270px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ".concat(3==d?"bg-white":"bg-slate-950"," transition-all duration-500 ").concat(y?"opacity-100":"opacity-0"),onClick:()=>handleSelectQuestao(3),children:[(0,a.jsx)("div",{className:"text-2xl font-bold font-['Space_Grotesk'] ".concat(3==d?"text-slate-950":"text-white"),children:"D -"}),(0,a.jsx)("div",{className:"grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono']  ".concat(3==d?"text-slate-950":"text-white"),children:t.alternatives[3].description})]}),(0,a.jsxs)("button",{className:"w-[905px] h-[74px] p-4 left-0 top-[360px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ".concat(4==d?"bg-white":"bg-slate-950"," transition-all duration-500 ").concat(k?"opacity-100":"opacity-0"),onClick:()=>handleSelectQuestao(4),children:[(0,a.jsx)("div",{className:"text-2xl font-bold font-['Space_Grotesk'] ".concat(4==d?"text-slate-950":"text-white"),children:"E -"}),(0,a.jsx)("div",{className:"grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono']  ".concat(4==d?"text-slate-950":"text-white"),children:t.alternatives[4].description})]})]}),(0,a.jsxs)("div",{className:"w-[1664px] h-11 left-[32px] top-[32px] absolute",children:[(0,a.jsx)("img",{className:"w-[136px] h-[35px] left-0 top-[5px] absolute",src:"/images/cognitivo.png"}),(0,a.jsx)("button",{className:"w-[170px] h-11 left-[1494px] top-0 absolute border border-black justify-start items-start gap-4 inline-flex",onClick:handleSair,children:(0,a.jsx)("div",{className:"grow shrink basis-0 self-stretch px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex",children:(0,a.jsx)("div",{className:"text-white text-base font-bold font-['Roboto_Mono'] leading-normal",children:"Sair"})})}),(0,a.jsx)("div",{className:"w-[600px] left-[540px] top-[8px] absolute text-center text-white text-[23px] font-bold font-['Space_Grotesk']",children:"Diagn\xf3stico de Maturidade Anal\xedtica"})]}),(0,a.jsx)("button",{className:"w-[394px] left-[975px] top-[841px] absolute justify-start items-start gap-4 inline-flex ".concat(-1==d?"opacity-20":""),onClick:handleProximo,children:(0,a.jsx)("div",{className:"grow shrink basis-0 h-16 px-[30px] py-5 bg-white rounded-[900px] justify-center items-center gap-[15px] flex",children:(0,a.jsx)("div",{className:"text-blue-900 text-base font-bold font-['Roboto_Mono'] leading-normal",children:"Pr\xf3ximo >>>"})})}),(0,a.jsx)("button",{className:"w-[396px] left-[460px] top-[841px] absolute border border-black justify-start items-start gap-4 inline-flex",onClick:handleVoltar,children:(0,a.jsx)("div",{className:"grow shrink basis-0 h-16 px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex",children:(0,a.jsx)("div",{className:"text-white text-base font-bold font-['Roboto_Mono'] leading-normal",children:"<<< Voltar"})})})]},t.id?t.id:"id"))})})}}},function(t){t.O(0,[630,971,472,744],function(){return t(t.s=8773)}),_N_E=t.O()}]);