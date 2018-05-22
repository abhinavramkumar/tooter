import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: calc(25% - 0.66rem);
  margin-left: 0.5rem;
`;

export const Panel = styled.div`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  padding: 0.5rem;
  height: 100%;
  margin-bottom: 1rem;
`;

export const Trends = Panel.extend``;

export const Suggestions = Panel.extend``;

export const Title = styled.h3`
  font-size: 13px;
  font-weight: 700;
  color: #666;
  margin-bottom: 1rem;
`;
