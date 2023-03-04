import styled from 'styled-components/native';

type ContainerProps = {
  width: number;
};

export const Container = styled.View<ContainerProps>`
  width: ${({ width }) => width}px;
`;
