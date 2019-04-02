import React from 'react';

import { LINK_REL } from 'utils';

import { Title, SocialLinks, SocialLink, Wrapper } from './styles';

const Home = () => (
    <Wrapper>
        <Title>
            Welcome to <span>Hacker News Clone</span>
        </Title>
        <SocialLinks>
            <SocialLink>
                <i className="fab fa-github-square"></i>
                <a href="https://github.com/benrkia/30DaysOfReact" target="_blank" rel={LINK_REL}>
                    Ilyasse Benrkia
                </a>
            </SocialLink>
            <SocialLink>
                <i className="fab fa-github-square"></i>
                <a href="https://github.com/DevC-Casa/30DaysOfReact" target="_blank" rel={LINK_REL}>
                    Facebook Developer Circle
                </a>
            </SocialLink>
            <SocialLink>
                <i className="fab fa-facebook-square"></i>
                <a href="https://www.facebook.com/groups/DevC.Casablanca/" target="_blank" rel={LINK_REL}>
                    Facebook Developer Circle
                </a>
            </SocialLink>
        </SocialLinks>
    </Wrapper>
);

export default Home;