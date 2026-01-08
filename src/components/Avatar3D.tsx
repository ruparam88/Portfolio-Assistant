import { User } from "lucide-react";

interface Avatar3DProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export const Avatar3D = ({ size = "lg", className = "" }: Avatar3DProps) => {
  return (
    <img src="/pfp.jpg" alt="" />
  );
};
