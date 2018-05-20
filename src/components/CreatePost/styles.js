import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 100%;
  display: block;
  border: 1px solid none;
  background-color: hsla(220, 61%, 88%, 1);
  border-radius: 12px;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem 1rem 0 1rem;
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
  min-height: calc(150px - 2rem);
  margin: 0 8px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid yellow;
  position: relative;
`;

export const Text = styled.textarea`
  display: block;
  border-radius: 12px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  min-height: inherit;
  padding: 8px;
  font-size: 14px;
  color: #999;
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  flex-basis: 100px;
  align-self: stretch;
  align-self: flex-end;
  margin-left: 8px;
  height: 100%;
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

export const WordCount = styled.p`
  font-size: 14px;
`;

export const Button = styled.button`
  width: 100%;
  background: hsla(230, 80%, 60%, 1);
  border: 1px solid hsla(230, 80%, 60%, 1);
  border-radius: 12px;
  color: white;
  font-size: 15px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  cursor: pointer;
  svg {
    margin: 0;
    margin-left: 8px;
    stroke: white;
    fill: white;
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

export const FilesList = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
  height: 0px;
  border: 1px solid #000;
  transition: all 300ms ease-in;
  box-sizing: border-box;
  &.active {
    padding: 1rem;
    height: 100%;
  }
`;

export const FileItem = styled.div`
  padding: 0.5rem;
  border: 1px solid red;
`;

export const PreviewList = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 1rem;
  height: 0%;
  border: 0px solid transparent;
  box-sizing: border-box;
  &.active {
    height: 100%;
    padding: 1rem;
    width: calc(100% - calc(2rem + 150px));
    margin-left: 66px;
  }
`;

export const PreviewImage = styled.img`
  vertical-align: middle;
  height: 100%;
  width: 100%;
`;

export const PreviewWrapper = styled.div`
  flex-basis: calc(33.33% - 2rem);
  height: 100%;
  margin: 1rem;
`;

export const PreviewCaption = styled.p`
  font-size: 15px;
  font-weight: 300;
  padding: 8px;
  span {
    font-size: 14px;
    font-weight: 400;
    margin-left: 1rem;
  }
`;
