import Layout from "../components/layouts/layout"
import React from 'react'
import { A, MyButton } from '../components/styles/style'
import { Helmet } from "react-helmet"

const Schedule = () => {

  return (
    <Layout>
      <Helmet>
        <title>大会议程 - 第四届差传大会</title>
        <meta name="description" content="大会议程 - 英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
      <div className="flex flex-wrap justify-center">
        <div id='sec1' className='w-full flex justify-center'>
          <img className='md:max-w-60' src='./images/timetable.jpg' />
        </div>
        <div id='sec2' className='mx-3 my-10 w-full text-center'>
          <h4>Workshop</h4>
          我们将尽快更新消息，谢谢您的耐心等待！
        </div>
      </div>

    </Layout>
  )
}

export default Schedule