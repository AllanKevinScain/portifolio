import { Button, Text } from '@/components';
import { useAuth } from '@/hooks';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

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
      navigate('/admin');
    } else {
      setError('root', {
        type: 'manual',
        message: 'Credenciais inválidas',
      });
    }
  };

  if (isAuthenticated) {
    navigate('/admin');
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-(--color-bg)">
      <div className="w-full max-w-md rounded-lg bg-(--color-card) p-8 sm:border sm:border-(--color-border) sm:shadow-xl">
        <Text variant="h1">Login</Text>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Text variant="label">Email</Text>
            <input
              type="email"
              {...register('email', { required: 'Email é obrigatório' })}
              className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              {...register('password', { required: 'Senha é obrigatória' })}
              className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
