
import Link from "next/link";
export default function Home() {
  return (
   
    <section className="min-h-screen bg-black flex items-center  gap-5 flex-col md:flex-row">
      <div className="text-center">
        <p className="text-orange-500 mb-2 text-lg">
  Hello, I am </p>
   <h1 className="font-bold text-4xl md:text-6xl text-white ">M Zain Akram</h1>
      </div>
      <div>
<p className="text-gray-500 max-w-md  mt-2">         
 A Passionate Web Developer skilled in React, Next.js, Tailwind CSS, and more. I design clean UIs and build modern web experiences.
</p>
<div className="mt-6 flex justify-center gap-4">
  <Link href="/Zain.pdf" className="rounded-lg bg-orange-500 px-3 py-2 hover:bg-orange-600 ">Download CV</Link>
  <Link href="https://github.com/zainakram-dev/zainakram.github.io" className="rounded-lg text-orange-500 border border-orange-500 px-3 py-2 hover:bg-orange-500 hover:text-white duration-300">My Work</Link>
</div>
      </div>
      <div className=" mt-3 flex items-center justify-center" >
      <div className="w-64 h-64 rounded-full border-4 border-orange-500 shadow-lg overflow-hidden">
<img src="zain.jpeg " alt="zain img" className="w-full h-full object-cover"/>
</div>
</div>
    </section>

   
  );
}
