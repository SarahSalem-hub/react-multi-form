import styled from '@emotion/styled'

export const ContainerDiv = styled.div`
background-color: white;
// margin: 20px 200px;
height: 100%;
width: 100%;
border-radius: 25px;
display: grid; 
  grid-template-columns: 35% 1fr; 
  
 @media screen and (max-width: 956px ){
    // background-color : lightgrey ;
    grid-template-columns:  1fr; 
    grid-template-rows: 1fr; 
    // padding: 40px;
}

`