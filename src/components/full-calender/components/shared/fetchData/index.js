// let postApi = 'http://localhost:9000';

let eventsApi = 'https://new-calender-api.herokuapp.com';

export default (url, options={}) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json'
          },
          ...options
    };

    let y = fetch(`${eventsApi}/${url}`, headers )
        .then(resp =>resp);
        return y;
};
