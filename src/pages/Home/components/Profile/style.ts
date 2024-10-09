import styled from "styled-components";
import { BoxOnTop } from "../../../../styles/BoxOnTop";

export const ProfileContainer = styled(BoxOnTop)`
    display: flex;
    align-items: center;
    gap: 2rem;

    img{
        height: 9.25rem;
        border-radius: 8px;
    }

    & > div{
        flex: 1;
        p{
            margin: 0.5rem 0 1.5rem 0;

            color: ${props => props.theme['base-text']};
            
            font-size: 1rem;
        }
    }
`

export const NameOfGit = styled.div`
    margin-top: 0.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme['blue']};

    h3{
        color: ${props => props.theme['base-title']};
        font-size: 1.5rem;
        line-height: 130%;
    }

    a{
        text-decoration: none;
    }

    a{
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 0.75rem;
        font-weight: bold;

        color: ${props => props.theme['blue']};
        border-bottom: 2px solid transparent;
        
        cursor: default;

        &:hover{
            border-bottom: 2px solid ${props => props.theme['blue']};
            transition: all .1s;
        }
    }
`

export const OthersInformations = styled.div`
    display: flex;
    align-items: center;

    gap: 1.5rem;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        gap: 0.5rem;

        span{
            color: ${props => props.theme['base-subtitle']};

            font-size: 1rem;
        }

        svg{
            color: ${props => props.theme['base-label']};

            font-size: 1.125rem;
            inset: 0;
        }
    }
`