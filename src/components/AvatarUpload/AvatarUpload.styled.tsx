import styled from 'styled-components';
import { Upload } from 'antd';
import 'lib/upload/style/index.css';

export const UploadBox = styled(Upload)`
  .ant-upload {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .ant-upload.ant-upload-select-picture-card {
    width: 124px;
    height: 124px;
    border: 1px dashed #f4f4f4;
    margin-right: 0;
    margin-bottom: 0;
  }

  .ant-upload.ant-upload-select-picture-card:hover {
    border-color: #171717;
  }

  .ant-upload-list-item {
    width: 124px;
    height: 124px;
  }
`;

export const UploadIcon = styled.div`
  background-image: url(static/icons/Upload.svg);
  width: 24px;
  height: 24px;
`;
