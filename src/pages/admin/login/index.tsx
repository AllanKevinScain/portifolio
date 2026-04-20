import { Button, Text } from "@/components";
import { useAuth } from "@/hooks";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { twMerge } from "tailwind-merge";

type LoginFormData = {
  email: string;
  password: string;
};

export function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    const success = login(data.email, data.password);

    if (success) {
      navigate("/admin");
    } else {
      setError("root", {
        type: "manual",
        message: "Credenciais inválidas",
      });
    }
  };

  if (isAuthenticated) {
    navigate("/admin");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--color-bg)">
      <div
        className={twMerge(
          "p-8 rounded-lg bg-(--color-card) w-full max-w-md",
          "sm:shadow-xl sm:border sm:border-(--color-border)",
        )}
      >
        <Text variant="h1">Login</Text>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Text variant="label">Email</Text>
            <input
              type="email"
              {...register("email", { required: "Email é obrigatório" })}
              className="p-2 rounded bg-(--color-bg) border border-(--color-border) text-(--color-text) focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <Text variant="span" className="text-red-500">
                {errors.email.message}
              </Text>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Text variant="label">Senha</Text>
            <input
              type="password"
              {...register("password", { required: "Senha é obrigatória" })}
              className="p-2 rounded bg-(--color-bg) border border-(--color-border) text-(--color-text) focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <Text variant="span" className="text-red-500">
                {errors.password.message}
              </Text>
            )}
          </div>

          {errors.root && (
            <Text variant="span" className="text-red-500">
              {errors.root.message}
            </Text>
          )}

          <Button.solid type="submit" className="mt-4">
            Entrar
          </Button.solid>
        </form>
      </div>
    </div>
  );
}
