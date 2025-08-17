import z from "zod";
import userSchema from "../Variables/UserSchema";

export type User = z.infer<typeof userSchema>;