import {
  Container,
  Wrapper,
  DataWrapper,
  Subtitle,
  InputWrapper,
  TextWrapper,
  TableWrapper,
  TableCell,
  TableCellHead,
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
        <TableWrapper>
          <DataWrapper role="table">
            <InputWrapper role="table-row">
              <TableCellHead colspan="1" role="columnheader">
                Instrument
              </TableCellHead>
              <TableCellHead>Side</TableCellHead>
              <TableCellHead colspan="1" role="columnheader">
                Price
              </TableCellHead>
              <TableCellHead colspan="1" role="columnheader">
                Total size
              </TableCellHead>
              <TableCellHead colspan="1" role="columnheader">
                Total volume
              </TableCellHead>
              <TableCellHead colspan="1" role="columnheader">
                Date
              </TableCellHead>
              <TableCellHead colspan="1" role="columnheader">
                Trade ID
              </TableCellHead>
            </InputWrapper>
            <TextWrapper role="row">
              <TableCell role="cell">{myInputInstrument}</TableCell>
              <TableCell role="cell">{InputSide}</TableCell>
              <TableCell role="cell">{InputPrice}</TableCell>
              <TableCell role="cell">{InputSize}</TableCell>
              <TableCell role="cell">{InputVolume}</TableCell>
              <TableCell role="cell">{InputDate}</TableCell>
              <TableCell role="cell">{InputTrade}</TableCell>
            </TextWrapper>
          </DataWrapper>
        </TableWrapper>
      </Wrapper>
    </Container>
  );
};
