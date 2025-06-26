export default function Contact(){
    return(
        <section className="text-center">
            <div>
                <h1 className="text-4xl font-bold text-orange-500 mt-20">Contact Me
                </h1>
                <p className="text-zinc-400 mt-6 ">Interested in working together or have any questions? Feel free to reach out!</p>
                </div>
                <div className="text-start p-6 border rounded-xl bg-zinc-900 border-orange-500 mt-6 mx-90 space-y-4">
                    <p>
                       <span className="text-orange-500  font-bold mb-6"> Name: </span>M Zain Akram
                    </p>
                    <p>
                       <span className="text-orange-500  font-bold"> Email: </span><a href="zain341802@gmail.com" className="hover:underline">zain341802@gmail.com</a>
                    </p>
                    <p>
                       <span className="text-orange-500  font-bold"> Phone: </span><a href="03198738695" className="hover:underline">03198738695</a>
                    </p>
                    <p>
                       <span className="text-orange-500  font-bold"> GitHub: </span><a href="https://github.com/zainakram-dev/zainakram.github.io" target="_blank" className="hover:underline">github.com/zainakram-dev</a>
                    </p>
                </div>
        </section>
    )
}