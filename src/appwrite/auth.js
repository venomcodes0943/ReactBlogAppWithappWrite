import config from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client)
    }


    async createUser({ name, email, password }) {
        try {
            const user = await this.account.create(
                ID.unique(),
                name,
                email,
                password,
            );
            if (user) {
                // Call another function   

            } else {
                return user;
            }
        } catch (error) {
            throw new Error('Error While Creating User', error)
        }
    }


    async login({ email, password }) {
        try {
            return this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw new Error('Error While Loging User', error)
        }
    }

    async getCurrectUser() {
        try {
            return await this.account.get()
        } catch (error) {
            throw new Error("getCurrectUser Erro :", error);
        }

    }

    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw new Error("Logout Error :", error);
        }
    }


}

const authService = new AuthService();


export default authService;

