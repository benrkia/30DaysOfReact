import { useState, useEffect } from 'react';

const useStorage = () => {
	
	const [localStorageAvailable, setLocalStorageAvailable] = useState(true);

	useEffect(() => {

		const testItem = 'random';
		
		try {
			localStorage.setItem(testItem, testItem);
			localStorage.removeItem(testItem);
			setLocalStorageAvailable(true);
		} catch(e) {
			setLocalStorageAvailable(false);
		}

	});

    const isLocalStorageAvailable = () => {
        return localStorageAvailable;
    }

    const load = (key) => {

        if(isLocalStorageAvailable()) {
            return JSON.parse(localStorage.getItem(key));
        }

        return null;
    }

    const save = (key, data) => {

        if(isLocalStorageAvailable()) {
            localStorage.setItem(key, JSON.stringify(data));
        }
    }

    const remove = (key) => {

        if(isLocalStorageAvailable()) {
            localStorage.removeItem(key);
        }
	}
	
	return { load, save, remove };
}

export default useStorage;