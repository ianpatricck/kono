import { Link } from "react-router-dom";
import styled from 'styled-components';

const HomeDisplay = styled.form`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 70vh;

h1 {
    color: ${(props) => props.theme.colors.clPrimary};
    font-family: 'Russo One';
    font-size: 30pt;
}

div {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

input {
    border: none;
    border: .1rem solid black;
    border-radius: 4px;
    color: white;
    padding: 15px;
    margin: 15px;
    font-size: 15pt;
    background-color: ${(props) => props.theme.colors.bgGray};

    &:focus {
        outline: none;
    }
}

input::placeholder {
    color: gray;
}

button {
    background-color: ${(props) => props.theme.colors.bgSecondary};
    color: white;
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    width: 40%; 
    border: none;
    padding: 13px;
    margin: 2%;
    border-radius: 5px;

    &:hover {
        background-color: ${(props) => props.theme.colors.hvBgSecondary};
        cursor: pointer;
    }
}

`

const StyledLink = styled(Link)`

color: white;
font-family: Andika;
font-size: 20px;
text-decoration: none;

&:hover {
    color: ${(props) => props.theme.colors.clAuthor};
}

`

export {
    HomeDisplay,
    StyledLink
};
