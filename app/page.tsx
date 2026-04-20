
import NavegationButtons from './components/NavigationButtons'
import CopyEmailButton from './components/CopyEmailButton'
import { FaGithub } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";


export default function Page(){
    
    const copyEmail = () =>{
        navigator.clipboard.writeText("jer.reyesr@outlook.com")
    }
    
    return(
        <>
            <section id="home" className="pt-20 h-6/8 lg:pt-40 scroll-m-80">
                <h1 className="text-3xl md:text-2xl">¡Bienvenido a mi portfolio!</h1>
                
                <div className="flex text-5xl items-end">
                    <p className="flex-initial leading-13 lg:text-4xl text-3xl text-secondary">Soy&nbsp;
                        <strong  className="lg:text-5xl text-4xl text-secondary font-semibold flex-initial sm:text-5xl">Jeremy Nazareth</strong>
                    </p>

                </div>
                <p className="text-3xl text-gray-300 md:text-2xl">Junior front-end Developer</p>
                <ul className='redirection-badges flex gap-2 my-2'>
                    <li><a target='_blank' href="https://github.com/JeremyNazareth/"><img src="github_dark.svg" alt="" /></a></li>
                    <li><a target='_blank' href="https://linkedin.com/in/jeremynazarethrr"><img src="linkedin.svg" alt="" /></a></li>
                    <li><CopyEmailButton/></li>
                </ul>
                <button 
                className="border-secondary transition-all duration-300 cursor-pointer text-secondary bg-primary border-2 px-3 py-1 rounded-xl my-4 shadow-2xl shadow-button text-lg
                hover:bg-secondary hover:text-black hover:shadow-secondary"><a href="cvJeremyReyes.pdf" download>Descargar CV</a></button>
            </section>
            
            <NavegationButtons/>

            <section id="projects" className="projects-section scroll-mt-5">
                <h1 className="text-3xl font-semibold text-secondary">Proyectos</h1>
                <div className="flex mt-5">   
                    <div className="projects ">
                        <article className="flex">       
                            <div className="w-1/8">
                                <div className="h-full flex">
                                    <div className="h-full w-1 bg-secondary mx-auto"> </div>
                                    <div className="h-4 w-4 rounded-full bg-secondary relative right-[50%] top-2 shadow-primary"></div>
                                </div>
                            </div>
                            <div className='w-7/8'>
                                <header>
                                    <h1 className="text-2xl font-semibold text-secondary"> Movie Search</h1>
                                    <p className="text-lg mb-1">El primer proyecto que desarrollé con React, mi primer contacto con esta tecnología. La aplicación web simula un buscador de películas real, con un sistema de filtrado y un listado en el que puedes agregar tus películas favoritas,
                                        el objetivo de este proyecto fue aprender a usar las ventajas del framework por lo que implementé las funciones principales de este (hooks, componentes reutilizables, gestión de estado) .
                                    </p>
                                </header>
                                <div  className='my-1'>
                                    <strong className='text-secondary'>Características</strong>
                                    <ul className='ml-8 list-disc'>
                                        <li>Filtrado de películas según el genero deseado.</li>
                                        <li>Gestión de peliculas favoritas.</li>
                                        <li>Consumo de API REST de The Movie Database.</li>
                                        <li>19 generos y más de 100 películas.</li>
                                        <li>Documentación del código completo.</li>
                                    </ul>
                                </div>
                                    
                                <div className='project-img max-w-md relative'> 
                                    <img className="flex-1 border-2 text-secondary rounded-3xl p-1 my-4 w-md h-auto shadow-primary" src="movie-search-project.png" alt="" />        
                                    <ul className='absolute flex text-secondary inset-x-0 inset-y-0 items-end justify-end pb-4 pr-5'>
                                        <li><a target='_blank' href="https://github.com/JeremyNazareth/react-movie-search"><FaGithub /></a></li>
                                        <li><a target='_blank' href="https://jeremynazareth.github.io/react-movie-search/"><GoBrowser /></a></li>
                                    </ul>
                                </div>
                                
                                <ul className="project-badges flex flex-wrap max-w-md gap-3 mt-3 mb-6  ">
                                    <li className="items-center">
                                        <img className="badgeIcon" src="React_light.svg" alt="" />
                                        <p>React</p>
                                    </li>
                                    <li className="items-center">
                                        <img className="badgeIcon" src="vitejs.svg" alt="" />
                                        <p>Vite</p>
                                    </li>
                                    <li className="items-center">
                                        <img className="badgeIcon" src="typescript.svg" alt="" />
                                        <p>Typescript</p>
                                    </li>
                                    <li className="items-center">
                                        <img className="badgeIcon" src="html5.svg" alt="" />
                                        <p>HTML5</p>
                                    </li>
                                </ul>
                            </div>
                            
                        </article>
                        <article className="flex">       
                            <div className="w-1/8">
                                <div className="h-full flex">
                                    <div className="h-full w-1 bg-secondary mx-auto"> </div>
                                    <div className="h-4 w-4 rounded-full bg-secondary relative right-[50%] top-2 shadow-primary"></div>
                                </div>
                            </div>
                            <div className='w-7/8'>
                                <header>
                                    <h1 className="text-2xl font-semibold text-secondary"> EasyMock (En desarrollo)</h1>
                                    <p className="text-lg">Easy Mock es una herramienta en desarrollo que permite generar datos falsos estructurados y personalizables para pruebas, prototipos o cualquier entorno que requiera información simulada.
                                         Una de sus grandes fortalezas es la interfaz inspirada en un explorador de archivos, diseñada para que cualquier usuario de computadoras se sienta inmediatamente familiarizado.
                                    </p>
                                </header>
                                <div  className='my-1'>
                                    <strong className='text-secondary'>Características</strong>
                                    <ul className='ml-8 list-disc'>
                                        <li>Interfaz tipo explorador de archivos.</li>
                                        <li>Generación bajo demanda.</li>
                                        <li>Múltiples tipos de datos.</li>
                                        <li>Modo interactivo</li>
                                    </ul>
                                </div>
                                
                                <div className='project-img max-w-md relative'> 
                                    <img className="flex-1 border-2 text-secondary rounded-3xl p-1 my-4 w-md h-auto shadow-primary" src="easymock_early_figmaSketch.png" alt="" />        
                                    <ul className='absolute flex text-secondary inset-x-0 inset-y-0 items-end justify-end pb-4 pr-5'>
                                        <li><a target='_blank' href="https://github.com/JeremyNazareth/easymock-data-generator"><FaGithub /></a></li>    
                                    </ul>
                                </div>    
                                <ul className="project-badges flex flex-wrap max-w-md gap-3 mt-3 mb-6  ">                                  
                                    <li className="items-center"> <img src="expressjs.svg" alt="" />
                                        <p>Express</p>
                                    </li>
                                    <li className="items-center"> <img src="nodejs.svg" alt="" />
                                        <p>Node.js</p>
                                    </li>
                                    <li className="items-center"><img src="nextjs_icon_dark.svg" alt="" />
                                        <p>Next.js</p>
                                    </li>
                                    <li className="items-center"><img className="project-badgeIcon" src="typescript.svg" alt="" />
                                        <p>TypeScript</p>
                                    </li>
                                    <li className="items-center"><img className="project-badgeIcon" src="html5.svg" alt="" />
                                        <p>HTML5</p>
                                    </li>
                                    <li className="items-center"><img src="tailwindcss.svg" alt="" />
                                        <p>Tailwindcss</p>
                                    </li>
                                </ul>
                            </div>
                        </article>
                        <article className="flex">       
                            <div className="w-1/8">
                                <div className="h-full flex">
                                    <div className="h-full w-1 bg-secondary mx-auto"> </div>
                                    <div className="h-4 w-4 rounded-full bg-secondary relative right-[50%] top-2 shadow-primary"></div>
                                </div>
                            </div>
                            <div className='w-7/8'>
                                <header>
                                    <h1 className="text-2xl font-semibold text-secondary"> ClassMate</h1>
                                    <p className="text-lg">Proyecto Universitario que desarrollé mientras estudiaba. La idea surgió en base de tener una herramienta completa que me acompañara en mi proceso de aprendizaje de manera
                                        en la que podría hacer seguimiento de las responsabilidades que tenía de estudiante, con lo que creé esta página web.
                                    </p>
                                </header>
                                <div  className='my-1'>
                                    <strong className='text-secondary'>Características</strong>
                                    <ul className='ml-8 list-disc'>
                                        <li>Calculadora de notas.</li>
                                        <li>Seguimiento de actividades.</li>
                                        <li>Creacion de apuntes.</li>
                                    </ul>
                                </div>
                                
                                <div className='project-img max-w-md relative'> 
                                    <img className="flex-1 border-2 text-secondary rounded-3xl p-1 my-4 w-md h-auto shadow-primary" src="classmate-project.png" alt="" />        
                                    <ul className='absolute flex text-secondary inset-x-0 inset-y-0 items-end justify-end pb-4 pr-5'>
                                        <li><a target='_blank' href="https://github.com/JeremyNazareth/react-movie-search"><FaGithub /></a></li>    
                                    </ul>
                                </div>    
                                <ul className="project-badges flex flex-wrap max-w-md gap-3 mt-3">
                                    <li className="items-center"><img className="project-badgeIcon" src="html5.svg" alt="" />
                                        <p>HTML5</p>
                                    </li>
                                    <li className="items-center"><img className="project-badgeIcon" src="javascript.svg" alt="" />
                                        <p>JavaScript</p>
                                    </li>
                                    <li className="items-center"><img className="project-badgeIcon" src="css.svg" alt="" />
                                        <p>CSS</p>
                                    </li>

                                </ul>
                            </div>
                        </article>
                    </div>
                    
                </div>
                
                
                
            </section>
            
            
            <section id="skills" className='scroll-mt-20'>
                <h1 className='text-3xl font-bold text-secondary text-center'>Habilidades</h1>
                <ul className='skills-badges flex flex-wrap justify-center m-5 gap-10'>
                    <li><img src="html5.svg" alt="" />HTML5</li>
                    <li><img src="javascript.svg" alt="" />JavaScript</li>
                    <li><img src="css_old.svg" alt="" />CSS</li>
                    <li><img src="tailwindcss.svg" alt="" />Tailwindcss</li>
                    <li><img src="React_dark.svg" alt="" />React</li>
                    <li><img src="nextjs_icon_dark.svg" alt="" />Next.js</li>
                    <li><img src="python.svg" alt="" />Python</li>
                    <li><img src="mysql-icon-dark.svg" alt="" />MySQL</li>
                </ul>
            </section>
            

            <section id="about" className='scroll-mt-15'>
                <h1 className="text-3xl font-bold text-secondary mb-2 ">Sobre mí</h1>
                <p className='text-xl'>Me llamo <strong>Jeremy Nazareth Reyes Riquelme</strong>,
                titulado como <strong>Ingeniero en informática</strong>,
                carrera en la que formé fundamentos sólidos para especializarme en el <strong>front-end</strong>
                &nbsp;con más de un año de experiencia desarrollando aplicaciones web.</p>
                <p className='text-xl my-2'>Siempre me caractericé por ser una persona que ama mejorar y aprender cada día,
                    llegando por naturaleza a la programación. Cada proyecto nuevo me lo tomo como un desafio, por lo que en cada uno
                    incorporo una tecnología nueva.
                </p>
                <p className='text-xl'>Actualmente me encuentro en transición a full-stack, buscando un equipo donde pueda explotar al máximo mis habilidades.</p>
            </section>
        </>
    )
}