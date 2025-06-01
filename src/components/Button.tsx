import cn from "@meltdownjs/cn";

type TypeButtonProps = {
    onClick: any
    className?: string;
    children: string;
}

export function Button({ className, children, onClick }: TypeButtonProps) {
    return (
        <button onClick={() => onClick(children)} className={cn('text-black font-semibold border-1 border-black/30 bg-white dark:text-white px-3 py-1 rounded-2xl hover:brightness-90', className)}>{children}</button>
    )
}