import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border: 1px solid white;
  margin: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.125);
  position: relative;
`;

export const Header = styled.div`
  font-size: 12px;
  color: #cfcfcf;
  line-height: calc(12px * 1.414);
  padding: 0.25rem 1rem;
`;

export const OptionsToggle = styled.button`
  position: absolute;
  top: 0.25rem;
  right: 1rem;
  background: transparent;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: #999;
  z-index: 5;
  svg {
    pointer-events: none;
  }
`;

export const Options = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 2.5rem;
  border: none;
  background-color: white;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);
  width: 75px;
  height: auto;
  transform-origin: top right;
  transform: translateX(5px) scale(0);
  opacity: 0;
  transition: all 300ms ease-in;
  &.active {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
`;

export const Option = styled.button`
  background-color: white;
  border: none;
  padding: 0.5rem;
  font-size: 14px;
  color: #999;
  display: block;
  width: 100%;
  border-radius: 12px;
`;

export const Share = Option.extend`
  &:hover {
    color: green;
  }
`;

export const Edit = Option.extend`
  &:hover {
    color: orange;
  }
`;

export const Delete = Option.extend`
  &:hover {
    color: red;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5rem;
  border-bottom-radius: 12px;
`;

export const UserImage = styled.div`
  height: 50px;
  width: 50px;
  flex-basis: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.5rem;
`;

export const Image = styled.img`
  vertical-align: middle;
  height: 50px;
  width: 50px;
`;

export const Content = styled.div`
  margin-left: 0.5rem;
  flex-basis: calc(100% - 66px);
`;

export const User = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;
  font-weight: 700;
`;

export const Username = styled.span`
  color: #ccc;
  font-size: 14px;
  margin: 0 0.5rem;
  font-weight: 400;
`;

export const Date = styled.span`
  color: #ccc;
  font-size: 14px;
  margin: 0 0.5rem;
  font-weight: 400;
`;

export const Text = styled.p`
  margin-bottom: 1rem;
  font-size: 15px;
  word-spacing: 1px;
  line-height: 22px;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

export const Stat = styled.div`
  margin: 0 2rem;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  svg {
    margin-right: 1rem;
    pointer-events: none;
  }
`;

export const Comment = Stat.extend`
  margin-left: 0;
  &:hover {
    color: green;
  }
`;

export const Retweet = Stat.extend`
  &:hover {
    color: green;
  }
`;

export const Like = Stat.extend`
  &:hover {
    color: red;
  }
`;
