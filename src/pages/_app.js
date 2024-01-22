import '@/styles/globals.css'

//INTERNAL IMPORT
//import NavBar from '@/components/NavBar/NavBar'
import { NavBar, Footer } from '@/components/componentsindex'
const MyApp = ({ Component, pageProps }) => (
    <div>
        <NavBar />       
        <Component {...pageProps} />
        <Footer />
    </div>

)
export default MyApp