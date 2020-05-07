// let postApi = 'http://localhost:9000';

let eventsApi = 'https://new-calender-api.herokuapp.com';

export default (url, options = {}) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        },
        ...options
    };

    const apiResponse = fetch(`${eventsApi}/${url}`, headers)
        .then(resp => resp);

    return apiResponse;
};
