import axios from "@/services/axios";


class AuthService {

    async signUp(body : object) : Promise<any> {
        const response = await axios.post('/signup', body);
        return response;
    }

    async signIn(body : object) : Promise<any> {
        const response = await axios.post('/signin', body);
        return response;
    }

    async forgotPassword(email : string) : Promise<any> {
        const response = await axios.post('/forgot-password', {email});
        return response;

    }

    async resetPassword(token: string, body: object) : Promise<any> {  

        const response = await axios.post(`/reset-password/${token}`, body);
        return response;

     }

}

export const authService : AuthService = new AuthService();