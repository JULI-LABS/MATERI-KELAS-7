
import React from 'react';

interface TabsProps {
    tabs: string[];
    activeTab: string;
    setActiveTab: (tab: string) => void;
    completedMeetings: Set<number>;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, completedMeetings }) => {
    return (
        <nav className="flex flex-wrap border-b-2 border-gray-200 mb-6">
            {tabs.map(tab => {
                const isMeetingTab = tab.startsWith('Meeting');
                let meetingId: number | null = null;
                if (isMeetingTab) {
                    meetingId = parseInt(tab.split(' ')[1]);
                }
                const isCompleted = meetingId !== null && completedMeetings.has(meetingId);

                return (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-3 px-4 sm:px-6 text-sm sm:text-base border-b-2 hover:bg-gray-100 transition-colors duration-200 flex items-center
                            ${activeTab === tab 
                                ? 'border-blue-600 text-blue-600 font-semibold' 
                                : 'border-transparent text-gray-600'
                            }`
                        }
                    >
                        {tab}
                        {isCompleted && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>
                );
            })}
        </nav>
    );
};

export default Tabs;
