import Layout from "../components/layouts/layout"
import React from 'react'
import { A, MyButton } from '../components/styles/style'
import { Helmet } from "react-helmet"

const Register = () => {

  return (
    <Layout>
      <Helmet>
        <title>会议注册 - 第四届差传大会</title>
        <meta name="description" content="会议注册 - 英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
      <div className="flex flex-wrap justify-center" style={{backgroundImage: `url(/static/hays.jpg)`}}>
        <div id='sec1' className='container mx-auto px-3 lg:px-32 flex flex-wrap justify-center'>
          <MyButton className='my-10'>注册已过期</MyButton>
          <p className='w-full text-center'>
            感谢主今年2018我们收到的报名人数已经满员。暂时不能接受新的报名和缴费。已经报名的尚未缴费的请在近期缴费。<p className='line-through'>如果您还
            没有报名，我们可以把您放到等候名单上，一旦有名额空出，我们将联系您。谢谢您的支持和谅解。</p>
            询问:  cmcUK@afcinc.org
          </p>
          <div className='flex flex-wrap w-full justify-center'>
            <div className='md:w-1/4 mx-3'>
              <h5 className='mt-4 mb-2'>时间:</h5>
              <p>2018.04.02 (Mon) 2pm <br /> to <br /> 2018.04.05 (Thur) 3pm</p>
            </div>
            <div className='md:w-1/4 mx-3'>
              <h5 className='mt-4 mb-2'>地点:</h5>
              <p>
                The Hays Conference Centre, <br />
                Swanwick, Alfreton <br />
                Derbyshire <br />
                DE55 1AU
              </p>
            </div>
          </div>
        </div>

        <div id='sec2' className='flex flex-wrap my-10 justify-center items-center mx-3'>
          <div className='md:w-1/3 md:mr-10'>
            <img className='min-w-20' src='./images/map2.webp' />
          </div>
          <div className='md:w-1/5 md:ml-20 shadow-lg p-4 hover:shadow-2xl transform hover:scale-105 transition duration-500' style={{borderRadius: '2rem'}}>
            <a href='https://www.google.co.uk/maps/dir//The+Hayes+Conference+Centre/@53.1843163,-1.5432289,9z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x4879929203b0f6c9:0x83c1449802c957d7!2m2!1d-1.3891516!2d53.0691401'>
              <img src='./images/googlemaps.png' />
            </a>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Register