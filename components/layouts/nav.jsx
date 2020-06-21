import { NavButton, ActiveLink } from '../styles/style'
import DropdownButton from './dropdownButton'
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Nav = () => {
	const activeClasses = "border-b-2 border-afc"
	const toggleClasses = "no-underline uppercase tracking-wide font-bold text-base py-3 mr-4 text-gray-900 border-0 bg-transparent -mt-1"
	return (
    <div className="flex flex-wrap justify-center md:sticky top-0 left-0 bg-gray-100 shadow-md pt-2">
      <ActiveLink href="/" activeClassName={activeClasses}><NavButton className='mr-10'>主页</NavButton></ActiveLink>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会指南</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/guide#sec1" activeClassName={activeClasses}><div>价值使命</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec2" activeClassName={activeClasses}><div>信仰告白</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec3" activeClassName={activeClasses}><div>讲员介绍2018</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec4" activeClassName={activeClasses}><div>下一步Next Step</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec5" activeClassName={activeClasses}><div>大会组委</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/guide#sec6" activeClassName={activeClasses}><div>会场示图</div></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>会议注册</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/register#sec1" activeClassName={activeClasses}><div>报名参加</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/register#sec2" activeClassName={activeClasses}><div>交通住宿</div></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会议程</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/schedule#sec1" activeClassName={activeClasses}><div>日程安排</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/schedule#sec2" activeClassName={activeClasses}><div>Workshop</div></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <DropdownButton>
        <DropdownToggle className={toggleClasses} style={{lineHeight: 1}}>
          <div>大会资料</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><ActiveLink href="/resources#sec1" activeClassName={activeClasses}><div>往届回顾</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/resources#sec2" activeClassName={activeClasses}><div>图文相片</div></ActiveLink></DropdownItem>
          <DropdownItem><ActiveLink href="/resources#sec3" activeClassName={activeClasses}><div>视频音频</div></ActiveLink></DropdownItem>
        </DropdownMenu>
      </DropdownButton>
      <ActiveLink href="/calendar" activeClassName={activeClasses}><NavButton className='mr-10'>大会日历</NavButton></ActiveLink>
      <ActiveLink href="/contact" activeClassName={activeClasses}><NavButton>联系我们</NavButton></ActiveLink>
    </div>
		
	)

}
  
export default Nav

