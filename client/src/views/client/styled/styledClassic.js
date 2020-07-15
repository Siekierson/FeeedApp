import styled from 'styled-components';
export const EditSidebar= styled.div`
position:fixed;
transition:.5s;
height: 100vh;
width:400px;
right:${({isEditing}) => isEditing?'0':'-400px'};
top:0;
`
export const SidebarList= styled.ul`
list-style:none;
height: 90vh;
padding:10px; 
overflow-x: hidden; 
overflow-y: auto; 
`
export const Flex = styled.div`
margin:40px 20%;
width:60%;
`
export const FlexItem = styled.li`
display:flex;
width:100%;
margin:30px;
justify-content:space-between;
`
export const Sizes = styled.div`
display:grid;
width:35%;
font-size:1.8rem;
grid-template-columns: repeat(3,1fr);
`