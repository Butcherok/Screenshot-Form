import styled from '@emotion/styled';

const size = {
  mobile: '320px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 6px;
  border-radius: 12px;
  margin: 0px;
  padding: 12px 12px 0px;
  margin-bottom: 12px;
  min-width: 100%;
  overflow: hidden;

  font-family: InterVariable, sans-serif;
  font-weight: 400;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;
`;
export const TableWrapper = styled.div``;

export const DataWrapper = styled.div`
  display: table;
  width: 100%;
  min-width: 650px;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font-family: InterVariable, sans-serif;
  font-weight: 400;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;
`;
export const InputWrapper = styled.div`
  display: table-row;
  margin: 0px;
  padding: 0px;
  border: 0px;

  font-family: InterVariable, sans-serif;
  font-weight: 400;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;
  color: rgb(153, 153, 153);
`;

export const TableCellHead = styled.div`
  display: table-cell;
  margin: 0px;
  border: 0px;
  padding: 12px 14px 12px 0px;
  vertical-align: middle;
  position: relative;
  text-align: right;
  font-family: InterVariable, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;

  &:first-child {
    text-align: left;
    padding-right: 0px;
  }
  &:nth-child(2) {
    text-align: left;
    padding-right: 0px;
  }
`;
export const TableCell = styled.div`
  display: table-cell;
  margin: 0px;
  border: 0px;
  padding: 12px 14px 12px 0px;
  vertical-align: middle;
  position: relative;
  text-align: right;
  font-family: InterVariable, sans-serif;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;

  line-height: 18px;
  letter-spacing: 0px;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;
  flex: 0.6 1 0%;

  &:first-child {
    font-weight: 600;
    text-align: left;
    padding-right: 0px;
  }
  &:nth-child(2) {
    text-align: left;
    padding-right: 0px;
  }
  &:nth-child(2),
  :nth-child(3) {
    color: rgb(103, 208, 53);
  }
`;
export const TextWrapper = styled.div`
  display: table-row;
  padding: 12px 14px 12px 0px;
  text-align: right;
  letter-spacing: -0.005em;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  position: relative;
  background-color: rgba(103, 208, 53, 0);
  color: rgb(36, 48, 52);
  font-family: InterVariable, sans-serif;
  font-variant-numeric: lining-nums tabular-nums;
  font-variant-ligatures: none;
  font-feature-settings: 'cv01', 'ss01';
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizelegibility;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s ease 0s;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100px;
  min-width: 35px;
`;

export const Title = styled.h1`
  margin-bottom: 25px;

  font-size: 38px;
  font-weight: 700;
  color: #282828;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    font-size: 44px;
  }
`;

export const Subtitle = styled.h2`
  margin: 0 auto;

  margin-bottom: 20px;

  font-size: 32px;
  font-weight: 500;
  color: #282828;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;

  font-size: 18px;
  line-height: 1.8;
  color: rgba(47, 47, 47, 0.6);
`;

export const Info = styled.p`
  font-style: italic;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const InfoLink = styled.a`
  position: relative;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 1px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 300ms ease-in-out;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

    background-color: #fff;
    border-radius: 5px;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover,
  :focus {
    color: #fff;
  }
`;
