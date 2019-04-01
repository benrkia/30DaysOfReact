// this utility help us build an action creator
export const buildActionCreator = type => {
    return (payload = {}) => ({
        type,
        payload,
    });
}

const mapTypeToRequest = type => ({
    request: buildActionCreator(`${type}_REQUEST`),
    success: buildActionCreator(`${type}_SUCCESS`),
    failure: buildActionCreator(`${type}_FAILURE`),
});

export const buildRequestCreator = (type, requestCallback) => {
    const request = mapTypeToRequest(type);
    return (payload = {}) => dispatch => requestCallback({ request, payload, dispatch });
};