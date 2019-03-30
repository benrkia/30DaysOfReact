import React from 'react';

import { LINK_REL } from 'utils';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const ListItem = () => (
	<Item>
		<ExernalLink href="https://www.facebook.com/groups/DevC.Casablanca/" rel="nofollow noreferrer noopener" target="_blank">
			<Title>
				Facebook Developer Circle <Host>(facebook.com)</Host>
			</Title>
		</ExernalLink>
		<Description>
			80000 points by{' '}
			<CommentLink href="#" rel={LINK_REL} target="_blank">
				ilyasse benrkia 
			</CommentLink>{' '}
			1 Hour Ago{' | '}
			<CommentLink href="#" rel={LINK_REL} target="_blank">
				200 Comments
			</CommentLink>
		</Description>
	</Item>
);

export default ListItem;
