import styled from "styled-components";
import { Space } from "antd";
import { device } from "../../../helpers";

// center the component using style
export const AboutContainer = styled(Space)`
  display: flex;
  justify-content: center;

  @media (${device.mobileS}) {
    margin: 10vh 5vw;
  }

  @media (${device.mobileM}) {
    margin: 10vh 10vw;
  }

  @media (${device.tablet}) {
    margin: 10vh 12vw;
  }

  @media (${device.laptop}) {
    margin: 10vh 20vw;
  }
`;
