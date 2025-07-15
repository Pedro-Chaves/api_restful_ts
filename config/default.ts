const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPass}@cluster0.drdbfhf.mongodb.net/`,
    env: process.env.ENVIRONMENT
}