
export enum QuestionType {
    MCQ = 'mcq',
    TF = 'tf',
    MATCH = 'match',
    JUMBLE = 'jumble',
}

export interface QuestionData {
    id: string;
    type: QuestionType;
    text: string;
    options?: string[];
    matchOptions?: { value: string; label: string }[];
    correctAnswer: string;
}

export interface Exercise {
    title: string;
    questions: QuestionData[];
}

export interface Material {
    title: string;
    points: string[];
}

export interface DialogExample {
    subtitle?: string;
    bgColor: string;
    lines: {
        speaker: string;
        speakerColor: string;
        text: string;
    }[];
}

export interface Dialog {
    title: string;
    examples: DialogExample[];
}

export interface ReadingComprehension {
    title: string;
    text: string;
    questions: QuestionData[];
}

export interface MeetingData {
    id: number;
    title: string;
    materials?: Material[];
    dialogs?: Dialog[];
    exercises?: Exercise[];
    readingComprehension?: ReadingComprehension;
}
