declare namespace NodeJS {
    export interface ProcessEnv {
        DB_USER: string;
        DB_NAME: string;
        DB_PORT: string;
        DB_URL: string;
        DB_HOST: string;
        DB_TEST_NAME: string;
        DB_PASSWORD: string;
        PORT: string;
    }
}
