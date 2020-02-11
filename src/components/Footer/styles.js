import styled from '@emotion/styled'
import { Link } from 'gatsby'

import { breakpoints } from '../../utils/styles'

export const Wrapper = styled.div`
  background: #0f0f0f;
  color: rgba(200,200,200,.8);
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 2.45rem;
  flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
`

export const MenuList = styled.ul`
    color: ghost;
    list-style: none;
    margin: 0;
    padding:0;
    display: inline-flex;
    flex-direction: column;

    li {
        margin: 0;
        padding: .45rem;
    }
`



export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.s}px){
    font-size: 1.4rem
  }
`

export const CartCounter = styled.span`
  background-color: white;
  color: #663399;
  border-radius: 20px;
  padding: 0 10px;
  font-size: 1.2rem;
  float: right;
  margin: -10px;
  z-index: 20;
`






