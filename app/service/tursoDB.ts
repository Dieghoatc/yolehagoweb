import { createClient } from "@libsql/client";

const TURSO_DATABASE_URL = process.env.NEXT_PUBLIC_TURSO_DATABASE_URL;
const TURSO_AUTH_TOKEN = process.env.NEXT_PUBLIC_TURSO_AUTH_TOKEN;

export function TursoDB() {

    if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
        throw new Error("TURSO_DATABASE_URL or TURSO_AUTH_TOKEN not found");
    }

    return createClient({
        url: TURSO_DATABASE_URL,
        authToken: TURSO_AUTH_TOKEN,
    });
}

