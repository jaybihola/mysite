import React, { ReactNode, useState } from "react";
import { Button, Collapse, Modal, CollapseProps, Space, Tooltip } from "antd";

interface CollapseModalProps {
  panels: {
    header: string | ReactNode;
    extra?: ReactNode;
    content: string | ReactNode;
    showModal: boolean;
    modalTitle?: string;
    modalButtonText?: string;
    modalContent?: string | ReactNode;
  }[];
  collapseProps?: CollapseProps;
}

export const CollapseModal: React.FC<CollapseModalProps> = ({
  panels,
  collapseProps,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [modalContent, setModalContent] = useState<string | ReactNode>("");
  return (
    <>
      <Modal
        title={modalTitle}
        open={showModal}
        closable
        footer={<></>}
        onCancel={() => setShowModal(false)}
        width={"30%"}
      >
        {modalContent}
      </Modal>
      <Collapse {...collapseProps} accordion={true}>
        {panels.map((panel, index) => {
          return (
            <Collapse.Panel
              header={
                <Tooltip title={"Click to expand or hide"}>
                  {panel.header}
                </Tooltip>
              }
              key={index}
              extra={panel.extra}
            >
              <Space
                direction={"vertical"}
                align={"center"}
                style={{ width: `100%` }}
              >
                {panel.content}
                {panel.showModal && (
                  <Button
                    onClick={() => {
                      setShowModal(!showModal);
                      setModalTitle(panel.modalTitle || "");
                      setModalContent(panel.modalContent);
                    }}
                  >
                    {panel.modalButtonText}
                  </Button>
                )}
              </Space>
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </>
  );
};
