import styled from 'styled-components';
export const AlertH = styled.h2`
font-size:2.4rem;
color:red;
display:${({invalid})=>invalid?'block':'none'};
`
export const List = styled.ul`
list-style:none;
`
export const FlexLabel = styled.label`
padding:20px;
width:100%;
text-align:center;
display:flex;
justify-content:space-around;
`
export const FlexItem = styled.div`
width:50%;
`
export const Form = styled.form`
margin:10px 20vw;
width:60vw;
display:flex;
flex-direction:column;
text-align:center;
`
