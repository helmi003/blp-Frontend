import '../styles/globals.css'
import Layout from './components/Layout/Layout';
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    <title>BLP</title>
        <Component {...pageProps} />
      
    </Layout>
  )
 
}

export default MyApp
