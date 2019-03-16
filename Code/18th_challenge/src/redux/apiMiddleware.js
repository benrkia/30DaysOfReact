const apiMiddleware = store => next => action => {

    console.log(`Log from api Middleware`, action);
  
    if (!action.meta || action.meta.type !== 'api') {
      return next(action);
    }
  
    // If the action object contains meta data we'll proceed to the api call
    // Find the request URL and compose request options from meta
    const {url} = action.meta;
    const fetchOptions = Object.assign({}, action.meta);
  
    // Make the request
    fetch(url, fetchOptions)
      // convert the response to json
      .then(resp => resp.json())
      .then(json => {
        // respond back to the user
        // by dispatching the original action without the meta object
        let newAction = Object.assign({}, action, {
          // we can return the response directly, but i prefer parse it to javascript date object
          payload: new Date(json.dateString).toString()
        });
  
        next(newAction);
      });
  }
  
  export default apiMiddleware