import { NavButton, DropdownMenuBtn } from '../styles/style'
import { ActiveLink } from '../styles/ActiveLink'
import DropdownButton from './dropdownButton'
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'; 

const Nav = () => {
	const activeClasses = "border-b-2 border-afc"
	const toggleClasses = "no-underline uppercase tracking-wide font-bold text-base py-3 mr-4 text-gray-900 border-0 bg-transparent -mt-1"
	return (
    <div className="flex flex-wrap justify-center md:sticky top-0 left-0 bg-gray-100 shadow-md pt-2 high-specificity px-2 z-50">
      <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <ActiveLink href="/" activeClassName={activeClasses}><NavButton>主页</NavButton></ActiveLink>
        </DropdownToggle>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <ActiveLink href="/guide" activeClassName={activeClasses}><NavButton>大会指南</NavButton></ActiveLink>
        </DropdownToggle>
        <DropdownMenu>
          <ActiveLink href="/guide#sec1" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>价值使命</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/guide#sec2" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>信仰告白</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/guide#sec3" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>讲员介绍2018</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/guide#sec4" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>下一步Next Step</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/guide#sec5" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>大会组委</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/guide#sec6" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>会场示图</DropdownMenuBtn></DropdownItem></ActiveLink>
        </DropdownMenu>
      </DropdownButton>
      {/* <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <ActiveLink href="/register" activeClassName={activeClasses}><NavButton>会议注册</NavButton></ActiveLink>
        </DropdownToggle>
        <DropdownMenu>
          <ActiveLink href="/register" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>报名参加</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/register#sec2" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>交通住宿</DropdownMenuBtn></DropdownItem></ActiveLink>
        </DropdownMenu>
      </DropdownButton> */}
      <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <ActiveLink href="/schedule" activeClassName={activeClasses}><NavButton>大会议程</NavButton></ActiveLink>
        </DropdownToggle>
        <DropdownMenu>
          <ActiveLink href="/schedule#sec1" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>日程安排</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/schedule#sec2" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>Workshop</DropdownMenuBtn></DropdownItem></ActiveLink>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <ActiveLink href="/resources" activeClassName={activeClasses}><NavButton>大会资料</NavButton></ActiveLink>
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem><ActiveLink href="/resources#sec1" activeClassName={activeClasses}><DropdownMenuBtn>往届回顾</DropdownMenuBtn></ActiveLink></DropdownItem> */}
          <ActiveLink href="/resources#sec1" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>图文相片</DropdownMenuBtn></DropdownItem></ActiveLink>
          <ActiveLink href="/resources#sec2" activeClassName={activeClasses}><DropdownItem><DropdownMenuBtn>视频音频</DropdownMenuBtn></DropdownItem></ActiveLink>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses}>
          <a href="https://ukafc.org/contact-us/" style={{color: 'black', textDecoration: 'none'}}><NavButton>联系我们</NavButton></a>
        </DropdownToggle>
      </DropdownButton>
    </div>
		
	)

}
  
export default Nav

