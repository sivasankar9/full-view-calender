import fetchData from "../../shared/fetchData";

export const userAvailabilityService = async (payload)=>{
    const myData = await fetchData('user', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    return myData.json();
};
export const emailAvailabilityService = async (payload)=>{
    const myData = await fetchData('email', {
        method: 'POST',
        body: JSON.stringify(payload)
    });

    return myData.json();
};
export const registerUserDetailsService = async (payload)=>{
    const myData = await fetchData('create-user', {
        method: "POST",
        body: JSON.stringify(payload)
    });

    return myData.json();
};
