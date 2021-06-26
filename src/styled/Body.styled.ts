import styled from 'styled-components';

export const BodyWrapper = styled.main`
  border: 6px solid teal;
  border-radius: 5px;
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.7rem;
    background-color: teal;
    color: #f4f4f4;
    border: transparent;
    border-radius: 5px;
    margin: 0 6rem 2rem 6rem;
  }
`;

// * FORM

export const Form = styled.form`
  padding: 1rem 4rem;
  border-bottom: 2px dotted teal;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    .section__span {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      width: 40rem;
      height: 2rem;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 0.16rem transparent;
      border-radius: 5px;
    }

    input:focus {
      outline: none !important;
      border: 0.16rem solid teal;
    }

    textarea {
      width: 40rem;
      border: 0.16rem transparent;
      border-radius: 5px;
      font-size: 1rem;
      padding: 1rem;
    }

    textarea:focus {
      outline: none !important;
      border: 0.16rem solid teal;
    }

    .degree-select {
      span {
        margin-right: 0.5rem;
        font-family: 'Comfortaa';
      }
      select {
        width: 40rem;
        height: 2rem;
        padding: 1rem;
        margin-bottom: 1rem;
        border: 0.16rem transparent;
        border-radius: 5px;
        padding: 0.2rem;
      }

      select:focus {
        outline: none !important;
        border: 0.16rem solid teal;
      }
    }
  }

  .btn-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;

    button {
      cursor: pointer;
      font-size: 1rem;
      padding: 0.7rem;
      background-color: teal;
      color: #f4f4f4;
      border: transparent;
      border-radius: 5px;
    }

    .btn-reset {
      background-color: #1a1a1a;
    }
  }
`;

export const SectionName = styled.span`
  font-family: 'Comfortaa';
  color: #f4f4f4;
  padding: 0.2rem 1rem;
  margin: 0.5rem 0;
  background-color: teal;
  border-radius: 5px;
`;

// * CV OUTPUT
export const CVContainer = styled.div`
  border: 2px solid #1a1a1a;
  margin: 2rem auto;
  padding: 5rem;
  background-color: #ffff;
  min-width: 800px;
  max-height: 900px;
  max-width: 800px;
  min-height: 900px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.6rem;
    border-bottom: 2px solid #1a1a1a;
    margin-bottom: 6rem;

    h3 {
      font-size: 1.6rem;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      .email {
        margin-bottom: 0.7rem;
      }

      p {
        font-size: 1.26rem;
      }
    }
  }

  section {
    margin-bottom: 6rem;
    h4 {
      font-size: 1rem;
      font-weight: bold;
      padding-bottom: 0.4rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid #707070;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  strong {
    font-size: 1.3rem;
    margin-right: 1.2rem;
  }

  p {
    font-size: 1.33rem;
  }
`;
