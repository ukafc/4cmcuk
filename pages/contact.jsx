import Layout from "../components/layouts/layout"
import React from 'react'
import { A, MyButton } from '../components/styles/style'
import { Helmet } from "react-helmet"
import ContactForm from "../components/layouts/contactForm"

const Contact = () => {

  return (
    <Layout>
      <Helmet>
        <title>联系我们 - 第四届差传大会</title>
        <meta name="description" content="联系我们 - 英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
      <div className="flex flex-wrap justify-center pt-10 pb-20">
        <div className='w-full flex justify-center'>或 &nbsp;<A href="mailto:info@ukafc.org">点击此处</A></div>
        <div className="w-full md:max-w-lg">
          <ContactForm />
        </div>
      </div>

    </Layout>
  )
}

export default Contact