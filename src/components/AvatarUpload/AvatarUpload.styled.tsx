import styled, { css } from 'styled-components';
import { Upload } from 'antd';
import 'antd/lib/upload/style/index.css';

export const UploadBox = styled(Upload)`
  margin-bottom: 12px;

  ${({ theme: { colors } }) => css`
    .ant-upload {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .ant-upload-list-picture-card-container {
      width: 124px;
      height: 124px;
      margin-right: 0;
      margin-bottom: 0;
    }

    .ant-upload.ant-upload-select-picture-card {
      width: 124px;
      height: 124px;
      border: 1px dashed ${colors.whiteF4};
      margin-right: 0;
      margin-bottom: 0;
    }

    .ant-upload.ant-upload-select-picture-card:hover {
      border-color: ${colors.grey17};
    }
  `};
`;

export const UploadIcon = styled.div`
  background-image: url(static/icons/Upload.svg);
  width: 24px;
  height: 24px;
`;

export const UploadText = styled.div`
  ${({ theme: { colors, indents, typography } }) => css`
    margin-top: ${indents.i12};
    font-family: 'Satoshi Variable', sans-serif;
    font-feature-settings: 'ss03' on;
    line-height: ${typography.t20};
    color: ${colors.black00};
  `};
`;
