"use client"
import Link from 'next/link'

import {usePathname} from 'next/navigation'


const links=[
    {href:'/', label:'Home'},
    {href:'/about', label:"About Me"},
    {href:'/contact', label:"Contact"},
    {href:'/portfolio', label:"Portfolio"},
    {href:'/services', label:"Services"}

]

export default function Navbar(){
const pathname=usePathname()

return(
<nav className="py-4 px-6 text-white shadow-md ">
<div className="max-w-7xl mx-auto flex items-center justify-between">
    <h1 className="text-orange-500 text-2xl font-bold  ">Zain<span className="text-white ">Dev</span></h1>
    <ul className="flex gap-6 text-sm font-medium  ">
        {
            links.map(({href,label})=>(
                <li key={href}>
                <Link href={href} className={` hover:text-orange-500 ${pathname === href ? "text-orange-500" : '' }`}>
{label}
                </Link> 
                </li>
            ))}  
    </ul>
</div>
</nav>
)}