export default function Services(){
    return(
        <section className="text-center">
            <div className="mt-10">
                <h1 className="text-4xl font-bold text-orange-500 ">My Services</h1>
            </div>
            <div className="mt-10 border rounded-xl border-orange-500 mx-40 py-6 bg-zinc-900 hover:shadow-orange-500/40 hover:shadow-xl">
                
                    <h1 className="text-xl mb-2">Web Development</h1>
                    <p className="">Building modern, fast, and responsive websites using React, Next.js, and Tailwind CSS.</p>
            </div>

            <div className="mt-10 border rounded-xl border-orange-500 mx-40 py-6 bg-zinc-900 hover:shadow-orange-500/40 hover:shadow-xl">
                
                <h1 className="text-xl mb-2">UI/UX Design</h1>
                <p className="">Designing clean and attractive interfaces with a focus on user experience and accessibility.</p>
        </div>

        <div className="mt-10 border rounded-xl border-orange-500 mx-40 py-6 bg-zinc-900 hover:shadow-orange-500/40 hover:shadow-xl">
                
                <h1 className="text-xl mb-2">API Integration</h1>
                <p className="">Connecting your frontend to backend APIs using REST and handling real-time data.</p>
        </div>


        </section>
    )
}