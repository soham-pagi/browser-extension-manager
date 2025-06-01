import cn from "@meltdownjs/cn";

export default function SwitchButton({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
    // for animation, need to use translate property for toggle
    return (
        <button onClick={onClick} className={cn("flex items-center rounded-full w-8.5 h-4.5", isActive ? 'justify-end bg-red-600' : 'justify-start bg-gray-400')}>
            <div className={'size-4 mx-0.5 bg-white rounded-full'}></div>
        </button>
    )
}