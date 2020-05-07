import fetchCallData from './fetchData';

export const getEventsData =async () => {

    const myData = await fetchCallData('events');

    return myData;
};

export const getCalenderEventsData =async () => {

    const myData = await fetchCallData('new-calender');

    return myData;
};

export const postEventsData =async (payload) => {

    const myData = await fetchCallData('events', {
        method: 'POST',
        body: JSON.stringify(payload)	
    });

    return myData;
};

export const postNewCreateEventsData =async (payload) => {

    const myData = await fetchCallData('new-calender', {
        method: 'POST',
        body: JSON.stringify(payload)	
    });

    return myData;
};

export const updateNewCalender =async (payload) => {

    const myData = await fetchCallData('update-new-calender', {
        method: 'POST',
        body: JSON.stringify(payload)	
    });

    return myData;
};
export const getNewCalender =async () => {

    const myData = await fetchCallData('update-new-calender');

    return myData;
};

export const getProrityData =async () => {

    const myData = await fetchCallData('priority-events');

    return myData;
};
