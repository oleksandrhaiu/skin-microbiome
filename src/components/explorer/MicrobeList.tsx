import React from 'react';
import { Microbe } from '@/types/microbe';
import { MicrobeCard } from './MicrobeCard';

interface MicrobeListProps {
    microbes: Microbe[];
}

export function MicrobeList({ microbes }: MicrobeListProps) {
    if (microbes.length === 0) {
        return (
            <p className="text-gray-500 col-span-full text-center py-8">
                No microorganisms found matching your criteria.
            </p>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {microbes.map((microbe) => (
                <MicrobeCard key={microbe.id} microbe={microbe} />
            ))}
        </div>
    );
}
