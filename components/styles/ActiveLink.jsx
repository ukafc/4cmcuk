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