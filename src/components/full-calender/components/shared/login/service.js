import fetchData from '../../shared/fetchData';

export const loginCredentials =async (payload)=>{
    const myData = await fetchData('login', {
        method: 'POST',
        body: JSON.stringify(payload)	
    });

    return myData;
};
