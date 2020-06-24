
const Footer = () => {
  const thisYear = new Date()

	return (
		<div className="flex flex-wrap bg-gray-800 px-5 pt-8 text-gray-100">
			<div className='md:w-1/2 lg:w-1/4 px-3'>
        <h1 className='py-3 text-lg'>主办机构</h1>
        <img src='./images/afclogo.png' style={{maxWidth: '220px'}} />
      </div>
      <div className='md:w-1/2 lg:w-1/4 px-3'>
        <h1 className='py-3 text-lg'>协办机构</h1>
        <h2 className='text-sm text-gray-200'>
          英国循道衛理宣教部 <br />
          号角英国版等
        </h2>
      </div>
      <div className='md:w-1/2 lg:w-1/4 px-3'>
        <h1 className='py-3 text-lg text-gray-200'>时间 &#183; 地点</h1>
        <h2 className='text-sm'>02 - 05 April 2018 <br />
          The Hayes Conference Centre <br />
          Swanwick, Alfreton <br />
          Derbyshire <br />
          DE55 1AU
        </h2>
      </div>
      <div className='md:w-1/2 lg:w-1/4 px-3 flex items-center bg-gray-700'>
        <h1 className='py-3 text-xl'>
          “ 主耶稣说：你们岂不说『到收割的时候还有四个月』吗？我告诉你们，举目向田观看，庄稼已经熟了，可以收割了。(约 4：35) ”
        </h1>
      </div>
      <div className='flex justify-center w-full'>
        <p className='mt-12 mb-6 text-gray-400'>copyright © 2017 - {thisYear.getFullYear()} CMCUK. All rights reserved.</p>
      </div>
		</div>
	)

}
  
export default Footer

