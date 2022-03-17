import * as React from "react";
import styled from "styled-components";
import banner from "../assets/bot_banner.jpeg";

const SBannerWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-top: 100px;
`;

const SBanner = styled.div`
  width: 900px;
  height: 200px;
  background: url(${banner}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Banner = () => (
  <SBannerWrapper>
    <SBanner />
  </SBannerWrapper>
);

export default Banner;
