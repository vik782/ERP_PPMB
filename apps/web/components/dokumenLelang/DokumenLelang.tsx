import React from "react";
import { Button, Form, Input, Select, DatePicker, Radio, Upload, Space } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "./DokumenLelang.css"; 

interface DokumenLelangProps {}

const DokumenLelang: React.FC<DokumenLelangProps> = ({}) => {
  const [form] = Form.useForm();

  const { RangePicker } = DatePicker;

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = (values: any) => {
    console.log('Received values from form: ', values);
  };

  return (
    <Form
      form={form}
      layout={"vertical"}
      className="dokumen-lelang-form"
      onFinish={onFinish}
    >
      <div className="form-grid">
        <Form.Item label="Kode Proyek" name="kodeProyek" className="form-item">
          <Input placeholder="Masukan kode proyek" />
        </Form.Item>

        <Form.Item label="Judul Lelang" name="judulLelang" className="form-item">
          <Input placeholder="Masukan judul lelang" />
        </Form.Item>

           <Form.Item label="Tanggal Mulai Sampai Selesai" name="tanggal">
        <RangePicker 
          placeholder={["Mulai", "Selesai"]} 
          format={"DD/MM/YYYY"} 
          // style={{width: "100%"}}
        />
      </Form.Item>

        <Form.Item label="User / Client" name="user" className="form-item">
          <Select
            placeholder="Pilih user / client"
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Sub User / Sub Client" name="subUser" className="form-item">
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

      <Form.Item label="Pagu" name="pagu" className="form-item">
        <Input placeholder="Masukan pagu" />
      </Form.Item>

      <Form.Item label="HPS" name="hps" className="form-item">
        <Input placeholder="Masukan HPS" />
      </Form.Item>

      <Form.Item label="Paket Pekerjaan" name="paketPekerjaan" className="form-item">
        <Input placeholder="Masukan paket pekerjaan" />
      </Form.Item>

      <Form.Item label="Spek Lelang" name="spekLelang" className="form-item">
        <Input placeholder="Masukan spek lelang" />
      </Form.Item>

      <Form.Item label="Status Proyek" name="statusProyek" layout="horizontal">
        <Radio.Group>
          <Radio value="1">Proses Persiapan Tender</Radio>
          <Radio value="2">Submit Harga</Radio>
          <Radio value="3">Menang Lelang</Radio>
          <Radio value="4">Kalah Lelang</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item label="Dokumen Proyek" name="dokumenProyek">
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
          <Button htmlType="submit" className="form-submit-button">
            Submit
          </Button>
          <Button htmlType="reset" className="form-reset-button" onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default DokumenLelang;
