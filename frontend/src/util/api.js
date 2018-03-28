const api = "http://localhost:3001"

const headers = {
  'Authorization': '8xf0y6ziyjabvozdd253nd'
}

export const getPost = (id) =>
  fetch(`${api}/posts/${id}`,{headers})
    .then(res => res.json());

export const getAll = () =>
  fetch(`${api}/posts`,{headers})
    .then(res => res.json());

export const getCategories = () =>
  fetch(`${api}/categories`,{headers})
    .then(res=>res.json())
    .then(data=>data.categories);


export const getAllComments = (id) =>
  fetch(`${api}/posts/${id}/comments`,{headers})
    .then(res => res.json());

export const createPost = (data) =>
  fetch(`${api}/posts`, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method:'POST',
    body: JSON.stringify(data),
  }).then(res => res.json());
