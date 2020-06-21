import Header from "./header"
import Nav from './nav'
import { Helmet } from "react-helmet"

const Layout = (props) => {
	return (
		<div id='website' className='high-specificity'>
			<Helmet>
        <title>英国第四届差传大会</title>
        <meta name="description" content="英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
				<Header />
				<Nav />
				{props.children}
		</div>
	)
}
  
export default Layout

