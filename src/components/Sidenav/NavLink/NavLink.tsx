import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import type { LinkProps } from "react-router-dom";
import styled from "styled-components";

interface ISidenavItemProps {
  isactive?: number;
}

const SidenavLink = styled.a`
  height: 44px;
  width: 44px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props: ISidenavItemProps) =>
    props.isactive ? "#1F4782" : "transparent"};

  > svg path {
    fill: ${(props: ISidenavItemProps) =>
      props.isactive ? "#fff" : "#c7c7c7"};
    transition: all 0.2s;
  }

  &:hover svg path {
    fill: ${(props: ISidenavItemProps) =>
      props.isactive ? "#fff" : "#1f4782"};
  }
`;

const NavLink: React.FC<LinkProps> = ({
  children,
  to,
  ...props
}: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <SidenavLink as={Link} isactive={match ? 1 : 0} to={to} {...props}>
      {children}
    </SidenavLink>
  );
};

export default NavLink;
