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
  Input,
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
        <DataWrapper role="table">
          <InputWrapper role="table-row">
            <TableCellHead htmlFor="Instrument">Instrument</TableCellHead>
            <TableCellHead htmlFor="Side">Side</TableCellHead>
            <TableCellHead htmlFor="Price">Price</TableCellHead>
            <TableCellHead htmlFor="size">Total size</TableCellHead>
            <TableCellHead htmlFor="volume">Total volume</TableCellHead>
            <TableCellHead htmlFor="Date">Date</TableCellHead>
            <TableCellHead htmlFor="Trade">Trade Id</TableCellHead>
          </InputWrapper>
          <TextWrapper role="table-row">
            <TableCell>
              <Input
                type="text"
                name="Instrument"
                id="Instrument"
                autoComplete="off"
                placeholder={'USDT-BTC'}
                onChange={event => setmyInputInstrument(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="text"
                name="Side"
                id="Side"
                autoComplete="off"
                placeholder={'Buy'}
                onChange={event => setInputSide(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="text"
                name="Price"
                id="Price"
                autoComplete="off"
                placeholder={'1.00115435'}
                onChange={event => setInputPrice(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="text"
                name="size"
                id="size"
                autoComplete="off"
                placeholder={'359846.62289800'}
                onChange={event => setInputSize(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="text"
                name="volume"
                id="volume"
                autoComplete="off"
                placeholder={'360262.00000000'}
                onChange={event => setInputVolume(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="datetime-local"
                step="1"
                name="Date"
                id="Date"
                autoComplete="off"
                placeholder={' '}
                onChange={event => setInputDate(event.target.value)}
              />
            </TableCell>
            <TableCell>
              <Input
                type="text"
                name="Trade"
                id="Trade"
                autoComplete="off"
                placeholder={'14661102'}
                onChange={event => setInputTrade(event.target.value)}
              />
            </TableCell>
          </TextWrapper>
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
