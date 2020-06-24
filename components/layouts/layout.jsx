import Header from "./header"
import Nav from './nav'
import Footer from './footer'
import { Helmet } from "react-helmet"

const Layout = (props) => {
	return (
		<div id='app' className='high-specificity text-base w-full'>
			<Helmet>
        <title>英国第四届差传大会</title>
        <meta name="description" content="英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
				<Header />
				<Nav />
				{props.children}
				<Footer />
		</div>
	)
}
  
export default Layout

