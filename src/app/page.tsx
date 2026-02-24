'use client'; // For using React state hooks

import { useState, useMemo } from 'react';
import { microbesData } from '@/data/microbes';
import { MicrobeType } from '@/types/microbe';

import { PageHeader } from '@/components/layout/PageHeader';
import { ControlPanel } from '@/components/explorer/ControlPanel';
import { FilterSection } from '@/components/explorer/FilterSection';
import { SortSection, SortOrder } from '@/components/explorer/SortSection';
import { MicrobeList } from '@/components/explorer/MicrobeList';

export default function Home() {
    const [filter, setFilter] = useState<MicrobeType | 'all'>('all');
    const [sortOrder, setSortOrder] = useState<SortOrder>(null);

    const processedMicrobes = useMemo(() => {
        let result = [...microbesData];

        // Filtering
        if (filter !== 'all') {
            result = result.filter((m) => m.type === filter);
        }

        // Sorting
        if (sortOrder) {
            result.sort((a, b) => {
                if (sortOrder === 'asc') return a.abundance - b.abundance;
                if (sortOrder === 'desc') return b.abundance - a.abundance;
                return 0;
            });
        }

        return result;
    }, [filter, sortOrder]);

    return (
        <main className="min-h-screen p-8 bg-gray-50 text-gray-900 font-sans max-w-5xl mx-auto">
            <PageHeader />

            <ControlPanel>
                <FilterSection filter={filter} setFilter={setFilter} />
                <SortSection sortOrder={sortOrder} setSortOrder={setSortOrder} />
            </ControlPanel>

            <MicrobeList microbes={processedMicrobes} />
        </main>
    );
}