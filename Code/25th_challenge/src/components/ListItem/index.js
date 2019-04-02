import React from 'react';
import TimeAgo from 'react-timeago';

import { LINK_REL, HN_USER, HN_ITEM, getSiteHostname, getArticleLink } from 'utils';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const ListItem = ({ id, title, url, score, by, time, kids = [] }) => {

	const site = getSiteHostname(url);
	const link = getArticleLink({ url, id });
	const commentUrl = `${HN_ITEM}${id}`;
	const userUrl = `${HN_USER}${by}`;


	return (
		<Item>
			<ExernalLink href={link} rel="nofollow noreferrer noopener" target="_blank">
				<Title>
					{title} <Host>({site})</Host>
				</Title>
			</ExernalLink>
			<Description>
				{score} points by
				{' '}
				<CommentLink href={userUrl} rel={LINK_REL} target="_blank">
					{by}
				</CommentLink>{' '}
				<TimeAgo date={new Date(time * 1000).toISOString()} />
				{' | '}
				<CommentLink href={commentUrl} rel={LINK_REL} target="_blank">
					{kids.length} Comments
				</CommentLink>
			</Description>
		</Item>
	);
}

export default ListItem;
