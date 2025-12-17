
import NavegationButtons from './components/NavigationButtons'

export default function Page(){


    return(
        <>
        <section id="home" className="pt-40 scroll-m-80">
            <h1 className="text-3xl">¡Bienvenido a mi portfolio!</h1>
            <div className="flex text-5xl items-end">
                <p className="flex-initial leading-13 text-4xl text-secondary">Soy&nbsp;</p>
                <p className="text-5xl text-secondary font-semibold flex-initial sm:text-6xl">Jeremy Nazareth</p>
            </div>
            <p className="text-3xl text-gray-300">front-end Developer</p>
            <button className="border-secondary text-secondary bg-primary border-2 px-3 py-1 rounded-full my-4 shadow-primary text-lg">Descargar CV</button>
        </section>
        
        <NavegationButtons/>

        <section id="projects" className="projects-section">
            <h1 className="text-3xl font-semibold text-secondary">Proyectos</h1>
            <div className="projects-container flex mt-5">
                
                <div className="projects">
                    
                    <article className="flex">       
                        <div className="w-30">
                            <div className="h-full flex">
                                <div className="h-full w-1 bg-secondary mx-auto"> </div>
                                <div className="h-4 w-4 rounded-full bg-secondary relative right-[50%] top-2 shadow-primary"></div>
                            </div>
                        </div>
                        <div>
                            <header>
                                <h1 className="text-2xl font-semibold text-secondary"> Movie Search</h1>
                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim iure quod obcaecati magni voluptatem voluptates repellat libero aliquid commodi omnis porro, aspernatur soluta tempore beatae culpa perspiciatis! Placeat, minima?</p>
                            </header>
                            
                            <img className="border-2 text-secondary rounded-3xl p-1 my-4 w-md shadow-primary" src="movieSearch_Project.png" alt="" />        
                            <ul className="project-badges flex gap-3 mt-3 mb-6">
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
                                    <p>Html 5</p>
                                </li>
                            </ul>
                        </div>
                        
                    </article>
                    <article className="flex">       
                        <div className="w-30">
                            <div className="h-full flex">
                                <div className="h-full w-1 bg-secondary mx-auto"> </div>
                                <div className="h-4 w-4 rounded-full bg-secondary relative right-[50%] top-2 shadow-primary"></div>
                            </div>
                        </div>
                        <div>
                            <header>
                                <h1 className="text-2xl font-semibold text-secondary"> ClassMate</h1>
                                <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim iure quod obcaecati magni voluptatem voluptates repellat libero aliquid commodi omnis porro, aspernatur soluta tempore beatae culpa perspiciatis! Placeat, minima?</p>
                            </header>
                            
                            <img className="border-2 rounded-3xl p-1 my-4 w-md shadow-primary" src="movieSearch_Project.png" alt="" />        
                            <ul className="project-badges flex gap-3 mt-3">
                                <li className="items-center">
                                    <img className="project-badgeIcon" src="html5.svg" alt="" />
                                    <p>HTML5</p>
                                </li>
                                <li className="items-center">
                                    <img className="project-badgeIcon" src="javascript.svg" alt="" />
                                    <p>JavaScript</p>
                                </li>
                                <li className="items-center">
                                    <img className="project-badgeIcon" src="css.svg" alt="" />
                                    <p>CSS</p>
                                </li>

                            </ul>
                        </div>
                        
                    </article>
                </div>
                  
            </div>
            
            
            
        </section>
        
        
        <section id="skills">
            <h1 className='text-3xl font-bold text-secondary text-center'>Habilidades</h1>
            <ul className='skills-badges flex w-fit mx-auto m-5 gap-10'>
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
        

        <section id="about">
            <h1 className="text-3xl font-bold text-white">Sobre mi</h1>
            <h2 className="text-2xl w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime odit a natus vitae suscipit dolorem cum ducimus ut pariatur. Ipsam ut consectetur ab possimus modi deserunt neque eveniet! Provident, veniam!</h2>
        </section>

        </>
    )
}