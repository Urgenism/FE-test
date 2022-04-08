import React from "react";
import styled from "styled-components";

import { useFetchLocation } from "hooks/useFetchLocations";

import Map from "./Map";
import SideContent from "./SideContent";

const Route1Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Route1: React.FC<{}> = () => {
  const { data } = useFetchLocation();

  return (
    <Route1Wrapper>
      <SideContent data={data} /> <Map data={data} />
    </Route1Wrapper>
  );
};

export default Route1;
