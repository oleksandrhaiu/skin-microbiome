import React from 'react';
import { MicrobeType } from '@/types/microbe';
import { Button } from '@/components/ui/Button';

interface FilterSectionProps {
    filter: MicrobeType | 'all';
    setFilter: (filter: MicrobeType | 'all') => void;
}

export function FilterSection({ filter, setFilter }: FilterSectionProps) {
    return (
        <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
            <div className="flex gap-2">
                {['all', 'bacteria', 'fungi'].map((type) => (
                    <Button
                        key={type}
                        onClick={() => setFilter(type as MicrobeType | 'all')}
                        active={filter === type}
                        className="capitalize"
                    >
                        {type}
                    </Button>
                ))}
            </div>
        </div>
    );
}
