import { Account, Client, Storage } from "appwrite";

const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
client.setProject('67a73d6a0032196941a3');


export const storage = new Storage(client);

export const account = new Account(client);
export const BUCKET_ID = "67a757f50017423ca57c";




export const generateRandomId = (length = 10) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
};

