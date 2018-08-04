export const get = endpoint => {
  return callApi(endpoint);
};

export const post = (endpoint, parameters) => {
  return callApi(endpoint, 'POST', parameters);
};

function callApi(endpoint, method, parameters) {
  let options = {
    crossDomain: true,
    headers: {
      'content-type': 'application/json',
    },
  };

  if (method) {
    options.method = method;
  }
  if (parameters) {
    options.body = JSON.stringify(parameters);
  }

  return fetch(endpoint, options)
    .then(response => response.json().then(json => ({ json, response })))
    .then(
      response => ({ data: response.json }),
      error => {
        return Promise.reject(new Error(error || 'Something bad happened'));
      },
    );
}
