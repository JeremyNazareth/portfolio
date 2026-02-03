
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
            hover:bg-secondary hover:text-black hover:shadow-secondary">Descargar CV</button>
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
                                <p className="text-lg mb-1">Proyecto desarrollado que simula un buscador de peliculas real, con buscador, sistema de filtros y listados de favoritos.
                                    Este proyecto tuvo como objetivo aprender a usar React, debido que fué mi primer contacto con él.
                                </p>
                            </header>
                            <div  className='my-1'>
                                <strong className='text-secondary'>Características</strong>
                                <ul className='ml-8 list-disc'>
                                    <li>Filtrado de peliculas.</li>
                                    <li>Listado de peliculas favoritas.</li>
                                    <li>Consumo de API de TMDB.</li>
                                    <li>Documentación del codigo completo.</li>
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
                                <h1 className="text-2xl font-semibold text-secondary"> ClassMate</h1>
                                <p className="text-lg">Proyecto universitario que desarrollé en base a la idea de tener una herramienta útil y precisa para mis necesidades en todo el proceso de estudio.
                                </p>
                            </header>
                            <div  className='my-1'>
                                <strong className='text-secondary'>Características</strong>
                                <ul className='ml-8 list-disc'>
                                    <li>Calculadora de notas.</li>
                                    <li>Listado de actividades.</li>
                                    <li>Creacion de apuntes.</li>
                                    <li>Recordatorio de apuntes.</li>
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
            <h1 className="text-3xl font-bold text-secondary mb-2 ">Sobre mi</h1>
            <p className='text-xl'>Me llamo <strong>Jeremy Nazareth Reyes Riquelme</strong>,
            titulado como <strong>Ingeniero en informática</strong>,
             carrera que en la que formé fundamentos sólidos para poder especializarme en el <strong>front-end </strong>
            con más de un año de experiencia desarrollando aplicaciones web.</p>
            <p className='text-xl my-2'>Siempre me caractericé por ser una persona que ama aprender y mejorar cada día,
                 encontrando mi lugar en la programación. Cada proyecto nuevo me lo tomo como un desafio, por lo que en cada uno
                 incorporo una tecnología nueva.
            </p>
            <p className='text-xl'>A la espera de una <strong>oportunidad</strong> 💼 para explotar al máximo mis habilidades.</p>
        </section>

        </>
    )
}