import React, { useEffect, useState } from "react";
import { CardModalList } from "../../Components/CardModalList";
import { Button, Collapse, Modal, Space, Spin, Typography } from "antd";
import * as S from "./styles";
import { entries, filterDomains, filterSkills } from "./helpers";
import { useNavigate } from "react-router-dom";
import { Skills } from "../../Components/Skills";

const { Title, Text } = Typography;

export const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();
  const [filters, setFilters] = useState<string[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [orFilterType, setOrFilterType] = useState<boolean>(true);

  const handleFilter = (
    filteredSkills: string[],
    filteredDomains: string[]
  ) => {
    if (filteredSkills.length === 0 && filteredDomains.length === 0) {
      return entries;
    }

    const filteredValues = filteredSkills.concat(filteredDomains);

    if (orFilterType)
      return entries.filter((entry) => {
        return entry.skills?.some((skill) => {
          return filteredValues.includes(skill);
        });
      });
    else
      return entries.filter((entry) => {
        return filteredValues.every((filter) => {
          return entry?.skills?.includes(filter);
        });
      });
  };

  return (
    <Spin spinning={showModal}>
      <Modal
        open={showModal}
        onCancel={() => setShowModal(false)}
        closable={true}
        footer={null}
        title={"Coming Soon"}
      >
        <Space direction={"vertical"}>
          <Text>
            The projects page is nearing its completion and will soon be fully
            accessible. You can still view the page but note that key details
            are missing.
          </Text>
          <Text>
            I am in the process of adding project details. In the near future, I
            will provide source code to all publicly accessible projects.
            Additionally, I are excited to enhance the user experience by
            providing comprehensive details, imagery, and videos for selected
            projects.
          </Text>
          <Text>
            I will also be updating the UX soon to be more consistent!
          </Text>
        </Space>
      </Modal>
      <S.ProjectsContainer direction={"vertical"}>
        <Title>Projects</Title>

        <Collapse
          expandIconPosition={"right"}
          bordered={false}
          style={{ width: `calc(100% - 6px)` }}
        >
          <Collapse.Panel key={"filters"} header={<Text strong>Filters</Text>}>
            <Space direction={"vertical"} style={{ width: `100%` }}>
              <Space>
                <Button
                  onClick={() => setOrFilterType(!orFilterType)}
                  style={{ marginRight: 8 }}
                >
                  Condition: {orFilterType ? "OR" : "AND"}
                </Button>
                <Button
                  onClick={() => {
                    setFilters([]);
                    setDomains([]);
                  }}
                  style={{ marginRight: 8 }}
                  disabled={filters.length === 0 && domains.length === 0}
                >
                  Clear
                </Button>
              </Space>
              <Space direction={"vertical"}>
                <Text strong>Languages/Technologies:</Text>
                <Skills
                  skills={filterSkills}
                  selectedSkills={filters}
                  setSelectedSkills={setFilters}
                  selectable={true}
                />
              </Space>
              <Space direction={"vertical"}>
                <Text strong>Course/Domain:</Text>
                <Skills
                  skills={filterDomains}
                  selectedSkills={domains}
                  setSelectedSkills={setDomains}
                  selectable={true}
                />
              </Space>
            </Space>
          </Collapse.Panel>
        </Collapse>

        <CardModalList
          entries={handleFilter(filters, domains)}
          loading={false}
        />
      </S.ProjectsContainer>
    </Spin>
  );
};
