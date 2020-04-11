let postApi = 'http://localhost:9000';

export default async ()=>{
     let x = await fetch(`${postApi}/events`)
					.then(resp =>resp.json())
                    .then(data=>data);
    let resp = await x;  
    return resp;           
            
};
