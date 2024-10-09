import styled from "styled-components";


export const PublicationsContainer = styled.section`
    margin-top: 4.5rem;
    width: 100%;

    margin-bottom: 5rem;

    & > div:first-child{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3{
            color: ${props => props.theme[`base-subtitle`]};
        }
        span{
            color: ${props => props.theme[`base-span`]};
        }

        margin-bottom: 0.75rem;
    }

    input{
        width: 100%;

        border: 0;
        padding: 0.75rem 1rem;
        border-radius: 6px;

        border: 1px solid ${props => props.theme['base-border']};
        background: ${props => props.theme['base-input']};

        color: ${props => props.theme['base-text']};

        &::placeholder{
            color: ${props => props.theme['base-label']};
        }

        &:focus{
            outline: 0;
            box-shadow: 0 0 0 1px ${props => props.theme['blue']};
        }
    }
`

export const CardGrid = styled.div`
    margin-top: 3rem;

    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    columns: 26rem;
    gap: 2rem;
`

export const Card = styled.div`
    height: 16.25rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;

    background: ${props => props.theme['base-post']};

    div{
        width: 100%;

        display: flex;
        align-items: start;
        justify-content: space-between;

        h3{
            color: ${props => props.theme['base-title']};

            font-size: 1.25rems;
        }

        span{
            color: ${props => props.theme['base-span']};

            font-size: 0.875rem;
            white-space: nowrap;
        }
    }

    p{
        color: ${props => props.theme['base-text']};

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        line-height: 160%;
    }

    &:hover{
        box-shadow: inset 0 0 0 2px ${props => props.theme['base-label']};
        transition: all .2s;
    }
`