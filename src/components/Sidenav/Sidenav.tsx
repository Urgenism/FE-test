import React from "react";
import styled from "styled-components";

import { IconMap, IconComb, IconTerrain } from "assets/icons";

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

interface ISidenavItemProps {
  active?: boolean;
}

const SidenavItem = styled.li`
  height: 44px;
  width: 44px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  background: ${(props: ISidenavItemProps) =>
    props.active ? "#1F4782" : "transparent"};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    background: #1f4782;
  }

  > svg path {
    fill: ${(props: ISidenavItemProps) => (props.active ? "#fff" : "#c7c7c7")};
    transition: all 0.2s;
  }

  &:hover svg path {
    fill: #fff;
  }
`;

const Sidenav: React.FC<{}> = () => {
  return (
    <SidenavWrapper>
      <SidenavList>
        <SidenavItem active>
          <IconMap />
        </SidenavItem>
        <SidenavItem>
          <IconComb />
        </SidenavItem>
        <SidenavItem>
          <IconTerrain />
        </SidenavItem>
      </SidenavList>
    </SidenavWrapper>
  );
};

export default Sidenav;
