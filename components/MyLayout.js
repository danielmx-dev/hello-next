import Head from 'next/head'
import Header from './Header'
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>TV Show Finder</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </Head>
    <Header />
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout
