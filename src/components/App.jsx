import {
  Container,
  Wrapper,
  DataWrapper,
  Subtitle,
  InputWrapper,
} from 'components/App.styled';
import { useState } from 'react';

export const App = () => {
  const [myInputInstrument, setmyInputInstrument] = useState(' ');
  const [InputSide, setInputSide] = useState(' ');
  const [InputPrice, setInputPrice] = useState(' ');
  const [InputSize, setInputSize] = useState(' ');
  const [InputVolume, setInputVolume] = useState(' ');
  const [InputDate, setInputDate] = useState(' ');
  const [InputTrade, setInputTrade] = useState(' ');

  return (
    <Container>
      <Wrapper>
        <Subtitle>Input data</Subtitle>
        <DataWrapper>
          <InputWrapper>
            <label htmlFor="Instrument">Instrument</label>
            <input
              type="text"
              name="Instrument"
              id="Instrument"
              autoComplete="off"
              placeholder={'USDT-BTC'}
              onChange={event => setmyInputInstrument(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Side">Side</label>
            <input
              type="text"
              name="Side"
              id="Side"
              autoComplete="off"
              placeholder={'Buy'}
              onChange={event => setInputSide(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Price">Price</label>
            <input
              type="text"
              name="Price"
              id="Price"
              autoComplete="off"
              placeholder={'1.00115435'}
              onChange={event => setInputPrice(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="size">Total size</label>
            <input
              type="text"
              name="size"
              id="size"
              autoComplete="off"
              placeholder={'359846.62289800'}
              onChange={event => setInputSize(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="volume">Total volume</label>
            <input
              type="text"
              name="volume"
              id="volume"
              autoComplete="off"
              placeholder={'360262.00000000'}
              onChange={event => setInputVolume(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Date">Date</label>
            <input
              type="datetime-local"
              step="1"
              name="Date"
              id="Date"
              autoComplete="off"
              placeholder={' '}
              onChange={event => setInputDate(event.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="Trade">Trade Id</label>
            <input
              type="text"
              name="Trade"
              id="Trade"
              autoComplete="off"
              placeholder={'14661102'}
              onChange={event => setInputTrade(event.target.value)}
            />
          </InputWrapper>
        </DataWrapper>
      </Wrapper>
      <Wrapper>
        <Subtitle>Transactions</Subtitle>
        <DataWrapper>
          <InputWrapper>
            <label>Instrument</label>
            <p>{myInputInstrument}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Side</label>
            <p>{InputSide}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Price</label>
            <p>{InputPrice}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Total size</label>
            <p>{InputSize}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Total volume</label>
            <p>{InputVolume}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Date</label>
            <p>{InputDate}</p>
          </InputWrapper>
          <InputWrapper>
            <label>Trade Id</label>
            <p>{InputTrade}</p>
          </InputWrapper>
        </DataWrapper>
      </Wrapper>
    </Container>
  );
};
