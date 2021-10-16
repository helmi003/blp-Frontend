import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        
        <meta name="description" content=""/>
        <link rel="icon" href="assets/images/logo/favicon.ico"/>
        <link rel="stylesheet" href="assets/css/vendor/vendor.min.css"/>
        <link rel="stylesheet" href="assets/css/plugins/plugins.min.css"/>
        <link rel="stylesheet" href="assets/css/style.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="assets/js/vendor/modernizr-2.8.3.min.js"></script>
          <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
          <script src="assets/js/vendor/jquery-migrate-3.3.0.min.js"></script>
          <script src="assets/js/plugins/plugins.min.js"></script>
          <script src="assets/js/main.js"></script>

          <script src="assets/js/vendor/bootstrap.min.js"></script>

          

        </body>
      </Html>
    )
  }
}

export default MyDocument