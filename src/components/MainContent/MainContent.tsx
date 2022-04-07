import React from "react";
import styled from "styled-components";

import Map from "components/Map";

const MainContentWrapper = styled.div`
  flex: 1 1 auto;
`;

interface IMainContentProps {
  data: {
    locations: Array<any>;
  } | null;
}

const MainContent: React.FC<IMainContentProps> = ({ data }) => {
  return (
    <MainContentWrapper>
      <Map data={data} />
    </MainContentWrapper>
  );
};

export default MainContent;
