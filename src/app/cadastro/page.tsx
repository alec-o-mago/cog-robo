'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from "axios";
import Image from 'next/image'
//import { Button } from "@material-tailwind/react";


export default function Cadastro() {
  const BASE_URL = "https://homolog-cog-diagnostic-robot-f875ef890e1c.herokuapp.com/api/v1/";
  const TOKEN = "b93335d2be7fd0c7a4032ac0aeef944d25a4861e";

  const router = useRouter()

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [telefone, setTelefone] = useState("")

  useEffect(()=>{
    //console.log("on ready")
  },[]);

  const handleSair = () => {
    router.push("/")
  };
  
  const handleConectar = () => {
    //console.log("nome: ",nome)
    //console.log("email: ",email)
    //console.log("telefone: ",telefone)
    axios.post(BASE_URL+"leads/" , {name:nome, email:email, telephone:telefone} , {headers: {Authorization: `Token ${TOKEN}`}})
    .then( (response) => {
      //console.log("resposta axios",response)
    })
    .catch(()=>(
      console.log("catch()"))
    )
    router.push("/diagnostico")
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900 overflow-hidden">
        
      <div className="w-[1728px] h-[1068px] relative bg-slate-900">
      <img className="w-[1065px] h-[1026.36px] left-[773px] top-0 absolute" src="/images/lines1.png" />
      <img className="w-[1065px] h-[1026px] left-[895px] top-[-24px] absolute origin-top-left rotate-180" src="/images/lines1.png" />
      <div className="w-[600px] left-[564px] top-[173px] absolute text-center text-white text-[32px] font-bold font-['Space_Grotesk']">Boas vindas ao diagnóstico de maturidade analítica!</div>
      <img className="w-[136px] h-[35px] left-[32px] top-[39px] absolute" src="/images/cognitivo.png" />
      <div className="w-[600px] left-[564px] top-[297px] absolute text-white text-base font-normal font-['Roboto_Mono'] leading-[30px]">Você vai descobrir qual o nível de maturidade que seus negócios possuem, para que possamos indicar os próximos passos para o futuro.<br/><br/>Informe seu Nome, Email e Telefone para se conectar ao assistente.</div>
      <div className="w-[600px] p-0 left-[565px] top-[497px] absolute bg-slate-900 rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex p">
          <input type="text" id="nome" placeholder="Nome Completo" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-slate-900 w-full h-full" value={nome} onChange={(e)=>setNome(e.target.value)}></input>
      </div>
      <div className="w-[600px] p-0 left-[565px] top-[581px] absolute bg-slate-900 rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex">
          <input type="text" id="email" placeholder="email@email.com" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-slate-900 w-full h-full" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
      </div>
      <div className="w-[600px] p-0 left-[565px] top-[665px] absolute bg-slate-900 rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex">
          <input type="text" id="cpf" placeholder="(00) 00000-0000" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-slate-900 w-full h-full" value={telefone} onChange={(e)=>setTelefone(e.target.value)}></input>
      </div>
      <button className="w-[260px] left-[904px] top-[771px] absolute justify-start items-start gap-4 inline-flex" onClick={handleConectar}>
          <div className="grow shrink basis-0 h-16 px-[30px] py-5 bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 flex">
              <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Conectar &gt;&gt;&gt;</div>
          </div>
      </button>
      <button className="w-[262px] left-[563px] top-[771px] absolute border border-black justify-start items-start gap-4 inline-flex" onClick={handleSair}>
          <div className="grow shrink basis-0 h-16 px-[30px] py-5 rounded-[900px] border border-white border-opacity-50 justify-center items-center gap-[15px] flex">
              <div className="text-white text-opacity-50 text-base font-bold font-['Roboto_Mono'] leading-normal">&lt;&lt;&lt; Voltar</div>
          </div>
      </button>
      <button className="w-[170px] h-11 left-[1526px] top-[32px] absolute border border-black justify-start items-start gap-4 inline-flex" onClick={handleSair}>
          <div className="grow shrink basis-0 self-stretch px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex">
              <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Sair</div>
          </div>
      </button>
      </div>
    </main>
    
  )
}
