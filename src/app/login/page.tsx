"use client";

import type { NextRequest } from "next/server";
import { signIn } from "next-auth/react";

export default function Login(req: NextRequest) {
    return (
        <div>
            <p>This is login page - public route</p>
            <button onClick={() => signIn("github")}>Sign in with github</button>
        </div>
    );
}