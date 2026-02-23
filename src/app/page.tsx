'use client'; // For using React state hooks

import { useState, useMemo } from 'react';
import { microbesData } from '@/data/microbes';
import { MicrobeCard } from '@/components/MicrobeCard';
import { MicrobeType } from '@/types/microbe';

type SortOrder = 'asc' | 'desc' | null;
type FilterType = MicrobeType | 'all';

export default function Home() {
    const [filter, setFilter] = useState<FilterType>('all');
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
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Skin Microbiome Explorer</h1>
                <p className="text-gray-500">Analyze relative abundance and roles of skin bacteria and fungi.</p>
            </header>

            {/* Control Panel */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">

                {/* Filter Section */}
                <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
                    <div className="flex gap-2">
                        {['all', 'bacteria', 'fungi'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type as FilterType)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize cursor-pointer ${
                                    filter === type
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Sort Section */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort by Abundance</label>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSortOrder(sortOrder === 'desc' ? null : 'desc')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                                sortOrder === 'desc' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Highest First ↓
                        </button>
                        <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? null : 'asc')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                                sortOrder === 'asc' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Lowest First ↑
                        </button>
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {processedMicrobes.length > 0 ? (
                    processedMicrobes.map((microbe) => (
                        <MicrobeCard key={microbe.id} microbe={microbe} />
                    ))
                ) : (
                    <p className="text-gray-500 col-span-full text-center py-8">No microorganisms found matching your criteria.</p>
                )}
            </div>
        </main>
    );
}