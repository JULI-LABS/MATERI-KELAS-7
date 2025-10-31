import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import Card from './components/Card';
import Question from './components/Question';
import { meetingsData } from './constants';
import { MeetingData } from './types';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [scores, setScores] = useState<Record<number, number>>({});
    const [answeredCounts, setAnsweredCounts] = useState<Record<number, number>>({});
    const [completedMeetings, setCompletedMeetings] = useState<Set<number>>(new Set());
    const tabNames = ['Home', ...meetingsData.map(m => `Meeting ${m.id}`)];

    useEffect(() => {
        const newCompleted = new Set(completedMeetings);
        let changed = false;
        for (const meeting of meetingsData) {
            if (!newCompleted.has(meeting.id)) {
                const totalQuestions = 
                    (meeting.exercises?.reduce((sum, ex) => sum + ex.questions.length, 0) || 0) + 
                    (meeting.readingComprehension?.questions.length || 0);
                const answeredCount = answeredCounts[meeting.id] || 0;

                if (totalQuestions > 0 && answeredCount === totalQuestions) {
                    newCompleted.add(meeting.id);
                    changed = true;
                }
            }
        }
        if (changed) {
            setCompletedMeetings(newCompleted);
        }
    }, [answeredCounts, completedMeetings]);

    const handleAnswer = (meetingId: number, isCorrect: boolean) => {
        setAnsweredCounts(prev => ({
            ...prev,
            [meetingId]: (prev[meetingId] || 0) + 1
        }));
        if (isCorrect) {
            setScores(prev => ({
                ...prev,
                [meetingId]: (prev[meetingId] || 0) + 1
            }));
        }
    };

    const renderContent = () => {
        if (activeTab === 'Home') {
            return (
                <Card>
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Chapter 1: Hello, Thank You, and Sorry!</h2>
                    
                    <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Learning Objectives (Tujuan Pembelajaran)</h3>
                    <p className="mb-4 text-gray-600">After this chapter, you will be able to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>👋 Students will be able to use expressions for <span className="font-semibold">greeting</span> (menyapa).</li>
                        <li>🚶‍♀️ Students will be able to use expressions for <span className="font-semibold">leave-taking</span> (berpamitan).</li>
                        <li>🙏 Students will be able to use expressions for <span className="font-semibold">thanking</span> (berterima kasih).</li>
                        <li>😥 Students will be able to use expressions for <span className="font-semibold">apologizing</span> (meminta maaf).</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-2">Motivational Quote</h3>
                    <div className="p-4 bg-yellow-100 border-l-4 border-yellow-400 rounded-r-lg">
                        <p className="text-lg italic text-yellow-800">"Every new language is a new world. 🌍 Let's explore it together!"</p>
                    </div>
                </Card>
            );
        }

        const meetingId = parseInt(activeTab.split(' ')[1]);
        const currentMeeting = meetingsData.find(m => m.id === meetingId);

        if (!currentMeeting) {
            return <Card><p>Content not found.</p></Card>;
        }
        
        const totalQuestions = 
            (currentMeeting.exercises?.reduce((sum, ex) => sum + ex.questions.length, 0) || 0) +
            (currentMeeting.readingComprehension?.questions.length || 0);
        const answeredCount = answeredCounts[currentMeeting.id] || 0;
        const score = scores[currentMeeting.id] || 0;
        const finalScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;


        return (
            <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-4">{currentMeeting.title}</h2>
                
                {currentMeeting.materials && (
                    <Card>
                        <h3 className="text-xl font-semibold text-gray-700 mb-3">Materi: Expressions</h3>
                        {currentMeeting.materials.map((material, index) => (
                            <div key={index} className={index > 0 ? "mt-4" : ""}>
                                <h4 className="font-semibold text-gray-600">{material.title}</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    {material.points.map((point, i) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: point }}></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Card>
                )}

                {currentMeeting.dialogs && currentMeeting.dialogs.map((dialog, index) => (
                     <Card key={index}>
                        <h3 className="text-xl font-semibold text-gray-700 mb-3 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            {dialog.title}
                        </h3>
                        {dialog.examples.map((example, exIndex) => (
                            <div key={exIndex}>
                                {example.subtitle && <h4 className="font-semibold text-gray-600 mt-6 mb-2">{example.subtitle}</h4>}
                                <div className={`p-4 ${example.bgColor} rounded-lg space-y-2`}>
                                    {example.lines.map((line, lineIndex) => (
                                         <p key={lineIndex} className="text-gray-800"><strong className="font-bold">{line.speaker}:</strong> {line.text}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Card>
                ))}

                {currentMeeting.exercises && (
                    <Card>
                         <h3 className="text-xl font-semibold text-gray-700 mb-4">Exercises (Latihan)</h3>
                         {currentMeeting.exercises.length > 0 ? currentMeeting.exercises.map((exercise, index) => (
                            <div key={index}>
                                <h4 className={`text-lg font-semibold text-gray-600 mb-4 ${index > 0 ? 'mt-8' : ''}`}>{exercise.title}</h4>
                                <div className="space-y-6">
                                {exercise.questions.map((q, qIndex) => (
                                    <Question 
                                      key={q.id} 
                                      question={q} 
                                      index={qIndex} 
                                      onAnswer={(isCorrect) => handleAnswer(currentMeeting.id, isCorrect)} 
                                    />
                                ))}
                                </div>
                            </div>
                         )) : (
                            <p className="text-gray-500 italic">(Exercises for this meeting will be added here, with the same format as Meeting 1, 10 questions each.)</p>
                         )}
                    </Card>
                )}

                {totalQuestions > 0 && answeredCount === totalQuestions && (
                    <Card>
                        <div className="text-center p-4">
                            <h3 className="text-2xl font-bold text-gray-800">Exercises Complete!</h3>
                            <p className="text-gray-600 mt-2">Well done! Here is your score for this meeting's exercises.</p>
                            
                            <div className="my-6">
                                <div className="relative inline-block">
                                    <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center">
                                        <div className="w-32 h-32 rounded-full bg-white flex flex-col items-center justify-center shadow-inner">
                                            <span className="text-4xl font-bold text-blue-600">{finalScore}</span>
                                            <span className="text-sm text-gray-500">/ 100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-lg">You answered <span className="font-bold">{score}</span> out of <span className="font-bold">{totalQuestions}</span> questions correctly.</p>

                           {currentMeeting.id < meetingsData.length && (
                                <button
                                    onClick={() => setActiveTab(`Meeting ${currentMeeting.id + 1}`)}
                                    className="mt-8 bg-green-600 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center justify-center transition-transform transform hover:scale-105 shadow-lg"
                                >
                                    CONTINUE TO MEETING {currentMeeting.id + 1}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                           )}
                        </div>
                    </Card>
                )}


                 {currentMeeting.readingComprehension && (
                    <Card>
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">Reading Comprehension</h3>
                        <div className="p-4 bg-gray-100 rounded-lg mb-4">
                            <h4 className="font-semibold mb-2">{currentMeeting.readingComprehension.title}</h4>
                            <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: currentMeeting.readingComprehension.text }} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-600 mb-4">Questions:</h4>
                        <div className="space-y-6">
                           {currentMeeting.readingComprehension.questions.map((q, qIndex) => (
                                <Question key={q.id} question={q} index={qIndex} onAnswer={(isCorrect) => handleAnswer(currentMeeting.id, isCorrect)} />
                           ))}
                        </div>
                    </Card>
                )}
            </div>
        );
    };

    return (
        <div className="container mx-auto max-w-5xl p-4 sm:p-8">
            <Header />
            <Tabs tabs={tabNames} activeTab={activeTab} setActiveTab={setActiveTab} completedMeetings={completedMeetings} />
            <main>
                {renderContent()}
            </main>
        </div>
    );
};

export default App;