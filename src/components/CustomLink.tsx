import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, className, ...props }) => {
  const { pathname } = useLocation();
  const isActive = pathname === to || (pathname !== "/" && to !== "/" && pathname.includes(to));

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;


