import { NavButton, DropdownMenuBtn } from '../styles/style'
import { ActiveLink } from '../styles/ActiveLink'
import DropdownButton from './dropdownButton'
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Nav = () => {
	const activeClasses = "border-b-2 border-afc"
	const toggleClasses = "no-underline uppercase tracking-wide font-bold text-base py-3 mr-4 text-gray-900 border-0 bg-transparent -mt-1"
	return (
    <div className="flex flex-wrap justify-center md:sticky top-0 left-0 bg-gray-100 shadow-md pt-2 high-specificity px-2 z-50">
      <ActiveLink href="/" activeClassName={activeClasses}><NavButton className='mr-10'>主页</NavButton></ActiveLink>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会指南</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/guide#sec1" activeClassName={activeClasses}><DropdownMenuBtn>价值使命</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec2" activeClassName={activeClasses}><DropdownMenuBtn>信仰告白</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec3" activeClassName={activeClasses}><DropdownMenuBtn>讲员介绍2018</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec4" activeClassName={activeClasses}><DropdownMenuBtn>下一步Next Step</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec5" activeClassName={activeClasses}><DropdownMenuBtn>大会组委</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec6" activeClassName={activeClasses}><DropdownMenuBtn>会场示图</DropdownMenuBtn></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>会议注册</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/register" activeClassName={activeClasses}><DropdownMenuBtn>报名参加</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/register#sec2" activeClassName={activeClasses}><DropdownMenuBtn>交通住宿</DropdownMenuBtn></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会议程</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/schedule#sec1" activeClassName={activeClasses}><DropdownMenuBtn>日程安排</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/schedule#sec2" activeClassName={activeClasses}><DropdownMenuBtn>Workshop</DropdownMenuBtn></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会资料</div>
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem><ActiveLink href="/resources#sec1" activeClassName={activeClasses}><DropdownMenuBtn>往届回顾</DropdownMenuBtn></ActiveLink></DropdownItem> */}
          <DropdownItem><ActiveLink href="/resources#sec1" activeClassName={activeClasses}><DropdownMenuBtn>图文相片</DropdownMenuBtn></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/resources#sec2" activeClassName={activeClasses}><DropdownMenuBtn>视频音频</DropdownMenuBtn></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <ActiveLink href="/contact" activeClassName={activeClasses}><NavButton className='ml-3'>联系我们</NavButton></ActiveLink>
    </div>
		
	)

}
  
export default Nav

