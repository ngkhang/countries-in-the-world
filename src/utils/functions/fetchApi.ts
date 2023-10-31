const fetchApi = (url: string) => fetch(url)
  .then((response) => {
    if (response.ok) return response.json();

    throw new Error(response.statusText);
  })
  .catch((error) => {
    throw new Error(error.message);
  });

export default fetchApi;
