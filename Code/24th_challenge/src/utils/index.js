export const LINK_REL = "noopener noreferrer nofollow";

export const onAuthRequired = ({ history }) => {
    history.push('/login');
}