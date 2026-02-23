import { Microbe } from '@/types/microbe';

interface MicrobeCardProps {
    microbe: Microbe;
}

export function MicrobeCard({ microbe }: MicrobeCardProps) {
    // Badge color
    const roleColors = {
        beneficial: 'bg-green-100 text-green-800',
        neutral: 'bg-gray-100 text-gray-800',
        pathogenic: 'bg-red-100 text-red-800',
    };

    return (
        <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-lg">{microbe.name}</h3>
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 capitalize">
          {microbe.type}
        </span>
            </div>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-1">
                    <span className="text-gray-500">Relative Abundance</span>
                    <span className="font-medium">{microbe.abundance}%</span>
                </div>
                <div className="flex justify-between items-center pt-1">
                    <span className="text-gray-500">Role</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${roleColors[microbe.role]}`}>
            {microbe.role}
          </span>
                </div>
            </div>
        </div>
    );
}