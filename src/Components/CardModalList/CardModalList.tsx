import React, { ReactNode, useState } from "react";
import {
  Button,
  CardProps,
  Col,
  Modal,
  Row,
  Space,
  Tag,
  Typography,
} from "antd";
import * as S from "./styles";
import { Skills } from "../Skills";
const { Text } = Typography;

interface CardModalListProps {
  entries: {
    header: string | ReactNode;
    date?: { start: string; end: string };
    extra?: string | ReactNode;
    cardContent: string | ReactNode;
    footer?: string | ReactNode;
    showModal?: boolean;
    modalButtonText?: string;
    modalHeader?: string;
    modalContent?: string | ReactNode;
    modalFooter?: string | ReactNode;
    disabled?: boolean;
    skills?: string[];
  }[];
  cardProps?: CardProps;
  loading?: boolean;
}

export const CardModalList: React.FC<CardModalListProps> = ({
  entries,
  cardProps,
  loading,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string | ReactNode>("");
  const [modalFooter, setModalFooter] = useState<string | ReactNode>("");

  const renderEntries = () => {
    let columns: unknown[] = [];

    entries.forEach((entry, index) => {
      columns.push(renderCard(entry));
    });

    return (
      <Row gutter={[8, 8]} style={{ width: `100%` }}>
        {columns as any[]}
      </Row>
    );
  };

  const renderDate = (date?: CardModalListProps["entries"][0]["date"]) => {
    if (!date) return null;

    const today = new Date();

    const start = new Date(date.start !== "present" ? date.start : today);
    const end = new Date(date.end !== "present" ? date.end : today);

    const start_month = start.toLocaleString("default", { month: "long" });
    const start_year = start.getFullYear();
    const end_month = end.toLocaleString("default", { month: "long" });
    const end_year = end.getFullYear();

    return (
      <Space>
        <Tag>
          {start_month} {start_year}
        </Tag>
      </Space>
    );
  };

  const renderCard = (entry: CardModalListProps["entries"][0]) => {
    const skills = entry.skills?.map((skill) => {
      return {
        name: skill,
      };
    });

    return (
      <Col xs={24} sm={12} md={12} lg={8}>
        <S.StyledCard
          title={entry.header}
          extra={entry.extra}
          bordered={false}
          headStyle={{ textAlign: "center" }}
          clickable={!entry.disabled && !!entry.showModal}
          loading={loading}
          style={{ height: "100%", width: "100%" }}
          onClick={() => {
            if (!entry.showModal) return;
            setShowModal(!showModal);
            setModalTitle(entry.modalHeader || "");
            setModalContent(entry.modalContent);
            setModalFooter(entry.modalFooter);
          }}
        >
          <Space direction={"vertical"} align={"start"}>
            {entry.disabled && <Text>Details Coming Soon</Text>}
            {!entry.disabled && (
              <>
                {/*{renderDate(entry.date)}*/}
                <div>{entry.cardContent}</div>
                {entry.modalButtonText && (
                  <Button
                    onClick={() => {
                      setShowModal(!showModal);
                      setModalTitle(entry.modalHeader || "");
                      setModalContent(entry.modalContent);
                      setModalFooter(entry.modalFooter);
                    }}
                  >
                    {entry.modalButtonText}
                  </Button>
                )}
              </>
            )}
            {!!skills && <Skills skills={skills ?? { name: "" }} />}
          </Space>
        </S.StyledCard>
      </Col>
    );
  };

  return (
    <>
      <Modal
        title={modalTitle}
        open={showModal}
        closable
        footer={modalFooter}
        onCancel={() => setShowModal(false)}
        width={"40%"}
      >
        {modalContent}
      </Modal>
      {renderEntries()}
      {/*<Space direction={"horizontal"} size={"large"} style={{ width: `100%` }}>*/}
      {/*<Row gutter={[8, 8]} style={{ width: `100%` }}>*/}

      {/*</Row>*/}
      {/*</Space>*/}
    </>
  );
};
