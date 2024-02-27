'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function Diagnostico() {
    const router = useRouter()

    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);

    useEffect(()=>{
        
    },[]);

    const handleSair = () => {
        router.push("/")
    };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#01073F] overflow-y-auto">
        <div className="scale-95">
            <div className="w-[1728px] h-[4514px] relative bg-[#01073F] mt-[-100px]">
                <img className="w-[745px] h-[911px] left-[717px] top-[1057px] absolute origin-top-left rotate-180" src="/images/lines1.png" />
                <img className="w-[1385px] h-[2305px] left-[454px] top-[880px] absolute" src="/images/lines1.png" />
                <div className="w-[1728px] h-[897px] left-0 top-[3051px] absolute bg-blue-900" />
                <div className="w-[481px] left-[769px] top-[190px] absolute text-white text-[40px] font-bold font-['Space_Grotesk']">Sua empresa é</div>
                <div className="w-[661px] left-[769px] top-[253px] absolute text-sky-400 text-[85px] font-bold font-['Space_Grotesk']">Lorem Ipsum</div>
                <div className="w-[82px] left-[356px] top-[1390px] absolute text-sky-400 text-[180px] font-bold font-['Space_Grotesk']">1</div>
                <div className="w-[82px] left-[925px] top-[1390px] absolute text-sky-400 text-[180px] font-bold font-['Space_Grotesk']">2</div>
                <div className="w-[82px] left-[643px] top-[1663px] absolute text-sky-400 text-[180px] font-bold font-['Space_Grotesk']">3</div>
                <div className="w-[980px] h-[850px] left-[-506px] top-[1057px] absolute bg-sky-600 bg-opacity-90 rounded-full blur-[900px]" />
                <div className="w-[659px] left-[659px] top-[2037px] absolute text-white text-[50px] font-bold font-['Space_Grotesk']">Nossas Recomendações</div>
                <div className="w-[659px] left-[535px] top-[3134px] absolute text-center text-white text-[50px] font-bold font-['Space_Grotesk']">Use Cases de Data Science para o seu segmento</div>
                <div className="w-[600px] left-[564px] top-[1254px] absolute text-center text-cyan-300 text-[57px] font-bold font-['Space_Grotesk']">Pontos de melhoria </div>
                <div className="w-[282px] left-[471px] top-[1425px] absolute text-white text-[50px] font-bold font-['Space_Grotesk']">LOREM</div>
                <div className="w-[282px] left-[1056px] top-[1425px] absolute text-white text-[50px] font-bold font-['Space_Grotesk']">LOREM</div>
                <div className="w-[282px] left-[774px] top-[1698px] absolute text-white text-[50px] font-bold font-['Space_Grotesk']">LOREM</div>
                <div className="w-[805px] left-[659px] top-[2120px] absolute text-white text-lg font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur. Egestas nunc maecenas sed amet enim faucibus. Mauris non purus eu etiam proin eget sagittis in sed. Leo sit donec integer ut sit massa et. Sed scelerisque odio justo malesuada tristique blandit rutrum. Enim purus eu tincidunt ultrices tellus sit. Vestibulum luctus in libero id euismod nunc suspendisse mattis placerat. Adipiscing convallis scelerisque vivamus dictum pulvinar risus. Orci odio nunc egestas semper lorem morbi felis. Sed tortor pharetra amet consectetur purus quam eleifend ipsum. Quis porttitor cras risus nisl morbi donec quam phasellus vitae. Vel tellus at mi eu. Sed volutpat posuere dignissim duis odio enim. </div>
                <div className="w-[312px] left-[472px] top-[1495px] absolute text-white text-lg font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur. Egestas nunc maecenas sed amet enim faucibus. </div>
                <div className="w-[312px] left-[1057px] top-[1495px] absolute text-white text-lg font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur. Egestas nunc maecenas sed amet enim faucibus. </div>
                <div className="w-[312px] left-[775px] top-[1768px] absolute text-white text-lg font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur. Egestas nunc maecenas sed amet enim faucibus. </div>
                <div className="w-[395px] h-[373px] left-[256px] top-[2519px] absolute">
                    <div className="w-[302px] left-[24px] top-[159px] absolute text-cyan-200 text-xl font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur egestas nunc maecenas</div>
                    <div className="w-[363px] h-16 px-[30px] py-5 left-[16px] top-[293px] absolute bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Acessar</div>
                    </div>
                    <div className="w-[395px] h-[373px] left-0 top-0 absolute rounded-[5px] border border-white" />
                </div>
                <div className="w-[395px] h-[373px] left-[667px] top-[2519px] absolute">
                    <div className="w-[302px] left-[24px] top-[159px] absolute text-cyan-200 text-xl font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur egestas nunc maecenas</div>
                    <div className="w-[395px] h-[137px] left-0 top-0 absolute bg-blue-900 rounded-tl-[5px] rounded-tr-[5px]" />
                    <div className="w-[363px] h-16 px-[30px] py-5 left-[16px] top-[293px] absolute bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Acessar</div>
                    </div>
                    <div className="w-[395px] h-[373px] left-0 top-0 absolute rounded-[5px] border border-white" />
                </div>
                <div className="w-[395px] h-[373px] left-[1077px] top-[2519px] absolute">
                    <div className="w-[302px] left-[24px] top-[159px] absolute text-cyan-200 text-xl font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur egestas nunc maecenas</div>
                    <div className="w-[395px] h-[137px] left-0 top-0 absolute bg-blue-950 rounded-tl-[5px] rounded-tr-[5px]" />
                    <div className="w-[363px] h-16 px-[30px] py-5 left-[16px] top-[293px] absolute bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Acessar</div>
                    </div>
                    <div className="w-[395px] h-[373px] left-0 top-0 absolute rounded-[5px] border border-white" />
                </div>
                <img className="w-[1425px] h-[469px] left-[152px] top-[3391px] absolute" src="https://via.placeholder.com/1425x469" />
                <div className="w-[278px] h-[383.45px] left-[315px] top-[2006px] absolute">
                    <div className="w-[278px] h-[278px] left-0 top-0 absolute bg-purple-400 rounded-full blur-[62px]" />
                    <div className="w-[216.65px] h-[216.65px] left-[30.68px] top-[30.68px] absolute bg-amber-100 rounded-full blur-[39px]" />
                    <img className="w-[200px] h-[300px] left-[40px] top-[32.59px] absolute" src="/images/lampada.png" />
                    <div className="w-[78.61px] h-[78.61px] left-[96.82px] top-[99.70px] absolute bg-orange-100 rounded-full blur-[62px]" />
                </div>
                <img className="w-[136px] h-[35px] left-[32px] top-[37px] absolute" src="/images/cognitivo.png" />
                <img className="w-[292px] h-[75px] left-[359px] top-[4047px] absolute" src="/images/cognitivo.png" />
                <div className="w-[600px] left-[572px] top-[40px] absolute text-center text-white text-[23px] font-bold font-['Space_Grotesk']">Diagnóstico de Maturidade Analítica</div>
                <div className="w-[319px] h-16 px-[30px] py-5 left-[769px] top-[373px] absolute bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Fazer download da análise</div>
                </div>
                <div className="w-[1216px] h-[665px] left-[256px] top-[482px] absolute rounded-[40px] border-2 border-sky-200 border-opacity-60 blur-[11px]" />
                <div className="w-[1216px] h-[665px] left-[256px] top-[482px] absolute bg-cyan-400 bg-opacity-10 rounded-[40px] border-2 border-sky-200 border-opacity-40" />
                <div className="w-[202px] left-[567px] top-[630px] absolute text-white text-[26px] font-bold font-['Roboto_Mono']">foi seu score geral</div>
                <div className="w-[361px] left-[1014px] top-[623px] absolute text-white text-[26px] font-bold font-['Roboto_Mono']">das empresas brasileiras estão nesse nível de maturidade</div>
                <div className="left-[356px] top-[600px] absolute text-sky-400 text-[100px] font-bold font-['Space_Grotesk']">000</div>
                <div className="left-[796px] top-[600px] absolute text-sky-400 text-[100px] font-bold font-['Space_Grotesk']">35%</div>
                <div className="w-[659px] left-[359px] top-[782px] absolute text-cyan-300 text-[28px] font-bold font-['Space_Grotesk']">Qual o cenário atual do uso de dados no varejo?</div>
                <div className="w-[572px] left-[872px] top-[4047px] absolute text-white text-[67px] font-bold font-['Space_Grotesk']">Estamos juntos na evolução da sua empresa.</div>
                <div className="w-[382px] left-[359px] top-[4168px] absolute text-white text-[31px] font-bold font-['Space_Grotesk']">Compartilhe o seu diagnóstico nas redes sociais.</div>
                <div className="w-[1010px] left-[359px] top-[877px] absolute text-white text-lg font-bold font-['Roboto_Mono']">Lorem ipsum dolor sit amet consectetur. Egestas nunc maecenas sed amet enim faucibus. Mauris non purus eu etiam proin eget sagittis in sed. Leo sit donec integer ut sit massa et. Sed scelerisque odio justo malesuada tristique blandit rutrum. Enim purus eu tincidunt ultrices tellus sit. Vestibulum luctus in libero id euismod nunc suspendisse mattis placerat. Adipiscing convallis scelerisque vivamus dictum pulvinar risus. Orci odio nunc egestas semper lorem morbi felis. Sed tortor pharetra amet consectetur purus quam eleifend ipsum. Quis porttitor cras risus nisl morbi donec quam phasellus vitae. Vel tellus at mi eu. Sed volutpat posuere dignissim duis odio enim. <br/></div>
                <img className="w-[590px] h-[357px] left-[200px] top-[178px] absolute" src="/images/bussola.png" />
                <div className="w-[363px] px-[30px] py-7 left-[867px] top-[4354px] absolute bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Fale com um especialista</div>
                </div>
                <div className="w-[236px] h-16 left-[359px] top-[4334px] absolute">
                    <div className="w-16 h-16 px-[30px] py-5 left-0 top-0 absolute bg-white rounded-[900px] justify-center items-center gap-[15px] inline-flex">
                        <div></div>
                    </div>
                    <div className="w-16 h-16 px-[30px] py-5 left-[86px] top-0 absolute bg-white rounded-[900px]" />
                    <div className="w-16 h-16 px-[30px] py-5 left-[172px] top-0 absolute bg-white rounded-[900px]" />
                    <div className="w-[26px] h-[26px] left-[105px] top-[19px] absolute justify-start items-start gap-2 inline-flex" />
                </div>
                <div className="left-[359px] top-[4444px] absolute justify-start items-start gap-5 inline-flex">
                    <div className="text-white text-[8px] font-bold font-['Roboto_Mono'] leading-normal">2023 © All rights reserved</div>
                    <div><span className="text-white text-[8px] font-bold font-['Roboto_Mono'] leading-normal">Images by </span><span className="text-white text-[8px] font-bold font-['Roboto_Mono'] underline leading-normal">uplyak</span><span className="text-white text-[8px] font-bold font-['Roboto_Mono'] leading-normal"> and </span><span className="text-white text-[8px] font-bold font-['Roboto_Mono'] underline leading-normal">Freepik</span></div>
                </div>
            </div>
        </div>
    </main>
  )
}
