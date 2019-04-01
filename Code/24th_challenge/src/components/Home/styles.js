import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    text-align: center;
    font-weight: 300;
    & > span {
        display: block;
        font-weight: bold;
        color: white;
    }
`;

export const SocialLinks = styled.ul`
    display: flex;
`;

export const SocialLink = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
    flex: 1;

    &:hover {
        color: white;
    }

    & > i {
        font-size: 1.5em;
    }

    & > a {
        text-align: center;
    }
`;