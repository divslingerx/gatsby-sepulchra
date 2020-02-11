import styled from '@emotion/styled'
import image1 from "../../images/img1.jpg"

import { breakpoints } from '../../utils/styles'




export const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  min-height: 100%;
  
  background-image: url(${ image1});
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  
 

  .store-name {
    background: gold;
    color: goldenrod;
    font-size: 2rem;
    padding: 1rem;
    align-self: flex-end;
    justify-self: flex-start;
    margin-left: 2rem;
    margin-bottom: 10%;
  }
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