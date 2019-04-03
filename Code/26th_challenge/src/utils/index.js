import url from 'url';

export const LINK_REL = "noopener noreferrer nofollow";

export const onAuthRequired = ({ history }) => {
    history.push('/login');
}

const HN_ROOT = 'https://news.ycombinator.com';

export const HN_ITEM = `${HN_ROOT}/item?id=`;
export const HN_USER = `${HN_ROOT}/user?id=`;

// if we don't have a url this function helps us 
// build an internal url using the id of the story
export const getArticleLink = ({ url, id }) => {
  const commentUrl = `${HN_ITEM}${id}`;
  const link = !!url ? url : commentUrl;
  return link;
};

// We'll use it to extract the hostname from a given url.
// if the given url is undefined, it'll return the hostname of the hn_root
export const getSiteHostname = siteUrl => {

    if(!siteUrl) {
        siteUrl = HN_ROOT;
    }

    let hostname = '';

    if (siteUrl) {
        if (!siteUrl.includes('//')) {
            siteUrl = `http://${siteUrl}`;
        }

        hostname = url.parse(siteUrl).hostname;
    }

    if (hostname.includes('www.')) {
        hostname = hostname.split('www.')[1];
    }
    
    return hostname;
};