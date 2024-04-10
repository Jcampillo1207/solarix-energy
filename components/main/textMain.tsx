import { cn } from "@/lib/utils"

export const SectionTitle = ({className, children}: {className?: string, children: React.ReactNode}) => {
    return (
        <h2 className={cn("text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-semibold text-foreground max-w-5xl antialiased", className)}>
            {children}
        </h2>
    )
}

export const OnTitle = ({className, children}: {className?: string, children: React.ReactNode}) => {
    return (
        <h2 className={cn("text-2xl md:text-2xl lg:text-2xl font-semibold text-foreground max-w-5xl antialiased tracking-wide", className)}>
            {children}
        </h2>
    )
}

export const OnSubtitle = ({className, children}: {className?: string, children: React.ReactNode}) => {
    return (
        <h3 className={cn("text-base md:text-lg font-normal text-muted-foreground max-w-5xl antialiased tracking-wider", className)}>
            {children}
        </h3>
    )
}

export const TextSection = ({className, children}: {className?: string, children: React.ReactNode}) => {
    return (
        <p className={cn("text-sm md:text-base text-muted-foreground font-normal antialiased", className)}>
            {children}
        </p>
    )
}