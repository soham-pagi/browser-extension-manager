export type TypeFilter = 'All' | 'Active' | 'Inactive';

export type TypeTheme = 'light' | 'dark';

export type TypeExtension = {
    id: number;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}