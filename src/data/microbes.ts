import { Microbe } from '@/types/microbe';

export const microbesData: Microbe[] = [
    { id: '1', name: 'Cutibacterium acnes', type: 'bacteria', abundance: 32, role: 'beneficial' },
    { id: '2', name: 'Staphylococcus epidermidis', type: 'bacteria', abundance: 24, role: 'beneficial' },
    { id: '3', name: 'Malassezia globosa', type: 'fungi', abundance: 18, role: 'neutral' },
    { id: '4', name: 'Candida albicans', type: 'fungi', abundance: 6, role: 'pathogenic' },
    { id: '5', name: 'Corynebacterium', type: 'bacteria', abundance: 12, role: 'neutral' },
    { id: '6', name: 'Trichophyton rubrum', type: 'fungi', abundance: 2, role: 'pathogenic' },
];