import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { addSkill, controlModal, deleteSkill, editSkill, showModal } from "../../../redux-tookit/slices/SkillSlice";
import { Form, Input, Modal, Space, Table } from "antd";
import {
  EditFilled,
  DeleteFilled,
  AppstoreAddOutlined,
} from "@ant-design/icons";

import "./skills.scss";
const SkillsPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { skills, isModalOpen, selected } = useSelector((state) => state.skill);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "percent",
      dataIndex: "percent",
      key: "percent",
    },
    {
      title: "Action",
      key: "action",
      render: (_, row) => (
        <Space size="middle">
          <button
            className="edit-btn"
            onClick={() => dispatch(editSkill({id: row.id, form}))}
          >
            <EditFilled />
          </button>
          <button
            className="delete-btn"
            onClick={() => dispatch(deleteSkill(row.id))}
          >
            <DeleteFilled />
          </button>
        </Space>
      ),
    },
  ];


  const handleOk = async () => {
    try {
      let values = await form.validateFields();
      dispatch(addSkill(values));
      handleCancel();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = () => {
    dispatch(controlModal())
  };

  return (
    <Fragment>
      <Table
        bordered
        title={() => (
          <div className="outlet">
            <h1>Skills </h1>
            <button onClick={() => dispatch(showModal(form))}>
              <AppstoreAddOutlined />
            </button>
          </div>
        )}
        columns={columns}
        dataSource={skills}
      />
      <Modal
        title={selected ? "save skill" : "Add Skills"} 
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="Skills"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Skills Name"
            name="name"
            rules={[{ required: true, message: "Please Fill" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Percent"
            name="percent"
            rules={[{ required: true, message: "Please Fill" }]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default SkillsPage;
