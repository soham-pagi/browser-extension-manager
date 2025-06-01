import { signal } from "@preact/signals";

import type { TypeFilter } from "../types";


export const filter = signal<TypeFilter>('All');

export function setFilter(newFilter: TypeFilter) {
    filter.value = newFilter;
}