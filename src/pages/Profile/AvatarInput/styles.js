import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 3px solid #7159c1;
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
