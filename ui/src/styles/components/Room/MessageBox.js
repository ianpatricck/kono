import styled from "styled-components";

const MessageBox = styled.main`

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 70vh;

.messages {
    width: 70%;
}

.messages div {
    margin: 1%;
    padding-left: 1%;
    border-radius: 10px;
}

.messages div span {
    font-family: "M PLUS"; 
    font-size: 1.09em;
    font-weight: 800;
}

.messages div p {
    font-family: "Andika";
    font-size: 1.2em;
    margin: 0;
    color: white;
}

.messages .sent {
    background-color: ${(props) => props.theme.colors.bgLight};
}

.messages .sent span {
    color: ${(props) => props.theme.colors.hvBgSecondary};
}

.messages .reveived {
    background-color: ${(props) => props.theme.colors.bgSuccess};
}

.messages .reveived span {
    color: ${(props) => props.theme.colors.clAuthor};
}

`

export { MessageBox };

