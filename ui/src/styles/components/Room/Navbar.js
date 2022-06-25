import styled from "styled-components";

const Navbar = styled.header`

display: grid;
grid-template-columns: 1fr 1fr;
padding: 2%;
margin-bottom: 1%;
border-bottom: 2px dashed dimgray;
background-color: ${(props) => props.theme.colors.bgPrimary};
position: relative;
z-index: 1;

nav {
    display: flex;
    padding: 2%;
    margin: 1%;
}

    .options {
        display: flex;
    }

    .options button {
        max-height: 50%;  
        font-size: 1.2em;
        font-family: "Andika";
        color: white;
        background-color: ${(props) => props.theme.colors.bgDim};
        border: 1px solid white;
        border-radius: 5px;
    }

    .options button:hover {
        cursor: pointer;
    }

    .users {
        overflow-x: scroll; 

        ::-webkit-scrollbar {
            background-color: transparent;
        }

        ::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.colors.bgSuccess};
            border-radius: 10px;
        }
    }

    .users div {
        background-color: green;
        margin: 1%;
        padding: 3%;
        border-radius: 20px;
        font-family: "M PLUS";
        color: white;
    }

`

export { Navbar };

