import WebLayout from "@/components/LayoutWrappers/Web/WebLayout";

interface WebLayoutWrapperProps {
  children: React.ReactNode;
}

const WebLayoutWrapper: React.FC<WebLayoutWrapperProps> = async ({
  children,
}) => {
  return <WebLayout>{children}</WebLayout>;
};

export default WebLayoutWrapper;
