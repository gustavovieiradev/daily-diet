import React from 'react';

import { Container } from './styles';

type Props = {
  width: number;
};

const Space: React.FC<Props> = ({ width }) => {
  return <Container width={width} />;
};

export default Space;
