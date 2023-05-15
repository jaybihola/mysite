import React from "react";

import { Typography } from "antd";
import * as S from "./styles";
import { CollapseModal } from "../../Components/CollapseModal";
import { panel } from "./helpers";

const { Title, Text } = Typography;

export const Experience: React.FC = () => {
  return (
    <S.ExperienceContainer direction={"vertical"}>
      <Title>My Experience</Title>
      <CollapseModal
        panels={panel}
        collapseProps={{
          defaultActiveKey: [0, 1, 2],
          bordered: false,
          expandIconPosition: "right",
        }}
      />
    </S.ExperienceContainer>
  );
};
