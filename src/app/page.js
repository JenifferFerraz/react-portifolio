'use client'
import NavBar from '../Components/NavBar.js'
import Image from 'next/image.js'
import logo from '../public/logo1.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/fashion-studio-website.jpg'
import web2 from '../public/web4.png'
import web3 from '../public/web6.png'
import web4 from '../public/web1.png'
import web5 from '../public/web2.png'
import web6 from '../public/web5.jpg'

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-10 lg:px-20 " id="Home">
        <NavBar />
        <div className="text-center p-10 py-10 ">
          <h2 className="text-5xl py-2 text-red-700  md:text-6xl font-medium">
            FTT
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">
            Fábrica de Tecnologia Turing
          </h3>
        </div>
        <div className=" relative mt-20 h-80 mx-auto rounded-full w-80  shadow-neon overflow-hidden md:h-96 md:w-96">
          <Image src={logo} layout="fill" objectFit="cover" />
        </div>
        <section>
          <div>
            <h3 className="text-3xl py-1" id="Sobre">
              Sobre
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              A Fábrica de Tecnologias Turing (FTT) é um laboratório empresa,
              estruturado em três núcleos (Fábrica de Software, Núcleo de
              Capacitação e Núcleo de Pesquisa), e tem por objetivo formar
              alunos com visão mercadológica. Aqui são desenvolvidos projetos
              reais, a partir de parcerias locais e internacionais, fazendo uso
              de metodologias, padrões, técnicas e ferramentas inovadoras
              requeridas pelo mercado de trabalho. Assim, a FTT, contribui para
              a integralização do perfil profissional do aluno e, atualmente, é
              fonte de recrutamento de profissionais. Essa é uma estrutura
              madura, pois desde 2006, alunos e professores dos cursos de
              computação exercitam as práticas da Engenharia de Software na
              produção de sistemas. Tanto os clientes como os projetos são
              reais, o que permite a vivência profissional dos envolvidos,
              aproximando as teorias e as práticas pedagógicas das necessidades
              do mercado.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="center shadow-neon  p-10 rounded-xl my-10 ">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Progamação</h3>
              <p className="p-2">
                Na FTT, projetos reais são desenvolvidos em parcerias locais e
                internacionais. Isso é feito utilizando metodologias, padrões,
                técnicas e ferramentas inovadoras que são demandadas pelo
                mercado de trabalho atual. Como resultado, a FTT contribui para
                a formação integral do perfil profissional dos alunos.
              </p>
            </div>
            <div className="center shadow-neon  p-10 rounded-xl my-10 ">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Cliente</h3>
              <p className="p-2">
                É importante destacar que a FTT tem uma estrutura madura e bem
                estabelecida. Desde 2006, alunos e professores dos cursos de
                computação têm a oportunidade de aplicar as práticas da
                Engenharia de Software na produção de sistemas. Tanto os
                clientes como os projetos são reais, o que permite que todos os
                envolvidos vivenciem a realidade profissional, integrando de
                forma eficaz a teoria e a prática pedagógica às necessidades do
                mercado.
              </p>
            </div>
            <div className="center shadow-neon  p-10 rounded-xl my-10 ">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Desing</h3>
              <p className="p-2">
                A FTT não apenas prepara os alunos para o mercado de trabalho,
                mas também serve como uma fonte de recrutamento de profissionais
                talentosos e qualificados. Com uma abordagem prática e orientada
                para resultados, a FTT desempenha um papel crucial na formação e
                no desenvolvimento de futuros profissionais de tecnologia.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1" id="Projetos">
              Projetos
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              A Fábrica de Tecnologias Turing (FTT) é o nosso laboratório de
              inovação, onde preparamos os alunos para o mercado de tecnologia
              por meio de projetos reais, parcerias locais e internacionais, e
              uma abordagem prática que integra teoria e prática. Somos uma
              fonte de talento qualificado para o mercado de trabalho.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-2/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
              />
            </div>
          </div>
        </section>
        <section className="py-16 lg:section" id="Contato">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1">
                <div>
                  <h4 className="text-xl uppercase text-gray-800 font medium mb-2 tracking-wide">
                    Contato
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <form className="flex-1 border-solid shadow-neon rounded-2x1 flex flex-col gap-y-6 pb-24 p-6">
            <textarea
              className="bg-transparent border-b py-3 outline-none-w-full placeholder:text-red-700 focus:border-neon transition-all"
              type="text"
              placeholder="Nome"
            ></textarea>
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-red-700 focus:border-neon transition-all"
              type="text"
              placeholder="Email"
            ></textarea>
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-red-700 focus:border-neon transition-all resize-none mb-12"
              type="text"
              placeholder="Mensagem"
            ></textarea>
            <button className="bg-red-700 w-60 h-20 bg-lg borde-neon text-white rounded-full">
              Mandar Mensagem
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
