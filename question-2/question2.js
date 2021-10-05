//Roessell Dilan Piyasenage Don 
//101278656

let resolvedPromise = () => new Promise((res, rej) => {
    setTimeout(res({ message: 'delayed success!' }), 500);
  });

let rejectPromise = () => new Promise((res, rej) => {
    setTimeout(rej({ error: 'delayed exception!' }), 500);
  });

resolvedPromise().then((msg) => console.log(msg));
rejectPromise().catch((msg) => console.error(msg));