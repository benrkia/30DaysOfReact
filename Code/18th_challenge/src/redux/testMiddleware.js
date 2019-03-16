const testMiddleware = (store) => (next) => (action) => {
    // Our middleware
    console.log(`Log from test Middleware:`, action)
    // call the next function
    next(action);
  }
  
  export default testMiddleware