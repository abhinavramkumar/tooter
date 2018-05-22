import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: block;
  background-color: hsla(220, 61%, 88%, 1);
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.125);
  margin-bottom: 1rem;
  transition: all 300ms ease-in;
  &.expanded {
    min-height: 150px;
    max-height: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  transition: all 300ms ease-in;
  &.expanded {
    padding: 1rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 50px;
  flex-basis: 50px;
  margin-right: 8px;
`;

export const TextWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  flex-basis: calc(100% - calc(2rem + 150px));
  height: 36px;
  margin: 0 8px;
  border-radius: 12px;
  position: relative;
  overflow: visible;
  transition: all 300ms ease-in;
  textarea {
    height: 36px;
    transition: all 300ms ease-in;
  }
  button {
    visibility: hidden;
    opacity: 0;
    transition: all 300ms ease-in;
  }
  &.expanded {
    height: calc(150px - 2rem);
    max-height: 100%;
    textarea {
      height: 100%;
    }
    button {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const Text = styled.textarea`
  display: block;
  max-width: 100%;
  min-width: 100%;
  border-radius: 12px;
  border: 2px solid transparent;
  box-sizing: border-box;
  min-height: inherit;
  padding: 8px;
  font-size: 14px;
  color: #999;
  &:focus {
    outline: none;
    border: 2px solid #1da1f2;
    outline-offset: 0px;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  flex-basis: 100px;
  align-self: center;
  margin-left: 8px;
  height: 100%;
  transition: all 300ms ease-in;
  &.expanded {
    align-self: stretch;
    align-self: flex-end;
  }
`;

export const SelectImage = styled.button`
  display: block;
  cursor: pointer;
  box-sizing: border-box;
  width: auto;
  background: transparent;
  border: none;
  font-size: 14px;
  padding: 4px;
  position: absolute;
  bottom: 8px;
  right: 8px;
  z-index: 4;
  color: #999;
  svg {
    margin: 0;
    stroke: white;
    pointer-events: none;
  }
`;

export const ImageCount = styled.p`
  font-size: 12px;
  margin-bottom: 8px;
  color: #666;
  text-align: center;
  transform: translateY(5px) scale(0);
  opacity: 0;
  transition: all 300ms ease-in;
  &.expanded {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
`;

export const WordCount = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
  transform: translateY(5px) scale(0);
  opacity: 0;
  transition: all 300ms ease-in;
  &.expanded {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
`;

export const Button = styled.button`
  width: 100%;
  background: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 12px;
  color: white;
  font-size: 15px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  margin-top: -5rem;
  transition: margin-top 300ms ease-in;
  svg {
    margin: 0;
    margin-left: 8px;
    stroke: white;
    fill: white;
  }
  &.expanded {
    margin-top: 0;
  }
`;

export const DropzoneWrapper = styled.div`
  height: 0px;
  width: calc(100% - calc(2rem + 150px));
  margin: 0;
  padding: 0 1rem;
  margin-left: 66px;
  border: none;
  background-color: hsla(220, 61%, 88%, 1);
  border-radius: 12px;
  border: 1px solid transparent;
  transition: all 300ms ease-in;
  box-sizing: border-box;
  visibility: hidden;
  position: relative;
  .dropzone {
    height: 0px;
    transition: all 300ms ease-in;
    opacity: 0;
    margin-top: -3px;
    border-radius: 12px;
    visibility: hidden;
  }
  &.active {
    height: 150px;
    visibility: visible;
    padding: 1rem;
    .dropzone {
      height: calc(150px - 2rem);
      border: 3px dashed #999;
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  pointer-events: none;
  line-height: 25px;
  font-size: 16px;
  font-weight: 700;
  color: #999;
  top: calc(50% - 12.5px);
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
  opacity: 0;
  transition: all 300ms ease;
  &.active {
    opacity: 1;
  }
`;

export const PreviewList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
  height: 0%;
  border: 0px solid transparent;
  box-sizing: border-box;
  &.active {
    height: 100%;
    width: calc(100% - calc(2rem + 150px));
    margin-left: 66px;
  }
`;

export const PreviewImage = styled.img`
  vertical-align: middle;
  height: 100%;
  width: 100%;
  border-radius: 12px;
`;

export const PreviewWrapper = styled.div`
  flex-basis: calc(33.33% - 2rem);
  height: 100%;
  margin: 1rem;
  position: relative;
  button {
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 2px 6px;
    border: 1px solid red;
    background: red;
    color: white;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const PreviewCaption = styled.p`
  font-size: 14px;
  font-weight: 700;
  padding: 8px;
  span {
    font-size: 13px;
    font-weight: 700;
    margin-left: 1rem;
  }
`;
