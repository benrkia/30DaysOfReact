import styled, { keyframes } from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.textSecondary};
    font-size: 20px;
    font-weight: 300;
`;

export const NoStories = styled.h3`
    text-align: center;
    font-weight: 300;
    text-decoration: line-through;
`;

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
`;

export const Spinner = styled.div`
    margin: auto;
    width: 2rem;
    height: 2rem;
    border: 4px double;
    border-color: ${({ theme }) => theme.text} transparent;
    border-radius: 50%;
    animation: ${spin} 1s infinite linear;
`;