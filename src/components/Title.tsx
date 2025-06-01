import cn from "@meltdownjs/cn";

type TypeTitleProps = {
    children: string;
    className?: string;
}

export default function Title({ children, className }: TypeTitleProps) {
    return (
        <h1 className={cn('text-5xl font-extrabold', className)}>{children}</h1>
    )
}