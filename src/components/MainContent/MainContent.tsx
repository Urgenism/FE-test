import React from "react";
import styled from "styled-components";

import Map from "components/Map";

const MainContentWrapper = styled.div`
  flex: 1 1 auto;
`;

const MainContent: React.FC<{}> = () => {
  return (
    <MainContentWrapper>
      <Map />
    </MainContentWrapper>
  );
};

export default MainContent;
