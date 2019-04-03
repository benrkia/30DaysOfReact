import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import List from 'components/List';

import { Title, Spinner, NoStories } from './styles';

class News extends Component {

    componentDidMount() {
        this.props.fetchFirstPageStories();
    }

    fetchStories = () => {
        console.log('hey');
        const { storyIds, page, fetchStories, isFetching } = this.props;
        if(!isFetching) {
            fetchStories({ storyIds, page });
        }
    };

    render() {

        const { stories, isFetching, hasMoreStories } = this.props;

        return (
            <div>
                <Title>
                    Hacker News Clone
                </Title>
                
                {isFetching ?
                    <Spinner />
                :
                    (stories.length ?
                        <InfiniteScroll
                            pageStart={0}
                            initialLoad={false}
                            loadMore={this.fetchStories}      
                            hasMore={hasMoreStories}
                            threshold={5}
                            loader={<Spinner key={0} />}
                        >
                            <List stories={stories} />
                        </InfiniteScroll>
                    :
                        <NoStories>There is no stories</NoStories>
                    )
                }
                
            </div>
        );
    }
}

export default News;