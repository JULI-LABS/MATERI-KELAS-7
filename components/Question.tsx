
import React, { useState } from 'react';
import { QuestionData, QuestionType } from '../types';

interface QuestionProps {
    question: QuestionData;
    index: number;
    onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, index, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleCheckAnswer = () => {
        if (isChecked) return; // Prevent re-checking

        if (!selectedAnswer && question.type !== QuestionType.JUMBLE) { // Jumble check is different
            setFeedback('Silakan pilih jawaban terlebih dahulu.');
            return;
        }
        
        let isCorrect = false;
        if(question.type === QuestionType.JUMBLE) {
            const correctAnswer = question.correctAnswer.trim().toLowerCase().replace(/[.,?]/g, '');
            const userAnswer = selectedAnswer.trim().toLowerCase().replace(/[.,?]/g, '');
            if(userAnswer === ''){
                 setFeedback('Silakan ketik jawaban terlebih dahulu.');
                 return;
            }
            isCorrect = userAnswer === correctAnswer;
        } else {
             isCorrect = selectedAnswer === question.correctAnswer;
        }
       
        onAnswer(isCorrect);
        setFeedback(isCorrect ? 'Correct! ✅' : 'Incorrect. ❌');
        setIsChecked(true);
    };

    const getFeedbackClasses = () => {
        if (!feedback) return '';
        return feedback.startsWith('Correct') ? 'text-green-600' : 'text-red-600';
    };

    const renderOptions = () => {
        switch (question.type) {
            case QuestionType.MCQ:
            case QuestionType.TF:
                return (
                     <div className={`flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 ${question.type === QuestionType.TF ? 'sm:space-x-2' : ''}`}>
                        {question.options?.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => !isChecked && setSelectedAnswer(option)}
                                disabled={isChecked}
                                className={`w-full text-left p-2 border-2 rounded-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed text-gray-800
                                    ${selectedAnswer === option ? 'bg-blue-200 border-blue-500' : 'bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-300'}
                                    ${question.type === QuestionType.TF ? 'flex-1' : ''}`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                );
            case QuestionType.MATCH:
                return (
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <span className="font-medium w-full sm:w-1/3 text-gray-800">{`${index + 1}. ${question.text}`}</span>
                         <select
                            value={selectedAnswer}
                            onChange={(e) => !isChecked && setSelectedAnswer(e.target.value)}
                            disabled={isChecked}
                            className="w-full sm:w-1/3 border-2 border-gray-300 rounded-md p-2 disabled:opacity-70 disabled:bg-gray-100"
                        >
                            <option value="">Select...</option>
                            {question.matchOptions?.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                         <div className="w-full sm:w-1/3">
                            <button onClick={handleCheckAnswer} disabled={isChecked} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto">
                                Check
                            </button>
                            {feedback && <div className={`text-sm font-semibold mt-2 ${getFeedbackClasses()}`}>{feedback}</div>}
                        </div>
                    </div>
                );
            case QuestionType.JUMBLE:
                 return (
                    <>
                        <input
                            type="text"
                            value={selectedAnswer}
                            onChange={(e) => !isChecked && setSelectedAnswer(e.target.value)}
                            disabled={isChecked}
                            placeholder="Type the correct sentence..."
                            className="w-full border-2 border-gray-300 rounded-md p-2 disabled:opacity-70 disabled:bg-gray-100"
                        />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {question.type !== QuestionType.MATCH && <p className="font-medium mb-2 text-gray-800" dangerouslySetInnerHTML={{ __html: `${index + 1}. ${question.text}` }}></p>}
            {renderOptions()}
            {question.type !== QuestionType.MATCH && (
                <>
                    <button onClick={handleCheckAnswer} disabled={isChecked} className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold mt-3 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        Check Answer!
                    </button>
                    {feedback && <div className={`text-sm font-semibold mt-2 ${getFeedbackClasses()}`}>{feedback}</div>}
                </>
            )}
        </div>
    );
};

export default Question;
