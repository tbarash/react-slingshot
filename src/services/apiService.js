import reports from './sampleData/reports';


// const api = ({path, method, useCache = false, body}) => {
//   const isGet = method === 'GET';
//   const headers = new Headers();
//
//   const options = {
//     method,
//     headers,
//     body: body && JSON.stringify(body)
// };
//
//
//
//   return fetch(url, options).then(r => r.json())
// }

export default {
  getReports: () => Promise.resolve(reports),
};

