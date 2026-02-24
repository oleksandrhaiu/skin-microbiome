import React from 'react';

interface ControlPanelProps {
    children: React.ReactNode;
}

export function ControlPanel({ children }: ControlPanelProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            {children}
        </div>
    );
}
