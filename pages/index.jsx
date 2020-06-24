import Layout from "../components/layouts/layout"
import React from 'react'
//import ReactPlayer from 'react-player'
import { A, MyButton } from '../components/styles/style'

const IndexPage = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center min-h-90">
        
        <div className='flex flex-wrap bg-afc text-white w-full justify-center items-center pt-3 pb-1 px-2'>
          <h1 className='text-xl'>大会通知 Announcement: &nbsp; </h1>
          <h1 className='inline-block text-lg'>
            <A className='text-white underline' href='https://ukafc.org/%e5%b7%ae%e4%bc%a0%e4%ba%8b%e5%b7%a5/'>下届 CMC 差传大会将在2021年4月举行！</A>
          </h1>
        </div>

        <iframe className='w-full min-h-90 bg-black' frameBorder='0' allow="autoplay; fullscreen; encrypted-media"
          src='https://player.vimeo.com/video/102156723?autoplay=true&loop=false&byline=false&portrait=false&title=false&muted=true' 
        />

        <div className="ipadp:min-h-100 flex flex-wrap justify-center items-center py-10">
          <div className="container mx-auto justify-center flex flex-wrap text-center">
            <div className="text-5xl font-semibold text-afc w-full leading-tight mt-5">破茧齐出、同颂主荣.</div>
            <p className="mt-2 text-gray-600 px-2">大会已于2018年4月5日结束, <A href='https://ukafc.org/%e5%b7%ae%e4%bc%a0%e4%ba%8b%e5%b7%a5/'>下一届筹备中</A>.</p>
          </div>
          <div className='w-full flex justify-center my-10'><img src='./images/mission01.jpg' className='w-full md:max-w-70' style={{borderRadius: '2rem'}} /></div>
          
          <div className="flex flex-wrap text-gray-800 mt-10 pb-20 justify-center w-full">
            <h1 className="w-full text-black text-center text-2xl mb-5">快速链接</h1>
              <A href='/guide#sec3' insite><MyButton>讲员介绍</MyButton></A>
              <A href='https://goo.gl/forms/q8H4HPf1CvC6G4y32'><MyButton>在线报名表</MyButton></A>
              <A href='/schedule#sec1' insite><MyButton>大会日程</MyButton></A>
              <A href='http://goo.gl/iVzyZ' insite><MyButton>祷告守望</MyButton></A>
              <A href='/guide#sec4' insite><MyButton>下一步 Next Step</MyButton></A>
          </div>

          <div className="flex flex-wrap text-gray-800 mt-10 pb-20 justify-center">
            <h1 className="w-full text-black text-center text-2xl"> 
              下载资料
            </h1>
            <div className="flex justify-center items-center md:w-1/4 mx-3 px-5 py-2 mt-10 transform hover:-translate-y-6 transition duration-500 bg-gray-800 shadow-xs hover:shadow-2xl rounded-lg text-white">
              <a className='hover:text-gray-100 text-white' href='./files/CMC-2018-UK.jpg' target='_blank'>海报</a>
            </div>
            <div className="flex justify-center items-center md:w-1/4 mx-3 px-8 py-2 mt-10 transform hover:-translate-y-6 transition duration-500 bg-gray-500 shadow-xs hover:shadow-2xl rounded-lg text-white">
              <a className='hover:text-gray-300 text-white' href='./files/2018recordings.pdf' target='_blank'>大会录音清单</a>
            </div>
            <div className="flex justify-center items-center md:w-1/4 mx-3 px-5 py-2 mt-10 transform hover:-translate-y-6 transition duration-500 bg-white shadow-xs hover:shadow-2xl rounded-lg text-white">
              <a className='hover:text-gray-800 text-gray-600' href='./images/timetable.jpg' target='_blank'>日程安排</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage