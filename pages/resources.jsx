import Layout from "../components/layouts/layout"
import React from 'react'
import { A, MyButton } from '../components/styles/style'
import { Helmet } from "react-helmet"
import ImageGallery from 'react-image-gallery'

const Resources = () => {
  const images = [
    {
      original: './gallery/image18.jpg',
      thumbnail: './gallery/image18.jpg',
    },
    {
      original: './gallery/image3.jpg',
      thumbnail: './gallery/image3.jpg',
    },
    {
      original: './gallery/image17.jpg',
      thumbnail: './gallery/image17.jpg',
    },
    {
      original: './gallery/image4.jpg',
      thumbnail: './gallery/image4.jpg',
    },
    {
      original: './gallery/image5.jpg',
      thumbnail: './gallery/image5.jpg',
    },  
    {
      original: './gallery/image6.jpg',
      thumbnail: './gallery/image6.jpg',
    },
    {
      original: './gallery/image7.jpg',
      thumbnail: './gallery/image7.jpg',
    },
    {
      original: './gallery/image8.jpg',
      thumbnail: './gallery/image8.jpg',
    },
    {
      original: './gallery/image9.jpg',
      thumbnail: './gallery/image9.jpg',
    },
    {
      original: './gallery/image10.jpg',
      thumbnail: './gallery/image10.jpg',
    },
    {
      original: './gallery/image11.jpg',
      thumbnail: './gallery/image11.jpg',
    },
    {
      original: './gallery/image12.jpg',
      thumbnail: './gallery/image12.jpg',
    },
    {
      original: './gallery/image13.jpg',
      thumbnail: './gallery/image13.jpg',
    },
    {
      original: './gallery/image14.jpg',
      thumbnail: './gallery/image14.jpg',
    },
    {
      original: './gallery/image3.jpg',
      thumbnail: './gallery/image3.jpg',
    },
    {
      original: './gallery/image15.jpg',
      thumbnail: './gallery/image15.jpg',
    },
    {
      original: './gallery/image16.jpg',
      thumbnail: './gallery/image16.jpg',
    },
    {
      original: './gallery/image2.jpg',
      thumbnail: './gallery/image2.jpg',
    },
    {
      original: './gallery/image1.jpg',
      thumbnail: './gallery/image1.jpg',
    },
    {
      original: './gallery/image19.jpg',
      thumbnail: './gallery/image19.jpg',
    },
    {
      original: './gallery/image20.jpg',
      thumbnail: './gallery/image20.jpg',
    },
  ]

  return (
    <Layout>
      <Helmet>
        <title>大会资料 - 第四届差传大会</title>
        <meta name="description" content="大会资料 - 英国第四届差传大会 (4CMCUK)" />
        <meta name="keywords" content="UKAFC, 使者协会, 差传大会, CMCUK" />
      </Helmet>
      <div className="flex flex-wrap justify-center">
        <div id='sec1' className='flex flex-wrap bg-gray-900 text-white w-full justify-center items-center pt-3 pb-1 px-2'>
          <h1 className='text-2xl'>图文相片</h1>
        </div>
        <div className='text-lg bg-black w-full'>
          <ImageGallery items={images} />
        </div>


        <div id='sec2' className='flex flex-wrap bg-gray-600 text-white w-full justify-center items-center pt-3 pb-1 px-2'>
          <h1 className='text-2xl'>视频音频</h1>
        </div>
        <div className='mx-auto text-lg md:px-16 py-10 xl:py-20 justify-between flex flex-wrap'>
          <iframe className='m-3' width='400' height='200' 
            src='https://player.vimeo.com/video/102156723?autoplay=false&loop=false&byline=false&portrait=false&title=false' 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          <iframe className='m-3' width="400" height="200" src="https://www.youtube.com/embed/fbhrcTS1Mxw" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          <iframe className='m-3' width="400" height="200" src="https://www.youtube.com/embed/K90oHAUy7ZM" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
          <iframe className='m-3' width="400" height="200" src="https://www.youtube.com/embed/eqjYj6-_s4Y" 
            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>

    </Layout>
  )
}

export default Resources