export type MicrobeType = 'bacteria' | 'fungi';
export type MicrobeRole = 'beneficial' | 'neutral' | 'pathogenic';

export interface Microbe {
    id: string;
    name: string;
    type: MicrobeType;
    abundance: number;
    role: MicrobeRole;
}