import { FetchConfig } from './interfaces.ts';
export async function Login(info) {
    const response = await fetch('/api/login', {
        ...FetchConfig,
        method: 'POST',
        body: JSON.stringify(info)
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export async function VerifyWithCode(info) {
    const response = await fetch('/api/code', {
        ...FetchConfig,
        method: 'POST',
        body: JSON.stringify(info)
    });
    const data = await response.json();
    console.log(data);
    return data;
}
export async function Logout() {
    const response = await fetch('/api/logout', FetchConfig);
    const data = await response.json();
    console.log(data);
    return data;
}
export async function Register(info) {
    const response = await fetch('/api/register', {
        ...FetchConfig,
        method: 'POST',
        body: JSON.stringify(info)
    });
    const data = await response.json();
    console.log(data);
    return data;
}
