import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  margin-bottom: 1.45rem;
  margin-top:1.45rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;

  :before {
    content: '- '
  }
`