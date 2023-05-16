import React, { ReactNode, useState } from "react";
import { Button, CardProps, Col, Modal, Row, Space, Typography } from "antd";
import * as S from "./styles";
const { Text } = Typography;

interface CardModalListProps {
  entries: {
    header: string | ReactNode;
    extra?: string | ReactNode;
    cardContent: string | ReactNode;
    footer?: string | ReactNode;
    showModal?: boolean;
    modalButtonText?: string;
    modalHeader?: string;
    modalContent?: string | ReactNode;
    modalFooter?: string | ReactNode;
    disabled?: boolean;
  }[];
  cardProps?: CardProps;
}

export const CardModalList: React.FC<CardModalListProps> = ({
  entries,
  cardProps,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string | ReactNode>("");
  const [modalFooter, setModalFooter] = useState<string | ReactNode>("");
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
      <Space direction={"horizontal"} wrap size={"large"}>
        <Row gutter={[16, 16]}>
          {entries.map((entry, index) => {
            return (
              <Col xs={24} sm={12} lg={8}>
                <S.StyledCard
                  title={entry.header}
                  extra={entry.extra}
                  bordered={false}
                  headStyle={{ textAlign: "center" }}
                  clickable={!entry.disabled && !!entry.showModal}
                >
                  <Space direction={"vertical"} align={"center"}>
                    {entry.disabled && <Text>Details Coming Soon</Text>}
                    {!entry.disabled && (
                      <>
                        <div>{entry.cardContent}</div>
                        {entry.showModal && (
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
                  </Space>
                </S.StyledCard>
              </Col>
            );
          })}
        </Row>
      </Space>
    </>
  );
};
