# NativeWind Setup & Usage Guide

## Overview

NativeWind brings the power of Tailwind CSS styling to React Native and Expo projects. This project is now fully configured with NativeWind v4.2.1.

## Installation & Configuration ✅

The following has been configured:

### 1. **Installed Packages**

- `nativewind` - Main package for Tailwind CSS in React Native
- `tailwindcss` - CSS framework (v4.1.18)
- `clsx` & `tailwind-merge` - Utility helpers for class names

### 2. **Configuration Files**

#### `tailwind.config.js`

- Defines content paths for scanning
- Customized theme colors (primary, secondary, success, danger, warning, info)
- Safe area spacing for mobile devices

#### `babel.config.js`

- Sets up NativeWind Babel preset
- Configures JSX to use nativewind

#### `metro.config.js`

- Integrates NativeWind with Expo Metro bundler
- Imports global CSS file

#### `global.css`

- Root Tailwind directives (@tailwind)
- Essential for NativeWind to work

## Basic Usage

### Simple View Styling

```tsx
import { View, Text } from "react-native";

export function MyComponent() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-100">
      <Text className="text-lg font-bold text-blue-900">Hello NativeWind!</Text>
    </View>
  );
}
```

### Common Tailwind Classes in React Native

| Tailwind | React Native                            | Example                              |
| -------- | --------------------------------------- | ------------------------------------ |
| Flexbox  | `flex`, `flex-row`, `flex-col`          | `className="flex flex-row"`          |
| Justify  | `justify-center`, `justify-between`     | `className="justify-center"`         |
| Align    | `items-center`, `items-start`           | `className="items-center"`           |
| Padding  | `p-4`, `px-3`, `py-2`                   | `className="p-4"`                    |
| Margin   | `m-4`, `mx-auto`, `my-2`                | `className="m-4"`                    |
| Colors   | `bg-blue-500`, `text-red-700`           | `className="bg-blue-500 text-white"` |
| Sizing   | `w-full`, `h-screen`, `w-20`            | `className="w-full h-screen"`        |
| Opacity  | `opacity-50`, `opacity-75`              | `className="opacity-50"`             |
| Rounded  | `rounded`, `rounded-lg`, `rounded-full` | `className="rounded-lg"`             |

### Using the NativeButton Component

```tsx
import { NativeButton } from "@/components/native-button";

export function LoginScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <NativeButton
        variant="primary"
        size="lg"
        onPress={() => console.log("Pressed")}
      >
        Sign In
      </NativeButton>

      <NativeButton
        variant="secondary"
        size="md"
        onPress={() => console.log("Pressed")}
      >
        Forgot Password
      </NativeButton>
    </View>
  );
}
```

### Creating Custom Styled Components

```tsx
import { View, Text } from "react-native";
import { cn } from "@/components/lib/utils";

interface CardProps {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "outlined";
}

export function Card({ title, children, variant = "default" }: CardProps) {
  return (
    <View
      className={cn(
        "p-4 rounded-lg mb-3",
        variant === "default" && "bg-white shadow-md",
        variant === "outlined" && "border border-gray-300 bg-gray-50",
      )}
    >
      <Text className="text-xl font-bold text-gray-900 mb-2">{title}</Text>
      {children}
    </View>
  );
}
```

## Theme Colors Available

The following colors are pre-configured in `tailwind.config.js`:

```tsx
primary: "#007AFF"; // Blue
secondary: "#5AC8FA"; // Light Blue
success: "#34C759"; // Green
danger: "#FF3B30"; // Red
warning: "#FF9500"; // Orange
info: "#00C7FD"; // Cyan
```

Usage:

```tsx
<View className="bg-primary">
  <Text className="text-white">Primary color</Text>
</View>

<View className="bg-success">
  <Text className="text-white">Success color</Text>
</View>
```

## Safe Area Support

For safe area padding at the bottom (useful for notched devices):

```tsx
<View className="pb-safe">
  {/* Content automatically respects safe area */}
</View>
```

## Responsive Utilities

NativeWind supports responsive prefixes for different screen sizes:

```tsx
<View className="p-4 sm:p-6 md:p-8">
  {/* Changes padding at different breakpoints */}
</View>
```

## Common Patterns

### Centered Container

```tsx
<View className="flex-1 justify-center items-center">
  {/* Content centered both ways */}
</View>
```

### Input Field Styling

```tsx
<TextInput
  className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
  placeholder="Enter text..."
/>
```

### Header Styling

```tsx
<View className="bg-blue-600 px-4 py-3">
  <Text className="text-white text-2xl font-bold">Header</Text>
</View>
```

## Tips & Best Practices

1. **Use the `cn()` utility** - Always use the `cn()` helper when conditionally applying Tailwind classes:

   ```tsx
   className={cn(
     'base-class',
     condition && 'conditional-class',
     variant === 'type' && 'variant-class'
   )}
   ```

2. **Prefer Tailwind over inline styles** - Keep styling consistent

   ```tsx
   // ✅ Good
   <View className="bg-blue-500 p-4 rounded-lg" />

   // ❌ Avoid
   <View style={{ backgroundColor: '#007AFF', padding: 16, borderRadius: 8 }} />
   ```

3. **Extract repeated class patterns** - Create reusable components

   ```tsx
   // Don't repeat these classes everywhere
   className="flex-1 justify-center items-center bg-gray-50"

   // Instead, create a component
   <CenteredContainer />
   ```

4. **Use semantic colors** - Reference theme colors by name

   ```tsx
   // ✅ Good - uses theme
   className = "bg-primary text-white";

   // ❌ Avoid - hardcoded colors
   className = "bg-blue-500 text-white";
   ```

## Troubleshooting

### Styles not applying

1. Make sure `global.css` is imported in `app/_layout.tsx`
2. Restart the Metro bundler: `pnpm start`
3. Clear Metro cache: `pnpm start --reset-cache`

### Build errors

1. Ensure all configuration files are in the root directory
2. Check that `babel.config.js` has NativeWind preset
3. Verify `metro.config.js` has `withNativeWind` wrapper

### Hot reload issues

1. Clear node_modules: `pnpm install`
2. Reset project: `pnpm reset-project`
3. Restart the bundler

## Next Steps

1. Start using Tailwind classes in your components
2. Customize `tailwind.config.js` for your design system
3. Create a component library with consistent styling
4. Build reusable UI components using NativeWind

## Resources

- [NativeWind Documentation](https://www.nativewind.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)

---

**Your project is now ready to use NativeWind! Happy styling! 🎨**
