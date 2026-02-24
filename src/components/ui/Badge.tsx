import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'success' | 'destructive' | 'outline' | 'secondary' | 'blue';
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {

    const variantStyles = {
        default: "text-gray-800 bg-gray-100",
        secondary: "text-gray-700 bg-gray-100 hover:bg-gray-200",
        destructive: "text-red-800 bg-red-100",
        success: "text-green-800 bg-green-100",
        outline: "text-gray-900",
        blue: "text-blue-700 bg-blue-50"
    };

    return (
        <div
            className={cn(
                "inline-flex items-center px-2.5 py-0.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variantStyles[variant],
                className
            )}
            {...props}
        />
    )
}

export { Badge }
