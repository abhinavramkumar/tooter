import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 1rem 0;
  height: calc(100vh - 40px);
  background: #e6ecf0;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HomeSidebar = styled.div`
  flex-basis: calc(25% - 0.66rem);
  margin-right: 0.5rem;
  border: 1px solid white;
  height: 200px;
`;

export const PostsContainer = styled.div`
  flex-basis: calc(50% - 0.66rem);
  margin: 0 0.5rem;
`;

export const PostsWrapper = styled.div`
  height: 100%;
`;
