import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(4rem + 150px);
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.125);
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 4rem;
  position: relative;
`;

export const Banner = styled.img`
  height: 150px;
  width: 100%;
  display: block;
`;

export const Image = styled.img`
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  z-index: 5;
`;

export const UserData = styled.div`
  margin: 0 200px 0 0;
  text-align: center;
`;

export const Row = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Stat = styled.div`
  height: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  p {
    margin-top: 2px;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const Title = styled.h4`
  margin-bottom: 1px;
  font-size: 12px;
  font-weight: 700;
`;
