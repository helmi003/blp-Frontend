import '../styles/globals.css'
import Layout from './components/Layout/Layout';
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
    <title>BLP</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Component {...pageProps} />
      
    </Layout>
  )
 
}

export default MyApp
