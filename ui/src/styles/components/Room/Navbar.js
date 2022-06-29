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

.options button {
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

`

export { Navbar };

