import styled from '@emotion/styled'

const LogoBox = styled.span`
  height: 4rem;

  display: inline-flex;
  align-items: center;

  font-size: 1.1rem;
  font-weight: bold;

  img {
    transition: 300ms ease;
  }
  &:hover img {
    transform: rotate(-15deg);
  }
`

export default LogoBox
