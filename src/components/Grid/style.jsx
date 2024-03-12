import styled from "styled-components";

export const Table = styled.div`
width: 90%;
background: #171923;
color: #fff;
border-radius: 5px;
padding: 20px;
max-width: 1120px;
margin: 20px auto;

`;

export const Th = styled.th`
text-align: center;
border-bottom: 2px solid #fff;
padding-bottom: 5px;
text-align: ${props => props.aligncenter ? "center" : "start"};
width: ${props => props.width ? props.width + "%" : "auto"};
`;

export const Td = styled.td`
padding-top: 15px;
word-break: break-all;
color: #fff;
text-align: ${props => props.aligncenter ? "center" : "start"};

svg{
    width: 20px;
    height: 20px;
}


`;