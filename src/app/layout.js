
import "./globals.css";

import Navbar from '../components/Navbar'
export const metadata={
  title:"M Zain Akram - portfolio",
  description:"web developer portfolio of M Zain Akram"
}
export default function AnyName({children}){
return(
<html>
  <body >
    <Navbar/>
   <main > {children}</main>
  </body>
</html>
)
}