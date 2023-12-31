import styled from "styled-components";

export const CommentsPageContainer = styled.main`
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
  overflow-y: scroll;
`

export const PostSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    textarea {
      background-color: #EDEDED;
      color: #323941;
      width: 100%;
      max-width: 365px;
      height: 130px;
      margin: 0.5rem 0;
      padding: 10px;
      font-size: 18px;
      border: none;
      resize: none;
    }
  }

  button {
    width: 100%;
    max-width: 365px;
    height: 51px;
    border-radius: 15px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
  }

  button.primary {
    background-color: #FC8B6B;
    color: white;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`

export const CommentsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`