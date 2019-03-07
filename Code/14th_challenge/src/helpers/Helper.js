/**
 * Generate the header
 * This will help better in case we have additional parameters for the header
 * i.e Authorization in the authentication case.
*/
export function Header() {

    const header = {
        'Content-Type': 'application/json; charset=UTF-8',
    };

    return header;
}

/** 
 * @param response
 * handle the response of each request
 * return either the data or fire a reject 
*/
export function handleResponse(response) {

    return response.json().then(data => {
        
        if (!response.ok) {

            const { status } = response;
            const error = response.status === 404 ? 'Not Found' : 'There is an error';
            
            return Promise.reject({status, error});
        }

        return data;

    });
}