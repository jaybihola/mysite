import React, { useEffect } from "react";
import { CardModalList } from "../../Components/CardModalList";
import { Collapse, Modal, Spin, Typography } from "antd";
import * as S from "./styles";
import { entries, filterSkills } from "./helpers";
import { useNavigate } from "react-router-dom";
import { Skills } from "../../Components/Skills";

const { Title, Text } = Typography;

export const Projects: React.FC = () => {
  const showModal = false;
  const navigate = useNavigate();

  return (
    <Spin spinning={true}>
      <Modal
        open={true}
        closable={true}
        onCancel={() => navigate("/")}
        footer={null}
        title={"Coming Soon"}
      >
        The projects page is currently under construction. Please check back
        later!
      </Modal>
      <S.ProjectsContainer direction={"vertical"}>
        <Title>Projects</Title>

        <Collapse expandIconPosition={"right"} bordered={false}>
          <Collapse.Panel key={"filters"} header={<Text strong>Filters</Text>}>
            <Skills skills={filterSkills} skillClickHandler={console.log} />
          </Collapse.Panel>
        </Collapse>

        <CardModalList entries={entries} loading={true} />
      </S.ProjectsContainer>
    </Spin>
  );
};
