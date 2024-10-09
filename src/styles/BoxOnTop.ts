import styled from "styled-components";


export const BoxOnTop = styled.div`
    width: 100%;
    margin-top: -5.5rem;

    padding: 2rem 2.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 28px 0 rgba(0,0,0, 0.2);

    background: ${props => props.theme['base-profile']};

    z-index: 10;
`