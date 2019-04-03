import { createSelector } from 'reselect';

const storiesSelector = story => story.stories;
const storyIdsSelector = story => story.storyIds;

export const hasMoreStoriesSelector = createSelector(
    [storiesSelector, storyIdsSelector],
    (stories, storyIds) => stories.length < storyIds.length
);