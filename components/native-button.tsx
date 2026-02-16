import { Pressable, Text } from "react-native";
import { cn } from "./lib/utils";

interface NativeButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export function NativeButton({
  onPress,
  children,
  disabled = false,
  variant = "primary",
  size = "md",
}: NativeButtonProps) {
  const variantStyles = {
    primary: "bg-blue-500 active:bg-blue-600",
    secondary: "bg-gray-500 active:bg-gray-600",
    danger: "bg-red-500 active:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-3 py-2",
    md: "px-4 py-3",
    lg: "px-6 py-4",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        "rounded-lg items-center justify-center",
        variantStyles[variant],
        sizeStyles[size],
        disabled && "opacity-50",
      )}
    >
      <Text className="text-white font-semibold text-center">{children}</Text>
    </Pressable>
  );
}
