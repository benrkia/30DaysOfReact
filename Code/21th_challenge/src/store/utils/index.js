// this utility help us build an action creator
export const buildActionCreator = type => {
    return (payload = {}) => ({
        type,
        payload,
    });
}