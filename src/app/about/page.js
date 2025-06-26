export default function About(){
return(
    <section className="min-h-screen py-10 px-40 text-white bg-black">
    <div className="text-center mx-w-4xl mx-auto ">
            <h1 className="text-4xl font-bold text-orange-500 mb-4 ">About Me</h1>
            <p>I’m<span className="font-bold text-white"> M Zain Akram</span>, a passionate Web Developer from Pakistan. I love building responsive and user-friendly websites using modern tools like React, Next.js, Tailwind CSS, and more.</p>
            </div>
            <div className="mt-4">
            <h1 className="text-2xl font-bold text-orange-500 mb-2">Education</h1>
            <ul>
            <li>Bachelor's in Information Technology (Graduation Year: 2024)</li>
            </ul>
            </div>
            <div>
            <h1 className="text-2xl font-bold text-orange-500 mt-4 mb-2">Skills</h1>
            <ul className="list-disc">
                
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Tailwind CSS</li>
            <li>REST APIs & JSON</li>
            <li>Git & GitHub</li>
            
            </ul>
        
        </div>
    </section>
    

)
}