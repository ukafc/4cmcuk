import Header from "./header"

const Layout = (props) => {
	return (
		<div className="bg-black">
				<Header />
				{props.children}
		</div>
	)
}
  
export default Layout

