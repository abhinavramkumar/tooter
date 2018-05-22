import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: calc(25% - 0.66rem);
  margin-right: 0.5rem;
`;

export const Name = styled.h2`
  font-size: 20px;
  line-height: calc(20px * 1.414);
  font-weight: 700;
`;

export const Username = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 1.25rem;
  color: #666;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 1.5rem;
  color: #666;
  line-height: calc(14px * 1.414);
`;

export const Location = styled.p`
  font-size: 14px;
  margin-bottom: 0.5rem;
  line-height: calc(14px * 1.414);
  color: #666;
  svg {
    margin-right: 1rem;
  }
`;

export const JoinDate = styled.p`
  font-size: 14px;
  margin-bottom: 0.5rem;
  line-height: calc(14px * 1.414);
  color: #666;
  svg {
    margin-right: 1rem;
  }
`;
