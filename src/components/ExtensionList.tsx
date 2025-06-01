import Extension from "./Extension";

import { extensions } from "../store/extenstionStore";
import { filter } from "../store/filterStore";

export default function ExtensionList() {
    const filteredExtension = extensions.value.filter(ext => {
        if (filter.value === "Active") return ext.isActive;
        if (filter.value === "Inactive") return !ext.isActive;
        return true;
    });

    return (
        <section class={'grid gap-3 bg-inherit md:grid-cols-2 lg:grid-cols-3'}>
            {
                filteredExtension.map((extension) => (
                    <Extension key={extension.id} {...extension} />
                ))
            }
        </section>
    )
}