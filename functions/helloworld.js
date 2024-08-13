export async function onRequest(context){
    const {request} = context;
    const {method} = request;
    // const data=null;
    if (method === "POST") {
        data = await request.text();
        return new Response(`Hello ${data}`);
    }
}