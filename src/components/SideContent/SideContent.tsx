import React from "react";

import styled from "styled-components";

import { IconFlag } from "assets/icons";

const SideContentWrapper = styled.div`
  flex: 0 0 306px;
`;

const LocationInfoList = styled.ul`
  margin: 0;
  padding: 0;
`;

const LocationInfoItem = styled.li`
  margin: 0;
  padding: 0;
  padding: 14px 24px;

  &:not(:last-child) {
    border-bottom: 1px solid #f4f4f4;
  }
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LocationTitle = styled.h4`
  font-size: 15px;
  color: #4d4c4c;
  margin-left: 10px;
`;

const LocationBody = styled.div``;

const LocationInfo = styled.div`
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`;

const LocationInfoLabel = styled.span`
  font-size: 13px;
  font-weight: bold;
  flex: 0 0 30px;
`;

const LocationInfoInput = styled.input`
  border: 0.5px solid #c7c7c7;
  border-radius: 5px;
  width: 147px;
  flex: 0 0 147px;
  font-size: 18px;
  font-weight: 500;
  padding: 6px 8px;
  color: #2b4877;
  margin-left: 5px;
`;

const SideContent = () => {
  return (
    <SideContentWrapper>
      <LocationInfoList>
        {Array.from(new Array(3)).map((item, index) => (
          <LocationInfoItem key={index}>
            <LocationHeader>
              <IconFlag />
              <LocationTitle>Location {index + 1}</LocationTitle>
            </LocationHeader>
            <LocationBody>
              <LocationInfo>
                <LocationInfoLabel>Lat</LocationInfoLabel>
                <LocationInfoInput readOnly value={37.56755685} />
              </LocationInfo>
              <LocationInfo>
                <LocationInfoLabel>Long</LocationInfoLabel>
                <LocationInfoInput readOnly value={126.97328373} />
              </LocationInfo>
            </LocationBody>
          </LocationInfoItem>
        ))}
      </LocationInfoList>
    </SideContentWrapper>
  );
};

export default SideContent;
