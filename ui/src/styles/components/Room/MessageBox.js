import styled from "styled-components";

const MessageBox = styled.main`

display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 70vh;

    .loading {
        font-family: "M PLUS";
        color: ${(props) => props.theme.colors.clAuthor};
        font-size: 1.2em;
        margin: 1%;
    }

    .messages {
        width: 70%;
        overflow-x: scroll; 

        ::-webkit-scrollbar {
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.colors.bgSuccess};
            border-radius: 10px;
        }
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

    .messages .received {
        background-color: ${(props) => props.theme.colors.bgSuccess};
    }

    .messages .received span {
        color: ${(props) => props.theme.colors.clAuthor};
    }

`

export { MessageBox };

