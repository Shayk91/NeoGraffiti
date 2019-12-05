import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const signUpUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const createPost = async (userId, data) => {
  const resp = await api.post(`/users/${userId}/posts`, { post: data })
  return resp.data
}

export const createComment = async (postId, data) => {
  const resp = await api.post(`/posts/${postId}/comments`, { comment: data })
  return resp.data
}

export const getUser = async (userId) => {
  const resp = await api.get(`/users/${userId}`)
  return resp.data
}

export const readAllPosts = async () => {
  const resp = await api.get('/posts')
  return resp.data
}

export const readAllUserPosts = async (userId) => {
  const resp = await api.get(`user/${userId}/posts`)
  return resp.data
}

export const readAllComments = async (postId) => {
  const resp = await api.get(`posts/${postId}/comments`)
  return resp.data
}

export const readOnePost = async (postId) => {
  const resp = await api.get(`/posts/${postId}`)
  return resp.data
}

export const updateUser = async (userId, data) => {
  const resp = await api.patch(`/users/${userId}`, { user: data })
  return resp.data
}

export const updatePost = async (postId, data) => {
  const resp = await api.put(`/posts/${postId}`, { post: data })
  return resp.data
}

export const updateComment = async (commentId, data) => {
  const resp = await api.put(`/posts/postId/comments/${commentId}`, { comment: data })
  return resp.data
}

export const destroyUser = async (userId) => {
  const resp = await api.delete(`/posts/${userId}`)
  return resp.data
}

export const destroyPost = async (postId) => {
  const resp = await api.delete(`/posts/${postId}`)
  return resp.data
}

export const destroyComment = async (commentId) => {
  const resp = await api.delete(`/posts/postId/comments/${commentId}`)
  return resp.data
}