import CabinetGoBackLink from '@GeneralComponents/CabinetGoBackLink';
import { FC } from 'react';
import {
  Container,
  Code,
  CodeTitle,
  CodeWrap,
  Content,
  ReceiptDetailsItem,
  ReceiptDetailsDelimiter,
  ReceiptDetailsText,
  ReceiptDetailsWrap,
  ReceiptTitle,
  ReceiptInfo,
} from './UserReceiptDetails.styled';

const UserReceiptDetails: FC = () => {
  return (
    <Container>
      <CabinetGoBackLink isShowOnDesk />
      <Content>
        <ReceiptInfo>
          <ReceiptTitle>ТОВ “АТБ-Маркет”</ReceiptTitle>
          <ReceiptDetailsWrap>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>№ чеку</ReceiptDetailsText>
              <ReceiptDetailsText>1346517</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Магазин</ReceiptDetailsText>
              <ReceiptDetailsText>№234</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsItem>
              <ReceiptDetailsText>Cума</ReceiptDetailsText>
              <ReceiptDetailsText>500₴</ReceiptDetailsText>
            </ReceiptDetailsItem>
            <ReceiptDetailsDelimiter></ReceiptDetailsDelimiter>
          </ReceiptDetailsWrap>
        </ReceiptInfo>
        <CodeWrap>
          <CodeTitle>Акційний код:</CodeTitle>
          <Code>ZU2L-MFSZ-YWE3</Code>
        </CodeWrap>
      </Content>
    </Container>
  );
};

export default UserReceiptDetails;