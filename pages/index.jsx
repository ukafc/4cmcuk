import Layout from "../components/layouts/layout"
import { Button } from "../components/styles/style"


const IndexPage = () => {
  return (
    <Layout>
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
      </div>
      <Button>THIS IS BUTTONd</Button>
    </Layout>
  )
}

export default IndexPage