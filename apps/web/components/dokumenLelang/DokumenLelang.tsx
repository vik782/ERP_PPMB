import React from "react";
import { Button, Form, Input, Select, DatePicker, Radio, Upload, Space } from "antd";
import { InboxOutlined, InfoCircleOutlined} from "@ant-design/icons";
import "./DokumenLelang.css"; 

interface DokumenLelangProps {}

const DokumenLelang: React.FC<DokumenLelangProps> = ({}) => {
  const [form] = Form.useForm();
  const [submittable, setSubmittable] = React.useState<boolean>(false);
  const values = Form.useWatch([], form);

  const { RangePicker } = DatePicker;

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  const onReset = () => {
    form.resetFields();
  }

  const validatePagu = (_: any, value: string) => {
    const pattern = /^[a-zA-Z0-9]*$/;
    if (!value) {
      return Promise.reject(new Error("Field ini wajib diisi"));
    } else if (!pattern.test(value)) {
      return Promise.reject(new Error("Hanya karakter alfanumerik diperbolehkan"));
    }
    return Promise.resolve();
  };

  return (
    <Form
      form={form}
      layout={"vertical"}
      className="dokumen-lelang-form"
      onFinish={onFinish}
      variant="outlined"
      scrollToFirstError
    >
      <div className="form-grid">
        <Form.Item required label="Kode Proyek" name="kodeProyek" className="form-item" rules={[{ required: true, message: "Mohon terisikan"}]}>
          <Input placeholder="Masukan kode proyek" />
        </Form.Item>

        <Form.Item required label="Judul Lelang" name="judulLelang" className="form-item" rules={[{ required: true }]}>
          <Input placeholder="Masukan judul lelang" />
        </Form.Item>

           <Form.Item required label="Tanggal Mulai Sampai Selesai" name="tanggal" rules={[{ required: true }]}>
        <RangePicker 
          placeholder={["Mulai", "Selesai"]} 
          format={"DD/MM/YYYY"} 
          // style={{width: "100%"}}
        />
      </Form.Item>

        <Form.Item required label="User / Client" name="user" className="form-item"rules={[{ required: true }]}>
          <Select
            placeholder="Pilih user / client"
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
        </Form.Item>

        <Form.Item required label="Sub User / Sub Client" name="subUser" className="form-item" rules={[{ required: true }]}>
          <Select
            placeholder="Pilih sub user / sub client"
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
        </Form.Item>
        
      </div>

      <Form.Item required label="Pagu" name="pagu" className="form-item" rules={[{ required: true, validator: validatePagu }]}>
        <Input placeholder="Masukan pagu" />
      </Form.Item>

      <Form.Item required label="HPS" name="hps" className="form-item" rules={[{ required: true }]}>
        <Input placeholder="Masukan HPS" />
      </Form.Item>

      <Form.Item required label="Paket Pekerjaan" name="paketPekerjaan" className="form-item" rules={[{ required: true }]}>
        <Input placeholder="Masukan paket pekerjaan" />
      </Form.Item>

      <Form.Item required label="Spek Lelang" name="spekLelang" className="form-item" rules={[{ required: true }]}>
        <Input placeholder="Masukan spek lelang" />
      </Form.Item>

      <Form.Item required label="Status Proyek" name="statusProyek" layout="horizontal" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="1">Proses Persiapan Tender</Radio>
          <Radio value="2">Submit Harga</Radio>
          <Radio value="3">Menang Lelang</Radio>
          <Radio value="4">Kalah Lelang</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item required label="Dokumen Proyek" name="dokumenProyek" rules={[{ required: true }]}>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Pilih file atau taruhkan disini</p>
            <p className="ant-upload-hint">Ukuran file harus tidak melebihi 10MB (JPG, PNG, atau PDF)</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Space>
          <Button htmlType="submit" className="form-submit-button" onClick={onCheck}>
            Submit
          </Button>
          <Button htmlType="reset" className="form-reset-button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default DokumenLelang;
