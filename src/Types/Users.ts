import z from "zod";

const userSchema = z.object({
    email: z.string().nonempty("Email não pode ser vazio").refine(value => z.string().email().safeParse(value).success, {
        message: "Email inválido"
    }),
    senha: z.string().nonempty("Senha não pode ser vazia").min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export default userSchema;

export type User = z.infer<typeof userSchema>;