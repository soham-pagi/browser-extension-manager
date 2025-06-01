import { Button } from "./Button";

import { filter, setFilter } from "../store/filterStore";

const filters = ['All', 'Active', 'Inactive'];

export default function Filter() {
    return (
        <section className={'flex gap-2'}>
            {filters.map((f) => (
                <Button onClick={setFilter} className={`text-lg dark:border-white/30 px-6 py-2 rounded-full border-black/20 ${filter.value === f ? 'bg-[hsl(3,77%,44%)] text-white border-none dark:text-black' : 'dark:bg-[hsl(226,25%,17%)]'}`}>{f}</Button>
            ))}
        </section>
    )
}