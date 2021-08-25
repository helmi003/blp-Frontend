import '../styles/globals.css'
import Layout from './components/Layout/Layout';
//import { ChakraProvider } from "@chakra-ui/react"
//import { RtlProvider } from "@/components/rtl-provider"
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    
        <Component {...pageProps} />
      
    </Layout>
  )
 
}

export default MyApp
