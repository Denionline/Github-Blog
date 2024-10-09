import axios from "axios";

export const apiUser = axios.create({
    baseURL: 'https://api.github.com/users/'
})

export const apiIssues = axios.create({
    baseURL: 'https://api.github.com/search/'
})
// 'https://api.github.com/search/issues?q=%20repo:denionline/Github-Blog'