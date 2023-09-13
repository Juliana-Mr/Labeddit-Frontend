import styled from "styled-components";

export const SignupPageContainer = styled.main`
  height: 100%;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  #logo {
    width: 152px;
  }

  h1 {
    font-size: 16px;
  }
`

export const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #logo {
    width: 152px;
  }

  h1 {
    font-size: 33px;
    margin: 0.5rem 0;
  }
`

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      color: #323941;
      width: 100%;
      max-width: 365px;
      height: 60px;
      margin: 0.5rem 0;
      padding: 10px;
      border: 1px solid lightgray;
    }
  }

  button {
    width: 100%;
    max-width: 365px;
    height: 51px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border: none;
  }

  button.primary {
    background-color: #FC8B6B;
    color: white;
    margin-top: 3rem;
  }

  .hr-line {
    margin: 1rem 0;
  }
`

