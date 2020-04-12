let postApi = 'http://localhost:9000';

export default (url, options={}) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json'
          },
          ...options
    };

    let y = fetch(`${postApi}/${url}`, headers )
        .then(resp =>resp);
        return y;
};
