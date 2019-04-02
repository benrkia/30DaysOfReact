import React, { Component } from 'react';

import List from 'components/List';

import { Title, Spinner, NoStories } from './styles';

class News extends Component {

    componentDidMount() {
        this.props.fetchFirstPageStories();
    }


    render() {

        const { stories, isFetching } = this.props;

        return (
            <div>
                <Title>
                    Hacker News Clone
                </Title>
                
                {isFetching ?
                    <Spinner />
                :
                    (stories.length ?
                        <List stories={stories} />
                    :
                        <NoStories>There is no stories</NoStories>
                    )
                }
                
            </div>
        );
    }
}

export default News;