import styled, { css } from 'styled-components';
import { Col } from 'antd';

export const Container = styled.div`
  ${({ theme }) => css`
    .ant-form {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        color: ${theme.colors.darkGray};
        font-size: ${theme.font.sizes.large};
        margin: ${theme.spacings.xxsmall} auto;
      }
    }
  `}
`;

export const Column = styled(Col)`
  ${({ theme }) => css`
    .ant-form-item {
      margin: ${theme.spacings.small} 0px !important;

      .ant-form-item-label > label {
        display: block;
        margin-bottom: ${theme.spacings.xxxsmall};
        font-weight: ${theme.font.bold};
      }

      .ant-input {
        border-radius: ${theme.border.radius.small};
      }

      .ant-select-selector {
        padding: ${theme.spacings.xxsmall};
      }
    }

    .inline-form {
      align-items: center !important;
      display: flex !important;
      flex-direction: row !important;

      .ant-form-item-label {
        margin-right: ${theme.spacings.xsmall};
        padding: 0px !important;
      }

      .ant-form-item-control {
        max-width: 150px !important;
      }

      .ant-select-selector {
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
  `}
`;

export const SearchPlayers = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0px;

    label {
      display: block;
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xxxsmall};
    }
  `}
`;
