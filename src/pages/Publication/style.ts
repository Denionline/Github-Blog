import styled from "styled-components";
import { BoxOnTop } from "../../styles/BoxOnTop";


export const PublicationContainer = styled.section`
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin-bottom: 5rem;
`


export const StartInformations = styled(BoxOnTop)`
    width: 100%;

    display: flex;
    flex-direction: column;

    h2{
        margin: 1.25rem 0 0.5rem 0;
        font-size: 1.5rem;
        
        color: ${props => props.theme['base-title']};
    }

    & > div{
        &:first-child{
            display: flex;
            align-items: center;
            justify-content: space-between;

            color: ${props => props.theme['blue']};

            font-size: 0.75rem;
            text-transform: uppercase;

            a{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                color: ${props => props.theme['blue']};
                border-bottom: 2px solid transparent;

                &:hover{
                    border-bottom: 2px solid ${props => props.theme['blue']};
                    transition: all .1s;
                }
            }
        }

        &:last-child{
            display: flex;
            align-items: center;
            gap: 2rem;

            div{
                display: flex;
                align-items: center;
                gap: 0.5rem;

                svg{
                    color: ${props => props.theme['base-label']};
                }
                span{
                    color: ${props => props.theme['base-span']};
                }
            }
        }
    }
`

export const ContentPublication = styled.div`
    margin-top: 2.5rem;

    max-width: 100%;

    color: ${props => props.theme['base-text']};

    padding: 0 2rem;

    & > *{
        margin-bottom: 1rem;
    }

    img{
        width: 100%;
    }

    pre{
        overflow-x: auto;
        background: ${props => props.theme['base-label']};
        code{
            word-wrap: break-word;
        }
    }
`