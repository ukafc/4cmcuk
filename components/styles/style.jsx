import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'
//import Link from 'next/link'

export const Button = styled.button`
  ${tw`px-8 py-4 text-xl font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
`

export const NavButton = styled.a`
  ${tw`no-underline uppercase tracking-wide font-bold text-base pt-2 pb-4 text-gray-900 border-b-2 border-transparent`}

  &:hover, &:active {
    ${tw`border-afc border-b-2`}
  }
`

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import { useRouter } from 'next/router';

export const ActiveLink = ({ href, activeClassName, children }) => {
  const router = useRouter();

  const child = React.Children.only(children);

  let className = child.props.className || '';
  if (router.pathname === href && activeClassName) {
    className = `${className} ${activeClassName}`.trim();
  }

  return <Link href={href}>{React.cloneElement(child, { className })}</Link>;
};


ActiveLink.propTypes = {
  href: PropTypes.string,
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired
};
ActiveLink.defaultProps = {
  href: '',
  activeClassName: ''
};

export default ActiveLink;
