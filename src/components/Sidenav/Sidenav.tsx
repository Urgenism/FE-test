import React from "react";
import styled from "styled-components";

import { IconNav1, IconNav2, IconNav3 } from "assets/icons";
import routePaths from "global/routePaths";

import NavLink from "./NavLink";

const SidenavWrapper = styled.div`
  flex: 0 0 60px;
  padding: 8px;
  box-shadow: 0px 0.6px 1.8px rgba(0, 0, 0, 0.1),
    0px 3.2px 7.2px rgba(0, 0, 0, 0.13);
`;

const SidenavList = styled.ul`
  margin: 0;
  paddding: 0;
  list-style: none;
`;

const SidenavItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Sidenav: React.FC<{}> = () => {
  return (
    <SidenavWrapper>
      <SidenavList>
        <SidenavItem>
          <NavLink to={routePaths.home}>
            <IconNav1 />
          </NavLink>
        </SidenavItem>
        <SidenavItem>
          <NavLink to={routePaths.route2}>
            <IconNav2 />
          </NavLink>
        </SidenavItem>
        <SidenavItem>
          <NavLink to={routePaths.route3}>
            <IconNav3 />
          </NavLink>
        </SidenavItem>
      </SidenavList>
    </SidenavWrapper>
  );
};

export default Sidenav;
