import React from 'react';
import { Microbe } from '@/types/microbe';
import { Badge } from '@/components/ui/Badge';

interface MicrobeCardProps {
    microbe: Microbe;
}

export function MicrobeCard({ microbe }: MicrobeCardProps) {
    const getRoleVariant = (role: Microbe['role']) => {
        switch (role) {
            case 'beneficial': return 'success';
            case 'pathogenic': return 'destructive';
            case 'neutral': return 'secondary';
            default: return 'default';
        }
    };

    return (
        <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">{microbe.name}</h3>
                <Badge variant="blue" className="capitalize">
                    {microbe.type}
                </Badge>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500">Relative Abundance</span>
                    <span className="font-medium">{microbe.abundance}%</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-500">Role</span>
                    <Badge variant={getRoleVariant(microbe.role)} className="capitalize">
                        {microbe.role}
                    </Badge>
                </div>
            </div>
        </div>
    );
}
