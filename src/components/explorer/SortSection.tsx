import React from 'react';
import { Button } from '@/components/ui/Button';

export type SortOrder = 'asc' | 'desc' | null;

interface SortSectionProps {
    sortOrder: SortOrder;
    setSortOrder: (order: SortOrder) => void;
}

export function SortSection({ sortOrder, setSortOrder }: SortSectionProps) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort by Abundance</label>
            <div className="flex gap-2">
                <Button
                    onClick={() => setSortOrder(sortOrder === 'desc' ? null : 'desc')}
                    active={sortOrder === 'desc'}
                >
                    Highest First ↓
                </Button>
                <Button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? null : 'asc')}
                    active={sortOrder === 'asc'}
                >
                    Lowest First ↑
                </Button>
            </div>
        </div>
    );
}
