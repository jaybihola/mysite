import styled from "styled-components";
import { Card } from "antd";
import { colors } from "../../../helpers";

// add prop to Card named clickable
export const StyledCard = styled(Card)`
  cursor: ${(props: { clickable: boolean }) =>
    props.clickable ? "pointer" : "default"};
  transition: all 0.2s ease-in-out;
  border: 1px solid ${colors.black};
  &:hover {
    border: 1px solid ${colors.primary};
  }
`;
