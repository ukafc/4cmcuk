import Layout from "../components/layouts/layout"
import { Button } from "../components/styles/style"


const IndexPage = () => {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
        <Button>BUTTON EXAMPLE</Button>
      </div>
    </Layout>
  )
}

export default IndexPage