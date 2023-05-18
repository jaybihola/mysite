import React, { useEffect, useState } from "react";
import { CardModalList } from "../../Components/CardModalList";
import { Button, Collapse, Modal, Spin, Typography } from "antd";
import * as S from "./styles";
import { entries, filterSkills } from "./helpers";
import { useNavigate } from "react-router-dom";
import { Skills } from "../../Components/Skills";

const { Title, Text } = Typography;

export const Projects: React.FC = () => {
  const showModal = false;
  const navigate = useNavigate();
  const [filters, setFilters] = useState<string[]>([]);
  const [orFilterType, setOrFilterType] = useState<boolean>(true);

  const handleFilter = (filteredSkills: string[]) => {
    if (filteredSkills.length === 0) {
      return entries;
    }

    if (orFilterType)
      return entries.filter((entry) => {
        return entry.skills?.some((skill) => {
          return filteredSkills.includes(skill);
        });
      });
    else
      return entries.filter((entry) => {
        return filteredSkills.every((filter) => {
          return entry?.skills?.includes(filter);
        });
      });
  };

  return (
    <Spin spinning={showModal}>
      <Modal
        open={showModal}
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

        <Collapse
          expandIconPosition={"right"}
          bordered={false}
          style={{ width: `calc(100% - 6px)` }}
        >
          <Collapse.Panel key={"filters"} header={<Text strong>Filters</Text>}>
            <Button
              onClick={() => setOrFilterType(!orFilterType)}
              style={{ marginRight: 8 }}
            >
              Condition: {orFilterType ? "OR" : "AND"}
            </Button>
            <Button onClick={() => setFilters([])} style={{ marginRight: 8 }}>
              Clear
            </Button>
            <Skills
              skills={filterSkills}
              selectedSkills={filters}
              setSelectedSkills={setFilters}
              selectable={true}
            />
          </Collapse.Panel>
        </Collapse>

        <CardModalList entries={handleFilter(filters)} loading={false} />
      </S.ProjectsContainer>
    </Spin>
  );
};
