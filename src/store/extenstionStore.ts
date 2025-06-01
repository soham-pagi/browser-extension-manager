import { signal } from "@preact/signals";

import type { TypeExtension } from "../types";

import data from '../../data/data.json';

export const extensions = signal<TypeExtension[]>(data);

export function toggleSwitch(id: number) {
    extensions.value = extensions.value.map((extension) => {
        if (extension.id === id) {
            return {
                ...extension,
                isActive: !extension.isActive
            };
        }
        return extension;
    });
}

export function removeExtension(id: number) {
    extensions.value = extensions.value.filter((extension) => extension.id !== id);
}