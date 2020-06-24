import styled from '@emotion/styled'
//import tw from '@tailwindcssinjs/macro'
import tw from 'twin.macro'

export const NavButton = styled.a`
  ${tw`no-underline uppercase tracking-wide font-bold text-base pt-2 pb-4 text-gray-900 border-b-2 border-transparent cursor-pointer`}

  &:hover, &:active {
    ${tw`border-afc border-b-2`}
  }
`

export const DropdownMenuBtn = styled.div`
  ${tw`hover:text-afc hover:font-semibold`}
`

export const A_a = styled.a`
  color: black;
  text-decoration: none;
  ${tw`cursor-pointer`}
  background: linear-gradient(180deg, transparent calc(100% - 2px), rgba(0, 100, 137, 1) 0);
  
  &:hover, &:link:active, &:visited:active, &:visited:hover {
    color: #006489;
    text-decoration: none;
  }
  
  &:visited {
    color: black;  
    text-decoration: none;
    ${'' /* #595959 */}
  }
`

export const A = (props) => {
  const {href, ...props_noRef} = props
  return (
    props.insite === true ? 
      <A_a {...props_noRef} href={href}>
        {props.children}
      </A_a>
      :
      <A_a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
      </A_a>
  )  
}

export const MyButton = styled.button`
  ${tw`bg-afc text-center hover:text-afc hover:bg-white border-2 border-afc transition duration-500 shadow-lg hover:shadow-2xl text-gray-100 font-semibold py-2 px-6 shadow`}
`