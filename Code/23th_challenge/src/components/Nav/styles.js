import styled from 'styled-components';

const HEIGHT = 48;

export const Header = styled.header`
	background-color: ${({ theme }) => theme.backgroundSecondary};
	height: ${HEIGHT}px;
	width: 100%;
	box-shadow: 0 1px 0 0 black;
	position: fixed;
	top: 0;
	z-index: 9999;
`;

export const Content = styled.div`
	height: 100%;
	width: 100%;
	max-width: 85%;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavSection = styled.ul`
	display: flex;
	align-items: center;
`;

export const NavItem = styled.li`
	line-height: ${HEIGHT}px;
	padding: 0 10px;

	& > button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		color: inherit;
		font-size: 16px;
	}
`;