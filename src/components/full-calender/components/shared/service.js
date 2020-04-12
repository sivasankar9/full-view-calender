import fetchCallData from './fetchData';

export const getEventsData =async () => {

    const myData = await fetchCallData('events');
    return myData;
};

export const postEventsData =async (payload) => {

    const myData = await fetchCallData('events',{
        method: 'POST',
        body: JSON.stringify(payload)	
    });
    return myData;
};
