const projects=[
    {
        title:"Movie Explorer",
        description:"Search and explore movies using TMDB API with dynamic routing.",
        link:"https://github.com/zainakram-dev"
},
{
    title:"Weather App",
    description:"Real-time weather updates using OpenWeatherMap API and geolocation.",
    link:"https://github.com/zainakram-dev"

},
{
    title:"Stop Watch",
    description:"A simple stop watch app using next.js",
    link:"https://github.com/zainakram-dev"
},
{
    title: "To-Do List App",
    description: "A simple and efficient to-do list app to manage daily tasks.",
    link: "https://github.com/zainakram-dev",
}
]
export default function Portfolio (){
return(
    <section className="text-center ">
        <div>
            <h1 className=" text-orange-500 text-3xl font-bold mt-10 ">My Projects</h1>
       
        <div className="mt-10">
            {projects.map((project,index)=>(
                <a key={index} href={project.link} target="_blank" className="block mt-10 border rounded-xl border-orange-500 mx-40 py-6 bg-zinc-900 hover:shadow-orange-500/40 hover:shadow-xl">
                <h1 className="text-xl font-bold text-orange-500 ">{project.title}</h1>
                <p >{project.description}</p>

                </a>
            ))}

        </div>
           
            </div>
    </section>
)

}