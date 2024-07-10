import {
  Container,
  Wrapper,
  DataWrapper,
  Subtitle,
  InputWrapper,
} from 'components/App.styled';
export const App = () => {
  return (
    <Container>
      <Wrapper>
        <Subtitle>Input data</Subtitle>
        <DataWrapper>
          <InputWrapper>
            <label>Instrument</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Side</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Price</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Total size</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Total volume</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Date</label>
            <input />
          </InputWrapper>
          <InputWrapper>
            <label>Trade Id</label>
            <input />
          </InputWrapper>
        </DataWrapper>
      </Wrapper>
    </Container>
  );
};
