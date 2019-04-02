import { connect } from 'react-redux';
import actions from 'store/story/actions';

import News from './News';

const mapStateToProps = ({ story }) => ({
    stories: story.stories,
    storyIds: story.storyIds,
    page: story.page,
    isFetching: story.isFetching,
    error: story.error,
});

const mapDispatchToProps = dispatch => ({
    fetchFirstPageStories: () => dispatch(actions.fetchStoryIds()),
    fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);