import React, { ReactNode, useState } from "react";
import { Button, Collapse, Modal, CollapseProps, Space } from "antd";

interface CollapseModalProps {
  panels: {
    header: string;
    extra?: ReactNode;
    content: string | ReactNode;
    showModal: boolean;
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
  const [modalContent, setModalContent] = useState<string | ReactNode>("");
  return (
    <>
      <Modal
        title="Basic Modal"
        open={showModal}
        closable
        footer={<></>}
        onCancel={() => setShowModal(false)}
      >
        {modalContent}
      </Modal>
      <Collapse {...collapseProps}>
        {panels.map((panel, index) => {
          return (
            <Collapse.Panel
              header={panel.header}
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
