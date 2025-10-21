import DashboardLayout from "@/components/LayoutWrappers/Dashboard/DashboardLayout";
import Guard from "@/components/Guard/Guard";
import { USER_ROLES } from "@/modules/user/enums";

const DashboardLayoutWrapper: React.FC<{ children: React.ReactNode }> = async ({
  children,
}) => {
  return (
    <Guard requiredRole={USER_ROLES.ADMIN}>
      <DashboardLayout>{children}</DashboardLayout>
    </Guard>
  );
};

export default DashboardLayoutWrapper;
