import { removeExtension, toggleSwitch } from "../store/extenstionStore";
import type { TypeExtension } from "../types";

import { Button } from "./Button";
import SwitchButton from "./SwitchButton";

type TypeExtensionProps =  TypeExtension;

export default function Extension(props: TypeExtensionProps) {
    return (
        <div className={'flex flex-col gap-6 bg-white border border-black/30 rounded-3xl p-6 md:p-4 dark:bg-[hsl(226,25%,17%)] dark:border-white/30'}>
            <div className={'flex gap-5'}>
                <img width={80} height={80} className={'size-16'} src={props.logo} alt="Extension Logo" />
                <span class={'space-y-1'}>
                    <h4 className={'font-bold text-2xl md:text-xl dark:text-white/95'}>{props.name}</h4>
                    <p class={'text-xl text-black/50 md:text-md dark:text-white/60'}>{props.description}</p>
                </span>

            </div>
            <div className="mt-auto flex justify-between items-center">
                <Button onClick={() => removeExtension(props.id)} className="px-5 py-2.5 rounded-full font-semibold dark:bg-inherit dark:text-white dark:border-white/30">Remove</Button>
                <SwitchButton isActive={props.isActive} onClick={() => toggleSwitch(props.id)} />
            </div>
        </div>
    )
}