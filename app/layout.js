import "@/styles/reset.css";
import "@/styles/global.css"; //@ ile ../gerek kalmaz jsconfig.json yapıstırdıgımız kod bu ısı gorur
import {Inter} from "@next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
const interFontFamily=Inter({subsets:["latin"]});
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFontFamily.className}>
      <body >
        <Header/>
       <main>{children}</main> 
        <Footer/>
        </body>
    </html>
  );
}
