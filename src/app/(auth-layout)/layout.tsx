import AuthLayout from "@/components/LayoutWrappers/Auth/AuthLayout";

const AuthLayoutWrapper: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <AuthLayout>
      <>{children}</>
    </AuthLayout>
  );
};

export default AuthLayoutWrapper;
