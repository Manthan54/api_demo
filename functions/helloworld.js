export async function onRequest(context){
    const {name} = await context.json();
    const response = `Hello, ${name}!`;
    return new Response(response, {headers:{'Content-Type':'text/plain'}, });
    // const {request} = context;
    // const {method} = request;
    // const data=null;
    // if (method === "POST") {
    //     data = await request.text();
    //     return new Response(`Hello ${data}`);
    // }
}