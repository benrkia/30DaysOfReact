import ApiService from './Api';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';
const JSON_QUERY = '.json'; // This query parameter is required at the end request url

const client = new ApiService({ baseURL: BASE_URL });

// Our main object
const hackerNewsApi = {};

// Our default page limit.
const PAGE_LIMIT = 20;

// This function helps us get the index of the first id and the last id that should be shown in the current page
const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });

// Return the Ids in the range [begin, end]
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

// Get all the Ids of top stories
hackerNewsApi.getTopStoryIds = () => client.get(`/topstories${JSON_QUERY}`);

// Get a story by id
hackerNewsApi.getStory = id => client.get(`/item/${id}${JSON_QUERY}`);

// We are implementing a pagination system, so we need a function to get stories by page
hackerNewsApi.getStoriesByPage = (ids, page) => {
    const { begin, end } = getPageSlice(PAGE_LIMIT, page);
    const activeIds = getPageValues({ begin, end, items: ids });
    const storyPromises = activeIds.map(id => hackerNewsApi.getStory(id));

    // Wait for all the calls to complete before returning the result
    return Promise.all(storyPromises);
};

export default hackerNewsApi;