import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <span>{t('components.footer.copyright')}</span>
    </Container>
  );
};

export default Footer;
