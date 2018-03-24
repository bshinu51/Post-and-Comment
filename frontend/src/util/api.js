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
