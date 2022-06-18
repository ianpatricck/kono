import styled from "styled-components";

const TextField = styled.form`

display: flex;
align-items: center;
justify-content: space-between;
width: 65%;
border: 2px solid ${(props) => props.theme.colors.hvBgSuccess};
border-radius: 5px;

input {
    font-size: 1.5em;
    background-color: transparent;
    resize: none;
    padding: 1%;
    color: white;
    width: 90%;
    border: none;
}

input:focus {
    outline: none;
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-right: 1%;
}

button img {
    height: 70%;
}

`

export { TextField };

