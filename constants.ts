import { MeetingData, QuestionType } from './types';

export const meetingsData: MeetingData[] = [
    {
        id: 1,
        title: "Meeting 1: Greetings & Introducing Oneself",
        materials: [
            {
                title: "1. Greetings (Menyapa)",
                points: [
                    "<strong>Formal:</strong> Good morning, Good afternoon, Good evening, How are you?",
                    "<strong>Informal:</strong> Hi, Hello, What's up?",
                ],
            },
            {
                title: "2. Introducing Oneself (Memperkenalkan Diri)",
                points: [
                    "My name is... (Nama saya...)",
                    "I am from... (Saya berasal dari...)",
                    "I am... years old. (Umur saya... tahun.)",
                    "I like... (Saya suka...)",
                ],
            },
        ],
        dialogs: [
            {
                title: "Dialog Examples",
                examples: [
                    {
                        subtitle: "Example 1 (First Meeting)",
                        bgColor: "bg-yellow-50",
                        lines: [
                            { speaker: "Galang", speakerColor: "text-gray-800", text: "Hello. I'm Galang. What's your name?" },
                            { speaker: "Andre", speakerColor: "text-gray-800", text: "Hi, Galang. I'm Andre. I'm from West Java." },
                            { speaker: "Galang", speakerColor: "text-gray-800", text: "Oh, cool! I'm from East Java. Nice to meet you, Andre." },
                            { speaker: "Andre", speakerColor: "text-gray-800", text: "Nice to meet you, too, Galang." },
                        ]
                    },
                    {
                        subtitle: "Example 2 (Formal Greeting)",
                        bgColor: "bg-green-50",
                        lines: [
                            { speaker: "Monita", speakerColor: "text-gray-800", text: "Good morning, Mr. Edo." },
                            { speaker: "Pak Edo", speakerColor: "text-gray-800", text: "Good morning, Monita. How are you today?" },
                            { speaker: "Monita", speakerColor: "text-gray-800", text: "I'm very well, thank you. And you?" },
                            { speaker: "Pak Edo", speakerColor: "text-gray-800", text: "I'm fine, too. Thank you." },
                        ]
                    },
                     {
                        subtitle: "Example 3 (Introducing Details)",
                        bgColor: "bg-yellow-50",
                        lines: [
                           { speaker: "Galang", speakerColor: "text-gray-800", text: "Hi! My name is Galang. I am 12 years old." },
                           { speaker: "Andre", speakerColor: "text-gray-800", text: "Hello, Galang. I'm Andre. I am 13 years old. I am from Bandung." },
                           { speaker: "Galang", speakerColor: "text-gray-800", text: "Wow, Bandung! I am from Surabaya. I like playing football." },
                           { speaker: "Andre", speakerColor: "text-gray-800", text: "Me too! I like football a lot." },
                        ]
                    },
                    {
                        subtitle: "Example 4 (Meeting a New Student)",
                        bgColor: "bg-green-50",
                        lines: [
                            { speaker: "Monita", speakerColor: "text-gray-800", text: "Hello. Are you new here? My name is Monita." },
                            { speaker: "Budi", speakerColor: "text-gray-800", text: "Hi, Monita. Yes, I am. My name is Budi. I'm from Padang." },
                            { speaker: "Monita", speakerColor: "text-gray-800", text: "Welcome to our school, Budi! Nice to meet you." },
                            { speaker: "Budi", speakerColor: "text-gray-800", text: "Nice to meet you, too, Monita." },
                        ]
                    }
                ]
            }
        ],
        exercises: [
            {
                title: "Exercise 1: Multiple Choice",
                questions: [
                    { id: 'm1e1q1', type: QuestionType.MCQ, text: "You meet your teacher at 8 AM. You say...", options: ["(A) Good night", "(B) Good morning", "(C) Good evening", "(D) Goodbye"], correctAnswer: "(B) Good morning" },
                    { id: 'm1e1q2', type: QuestionType.MCQ, text: 'Galang says: "Hello, I\'m Galang." Andre replies...', options: ["(A) I'm sorry", "(B) Thank you", "(C) Hi, I'm Andre", "(D) See you later"], correctAnswer: "(C) Hi, I'm Andre" },
                    { id: 'm1e1q3', type: QuestionType.MCQ, text: "You meet your friend at 3 PM. You say...", options: ["(A) Good morning", "(B) Good night", "(C) Good afternoon", "(D) Hi"], correctAnswer: "(C) Good afternoon" },
                    { id: 'm1e1q4', type: QuestionType.MCQ, text: "You meet your parents at 8 PM. You say...", options: ["(A) Good evening", "(B) Good morning", "(C) Good afternoon", "(D) What's up?"], correctAnswer: "(A) Good evening" },
                    { id: 'm1e1q5', type: QuestionType.MCQ, text: 'Andre: "How are you?" <br> Monita: "..."', options: ["(A) Nice to meet you", "(B) I'm fine, thank you", "(C) My name is Monita", "(D) I am 12 years old"], correctAnswer: "(B) I'm fine, thank you" },
                    { id: 'm1e1q6', type: QuestionType.MCQ, text: 'The sentence "I am 13 years old" tells about...', options: ["(A) Name", "(B) Hobby", "(C) Origin", "(D) Age"], correctAnswer: "(D) Age" },
                    { id: 'm1e1q7', type: QuestionType.MCQ, text: 'The sentence "I am from West Java" tells about...', options: ["(A) Origin", "(B) Age", "(C) Name", "(D) Hobby"], correctAnswer: "(A) Origin" },
                    { id: 'm1e1q8', type: QuestionType.MCQ, text: 'Galang: "Nice to meet you, Andre." <br> Andre: "..."', options: ["(A) How are you?", "(B) I'm from Bandung", "(C) Nice to meet you, too", "(D) Thank you"], correctAnswer: "(C) Nice to meet you, too" },
                    { id: 'm1e1q9', type: QuestionType.MCQ, text: 'Andre: "Hi, Galang! What\'s up?" <br> Galang: "..."', options: ["(A) I am 12 years old", "(B) Not much. You?", "(C) Good morning", "(D) My name is Galang"], correctAnswer: "(B) Not much. You?" },
                    { id: 'm1e1q10', type: QuestionType.MCQ, text: 'The sentence "I like playing football" tells about...', options: ["(A) Age", "(B) Name", "(C) Hobby", "(D) Origin"], correctAnswer: "(C) Hobby" },
                ]
            },
            {
                title: "Exercise 2: True or False",
                questions: [
                    { id: 'm1e2q1', type: QuestionType.TF, text: 'We say "See you later" to greet someone.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm1e2q2', type: QuestionType.TF, text: '"My name is Monita" is used to introduce oneself.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm1e2q3', type: QuestionType.TF, text: '"Good night" is used to greet someone at 9 PM.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm1e2q4', type: QuestionType.TF, text: '"I\'m from Jakarta" tells your name.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm1e2q5', type: QuestionType.TF, text: '"How are you?" is a formal greeting.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm1e2q6', type: QuestionType.TF, text: 'We say "Good morning" at 1 PM.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm1e2q7', type: QuestionType.TF, text: '"What\'s your name?" is to ask for someone\'s age.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm1e2q8', type: QuestionType.TF, text: '"Hi" and "Hello" are informal greetings.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm1e2q9', type: QuestionType.TF, text: '"I like reading books" tells about your hobby.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm1e2q10', type: QuestionType.TF, text: '"Nice to meet you, too" is a response to "Nice to meet you".', options: ["True", "False"], correctAnswer: "True" },
                ]
            },
            {
                title: "Exercise 3: Matching",
                questions: [
                    { id: 'm1e3q1', type: QuestionType.MATCH, text: "Hello", matchOptions: [{value: "terima_kasih", label:"Terima kasih"}, {value:"halo", label:"Halo"}, {value:"sampai_jumpa", label:"Sampai jumpa"}], correctAnswer: "halo" },
                    { id: 'm1e3q2', type: QuestionType.MATCH, text: "How are you?", matchOptions: [{value: "apa_kabar", label:"Apa kabar?"}, {value:"siapa_nama_kamu", label:"Siapa nama kamu?"}, {value:"saya_baik", label:"Saya baik"}], correctAnswer: "apa_kabar" },
                    { id: 'm1e3q3', type: QuestionType.MATCH, text: "Good morning", matchOptions: [{value: "selamat_sore", label:"Selamat sore"}, {value:"selamat_pagi", label:"Selamat pagi"}, {value:"selamat_malam", label:"Selamat malam"}], correctAnswer: "selamat_pagi" },
                    { id: 'm1e3q4', type: QuestionType.MATCH, text: "My name is...", matchOptions: [{value: "nama_saya", label:"Nama saya..."}, {value:"umur_saya", label:"Umur saya..."}, {value:"saya_suka", label:"Saya suka..."}], correctAnswer: "nama_saya" },
                    { id: 'm1e3q5', type: QuestionType.MATCH, text: "I am from...", matchOptions: [{value: "saya_dari", label:"Saya berasal dari..."}, {value:"saya_tinggal_di", label:"Saya tinggal di..."}, {value:"nama_saya", label:"Nama saya..."}], correctAnswer: "saya_dari" },
                    { id: 'm1e3q6', type: QuestionType.MATCH, text: "I'm fine", matchOptions: [{value: "terima_kasih", label:"Terima kasih"}, {value:"maaf", label:"Maaf"}, {value:"saya_baik", label:"Saya baik-baik saja"}], correctAnswer: "saya_baik" },
                    { id: 'm1e3q7', type: QuestionType.MATCH, text: "Nice to meet you", matchOptions: [{value: "senang_bertemu", label:"Senang bertemu denganmu"}, {value:"sampai_jumpa", label:"Sampai jumpa lagi"}, {value:"siapa_namamu", label:"Siapa namamu?"}], correctAnswer: "senang_bertemu" },
                    { id: 'm1e3q8', type: QuestionType.MATCH, text: "What's up?", matchOptions: [{value: "apa_kabar", label:"Apa kabar? (informal)"}, {value:"ada_apa", label:"Ada apa?"}, {value:"siapa_itu", label:"Siapa itu?"}], correctAnswer: "apa_kabar" },
                    { id: 'm1e3q9', type: QuestionType.MATCH, text: "Good afternoon", matchOptions: [{value: "selamat_pagi", label:"Selamat pagi"}, {value:"selamat_siang", label:"Selamat siang/sore"}, {value:"selamat_malam", label:"Selamat malam"}], correctAnswer: "selamat_siang" },
                    { id: 'm1e3q10', type: QuestionType.MATCH, text: "I like...", matchOptions: [{value: "saya_ingin", label:"Saya ingin..."}, {value:"saya_punya", label:"Saya punya..."}, {value:"saya_suka", label:"Saya suka..."}], correctAnswer: "saya_suka" },
                ]
            },
            {
                title: "Exercise 4: Jumbled Words",
                questions: [
                    { id: 'm1e4q1', type: QuestionType.JUMBLE, text: "name / is / My / Andre", correctAnswer: "My name is Andre" },
                    { id: 'm1e4q2', type: QuestionType.JUMBLE, text: "you / ? / are / How", correctAnswer: "How are you?" },
                    { id: 'm1e4q3', type: QuestionType.JUMBLE, text: "from / I / am / Bandung", correctAnswer: "I am from Bandung" },
                    { id: 'm1e4q4', type: QuestionType.JUMBLE, text: "old / years / 12 / am / I", correctAnswer: "I am 12 years old" },
                    { id: 'm1e4q5', type: QuestionType.JUMBLE, text: "is / What / name / your / ?", correctAnswer: "What is your name?" },
                    { id: 'm1e4q6', type: QuestionType.JUMBLE, text: "nice / meet / to / you", correctAnswer: "Nice to meet you" },
                    { id: 'm1e4q7', type: QuestionType.JUMBLE, text: "morning / Good / teacher", correctAnswer: "Good morning, teacher" },
                    { id: 'm1e4q8', type: QuestionType.JUMBLE, text: "are / ? / you / old / How", correctAnswer: "How old are you?" },
                    { id: 'm1e4q9', type: QuestionType.JUMBLE, text: "fine / I'm / thank / , / you", correctAnswer: "I'm fine, thank you" },
                    { id: 'm1e4q10', type: QuestionType.JUMBLE, text: "like / I / football / playing", correctAnswer: "I like playing football" },
                ]
            },
        ],
    },
    {
        id: 2,
        title: "Meeting 2: Leave-Takings & Introducing Others",
         materials: [
            {
                title: "1. Leave-Takings (Berpamitan)",
                points: ["Goodbye, See you later, Bye, Good night."],
            },
            {
                title: "2. Introducing Others (Memperkenalkan Orang Lain)",
                points: ["This is... (Ini adalah...)", "He is... / She is... (Dia adalah...)", "Nice to meet you. / Nice to meet you, too."],
            },
        ],
        dialogs: [
             {
                title: "Contoh Dialog 2",
                examples: [
                    {
                        bgColor: "bg-green-50",
                        lines: [
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "Hi, Galang. How are you?" },
                             { speaker: "Galang", speakerColor: "text-gray-800", text: "I'm good, thanks. Who is with you?" },
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "Oh, this is Monita. She is my classmate." },
                             { speaker: "Galang", speakerColor: "text-gray-800", text: "Hello, Monita. I'm Galang. Nice to meet you." },
                             { speaker: "Monita", speakerColor: "text-gray-800", text: "Hi, Galang. Nice to meet you, too." },
                             { speaker: "Galang", speakerColor: "text-gray-800", text: "Well, I have to go now. See you later, Andre, Monita!" },
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "Goodbye, Galang!" },
                        ]
                    }
                ]
             }
        ],
        exercises: [
            {
                title: "Exercise 1: Multiple Choice",
                questions: [
                    { id: 'm2e1q1', type: QuestionType.MCQ, text: "You are leaving your friend's house. You say...", options: ["(A) Hello", "(B) How are you?", "(C) See you later", "(D) Good morning"], correctAnswer: "(C) See you later" },
                    { id: 'm2e1q2', type: QuestionType.MCQ, text: 'Galang: "Hi Andre, this is Monita." <br> Andre: "..."', options: ["(A) Goodbye, Monita", "(B) Hello Monita, nice to meet you", "(C) I'm sorry, Monita", "(D) Thank you, Monita"], correctAnswer: "(B) Hello Monita, nice to meet you" },
                    { id: 'm2e1q3', type: QuestionType.MCQ, text: "Which one is NOT a leave-taking expression?", options: ["(A) Goodbye", "(B) Bye", "(C) What's up?", "(D) See you"], correctAnswer: "(C) What's up?" },
                    { id: 'm2e1q4', type: QuestionType.MCQ, text: 'To introduce your friend Budi to Ana, you say...', options: ["(A) Ana, I am Budi.", "(B) Ana, who are you?", "(C) Ana, this is Budi.", "(D) Ana, see you later."], correctAnswer: "(C) Ana, this is Budi." },
                    { id: 'm2e1q5', type: QuestionType.MCQ, text: 'The class is over. The teacher says goodbye. You reply...', options: ["(A) Good morning, teacher.", "(B) Goodbye, teacher.", "(C) My name is...", "(D) How are you?"], correctAnswer: "(B) Goodbye, teacher." },
                    { id: 'm2e1q6', type: QuestionType.MCQ, text: '"He is my classmate" is used to tell about someone\'s...', options: ["(A) Age", "(B) Name", "(C) Relationship", "(D) Hobby"], correctAnswer: "(C) Relationship" },
                    { id: 'm2e1q7', type: QuestionType.MCQ, text: 'A response for "Nice to meet you" is...', options: ["(A) Nice to meet you, too.", "(B) I am from Surabaya.", "(C) Thank you.", "(D) Goodbye."], correctAnswer: "(A) Nice to meet you, too." },
                    { id: 'm2e1q8', type: QuestionType.MCQ, text: '"Good night" is usually said when...', options: ["(A) You meet someone in the morning", "(B) You meet someone in the evening", "(C) You leave someone at 3 PM", "(D) You are going to bed"], correctAnswer: "(D) You are going to bed" },
                    { id: 'm2e1q9', type: QuestionType.MCQ, text: 'Andre: "Who is with you?" Galang answers: "Oh, ... Monita."', options: ["(A) I am", "(B) he is", "(C) this is", "(D) you are"], correctAnswer: "(C) this is" },
                    { id: 'm2e1q10', type: QuestionType.MCQ, text: 'You want to go home. You say to your friends: "Well, I have to go now. ..."', options: ["(A) How are you?", "(B) Nice to meet you.", "(C) What is your name?", "(D) See you tomorrow!"], correctAnswer: "(D) See you tomorrow!" },
                ]
            },
            {
                title: "Exercise 2: True or False",
                questions: [
                    { id: 'm2e2q1', type: QuestionType.TF, text: '"Bye" is an expression for greeting someone.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm2e2q2', type: QuestionType.TF, text: 'When you introduce your sister, you can say "She is my sister".', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm2e2q3', type: QuestionType.TF, text: 'You say "Good night" to start a conversation in the evening.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm2e2q4', type: QuestionType.TF, text: '"This is my father" is a correct way to introduce your dad.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm2e2q5', type: QuestionType.TF, text: '"See you later" means you will never meet again.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm2e2q6', type: QuestionType.TF, text: 'We say "Hello" when we are about to leave.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm2e2q7', type: QuestionType.TF, text: 'A correct response to "Goodbye" is "Goodbye".', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm2e2q8', type: QuestionType.TF, text: 'To introduce two friends, you can say "Ana, this is Budi. Budi, this is Ana."', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm2e2q9', type: QuestionType.TF, text: '"He is my teacher" introduces someone.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm2e2q10', type: QuestionType.TF, text: 'You can say "Bye-bye" to your friend when you leave.', options: ["True", "False"], correctAnswer: "True" },
                ]
            },
            {
                title: "Exercise 3: Matching",
                questions: [
                    { id: 'm2e3q1', type: QuestionType.MATCH, text: "Goodbye", matchOptions: [{value: "selamat_pagi", label:"Selamat pagi"}, {value:"selamat_tinggal", label:"Selamat tinggal"}, {value:"apa_kabar", label:"Apa kabar?"}], correctAnswer: "selamat_tinggal" },
                    { id: 'm2e3q2', type: QuestionType.MATCH, text: "See you later", matchOptions: [{value: "sampai_jumpa", label:"Sampai jumpa lagi"}, {value:"terima_kasih", label:"Terima kasih"}, {value:"siapa_dia", label:"Siapa dia?"}], correctAnswer: "sampai_jumpa" },
                    { id: 'm2e3q3', type: QuestionType.MATCH, text: "This is...", matchOptions: [{value: "ini_adalah", label:"Ini adalah..."}, {value:"dia_adalah", label:"Dia adalah..."}, {value:"nama_saya", label:"Nama saya..."}], correctAnswer: "ini_adalah" },
                    { id: 'm2e3q4', type: QuestionType.MATCH, text: "He is my friend", matchOptions: [{value: "dia_teman_saya_lk", label:"Dia teman saya (laki-laki)"}, {value:"dia_teman_saya_pr", label:"Dia teman saya (perempuan)"}, {value:"itu_buku_saya", label:"Itu buku saya"}], correctAnswer: "dia_teman_saya_lk" },
                    { id: 'm2e3q5', type: QuestionType.MATCH, text: "She is my classmate", matchOptions: [{value: "dia_guru_saya", label:"Dia guru saya"}, {value:"dia_teman_sekelas_pr", label:"Dia teman sekelas saya (pr)"}, {value:"saya_suka_kelas", label:"Saya suka kelas"}], correctAnswer: "dia_teman_sekelas_pr" },
                    { id: 'm2e3q6', type: QuestionType.MATCH, text: "Bye", matchOptions: [{value: "halo", label:"Halo"}, {value:"dah", label:"Dah (selamat tinggal)"}, {value:"maaf", label:"Maaf"}], correctAnswer: "dah" },
                    { id: 'm2e3q7', type: QuestionType.MATCH, text: "Good night", matchOptions: [{value: "selamat_malam_berpisah", label:"Selamat malam (berpisah/tidur)"}, {value:"selamat_malam_bertemu", label:"Selamat malam (bertemu)"}, {value:"mimpi_indah", label:"Mimpi indah"}], correctAnswer: "selamat_malam_berpisah" },
                    { id: 'm2e3q8', type: QuestionType.MATCH, text: "Who is she?", matchOptions: [{value: "siapa_dia_pr", label:"Siapa dia (perempuan)?"}, {value:"apa_ini", label:"Apa ini?"}, {value:"di_mana_dia", label:"Di mana dia?"}], correctAnswer: "siapa_dia_pr" },
                    { id: 'm2e3q9', type: QuestionType.MATCH, text: "He is my brother", matchOptions: [{value: "dia_ayah_saya", label:"Dia ayah saya"}, {value:"dia_saudara_lk_saya", label:"Dia saudara laki-laki saya"}, {value:"dia_teman_baik_saya", label:"Dia teman baik saya"}], correctAnswer: "dia_saudara_lk_saya" },
                    { id: 'm2e3q10', type: QuestionType.MATCH, text: "Nice to meet her", matchOptions: [{value: "senang_bertemu_dia_pr", label:"Senang bertemu dengannya (pr)"}, {value:"senang_bertemu_kamu", label:"Senang bertemu denganmu"}, {value:"sampai_jumpa_dengannya", label:"Sampai jumpa dengannya"}], correctAnswer: "senang_bertemu_dia_pr" },
                ]
            },
            {
                title: "Exercise 4: Jumbled Words",
                questions: [
                    { id: 'm2e4q1', type: QuestionType.JUMBLE, text: "you / See / later", correctAnswer: "See you later" },
                    { id: 'm2e4q2', type: QuestionType.JUMBLE, text: "is / This / friend / my", correctAnswer: "This is my friend" },
                    { id: 'm2e4q3', type: QuestionType.JUMBLE, text: "Goodbye / teacher / ,", correctAnswer: "Goodbye, teacher" },
                    { id: 'm2e4q4', type: QuestionType.JUMBLE, text: "is / my / She / sister", correctAnswer: "She is my sister" },
                    { id: 'm2e4q5', type: QuestionType.JUMBLE, text: "to / Nice / you / meet / too", correctAnswer: "Nice to meet you, too" },
                    { id: 'm2e4q6', type: QuestionType.JUMBLE, text: "her / is / What / name / ?", correctAnswer: "What is her name?" },
                    { id: 'm2e4q7', type: QuestionType.JUMBLE, text: "Budi / is / He", correctAnswer: "He is Budi" },
                    { id: 'm2e4q8', type: QuestionType.JUMBLE, text: "classmate / is / my / She", correctAnswer: "She is my classmate" },
                    { id: 'm2e4q9', type: QuestionType.JUMBLE, text: "go / I / to / have / now", correctAnswer: "I have to go now" },
                    { id: 'm2e4q10', type: QuestionType.JUMBLE, text: "night / Good / mom", correctAnswer: "Good night, mom" },
                ]
            }
        ],
    },
    {
        id: 3,
        title: "Meeting 3: Thanking",
         materials: [
            {
                title: "1. Saying Thanks (Berterima kasih)",
                points: ["Thank you.", "Thanks a lot.", "Thank you very much."],
            },
            {
                title: "2. Responses (Merespon ucapan terima kasih)",
                points: ["You're welcome.", "No problem.", "My pleasure."],
            },
        ],
        dialogs: [
             {
                title: "Contoh Dialog 3",
                examples: [
                    {
                        bgColor: "bg-purple-50",
                        lines: [
                             { speaker: "Monita", speakerColor: "text-gray-800", text: "(Drops her book) Oh, no!" },
                             { speaker: "Galang", speakerColor: "text-gray-800", text: "(Picks up the book) Here is your book, Monita." },
                             { speaker: "Monita", speakerColor: "text-gray-800", text: "Thank you very much, Galang." },
                             { speaker: "Galang", speakerColor: "text-gray-800", text: "You're welcome." },
                        ]
                    }
                ]
             }
        ],
        exercises: [
            {
                title: "Exercise 1: Multiple Choice",
                questions: [
                    { id: 'm3e1q1', type: QuestionType.MCQ, text: "Someone helps you carry your books. You say...", options: ["(A) I'm sorry", "(B) Thank you", "(C) Goodbye", "(D) My name is..."], correctAnswer: "(B) Thank you" },
                    { id: 'm3e1q2', type: QuestionType.MCQ, text: 'Monita: "Thank you for the gift." Galang: "..."', options: ["(A) You're welcome", "(B) I'm fine", "(C) See you later", "(D) I apologize"], correctAnswer: "(A) You're welcome" },
                    { id: 'm3e1q3', type: QuestionType.MCQ, text: "Which phrase is used to respond to 'Thank you'?", options: ["(A) Thanks a lot", "(B) Nice to meet you", "(C) No problem", "(D) How are you?"], correctAnswer: "(C) No problem" },
                    { id: 'm3e1q4', type: QuestionType.MCQ, text: 'Your teacher praises your work. You should say...', options: ["(A) It's okay.", "(B) Thank you, Ma'am/Sir.", "(C) What's up?", "(D) I am sorry."], correctAnswer: "(B) Thank you, Ma'am/Sir." },
                    { id: 'm3e1q5', type: QuestionType.MCQ, text: '"Thanks a lot" is another way to say...', options: ["(A) I'm sorry", "(B) You're welcome", "(C) Thank you very much", "(D) Goodbye"], correctAnswer: "(C) Thank you very much" },
                    { id: 'm3e1q6', type: QuestionType.MCQ, text: 'Andre: "Here is your pen." Budi: "..."', options: ["(A) Thanks, Andre.", "(B) Sorry, Andre.", "(C) Hello, Andre.", "(D) Bye, Andre."], correctAnswer: "(A) Thanks, Andre." },
                    { id: 'm3e1q7', type: QuestionType.MCQ, text: 'Which is NOT a response to "Thank you"?', options: ["(A) You're welcome", "(B) My pleasure", "(C) No problem", "(D) Thank you, too"], correctAnswer: "(D) Thank you, too" },
                    { id: 'm3e1q8', type: QuestionType.MCQ, text: 'You receive a compliment: "You sing beautifully!" You reply...', options: ["(A) I am 12 years old.", "(B) Thank you for the compliment.", "(C) That's all right.", "(D) Good morning."], correctAnswer: "(B) Thank you for the compliment." },
                    { id: 'm3e1q9', type: QuestionType.MCQ, text: 'Someone opens the door for you. You say...', options: ["(A) Thanks!", "(B) Sorry!", "(C) Okay!", "(D) Hello!"], correctAnswer: "(A) Thanks!" },
                    { id: 'm3e1q10', type: QuestionType.MCQ, text: '"My pleasure" is a polite response to...', options: ["(A) I'm sorry", "(B) Thank you", "(C) How are you?", "(D) What is your name?"], correctAnswer: "(B) Thank you" },
                ]
            },
            {
                title: "Exercise 2: True or False",
                questions: [
                    { id: 'm3e2q1', type: QuestionType.TF, text: 'We say "Thank you" when we make a mistake.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm3e2q2', type: QuestionType.TF, text: '"You\'re welcome" is a way to say thank you.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm3e2q3', type: QuestionType.TF, text: 'You should thank someone who gives you a present.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm3e2q4', type: QuestionType.TF, text: '"No problem" can be used to respond to an apology and to a thank you.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm3e2q5', type: QuestionType.TF, text: '"Thanks a lot" is more formal than "Thank you".', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm3e2q6', type: QuestionType.TF, text: 'When someone says "Thank you very much," you can reply "You\'re welcome."', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm3e2q7', type: QuestionType.TF, text: 'It is polite to say thank you for help.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm3e2q8', type: QuestionType.TF, text: 'We say "My pleasure" to apologize for something.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm3e2q9', type: QuestionType.TF, text: '"Thanks" is an informal way of saying "Thank you".', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm3e2q10', type: QuestionType.TF, text: 'If you help your mother, she might say "Thank you, dear."', options: ["True", "False"], correctAnswer: "True" },
                ]
            },
            {
                title: "Exercise 3: Matching",
                questions: [
                    { id: 'm3e3q1', type: QuestionType.MATCH, text: "Thank you", matchOptions: [{value: "terima_kasih", label:"Terima kasih"}, {value:"maaf", label:"Maaf"}, {value:"tolong", label:"Tolong"}], correctAnswer: "terima_kasih" },
                    { id: 'm3e3q2', type: QuestionType.MATCH, text: "You're welcome", matchOptions: [{value: "sama_sama", label:"Sama-sama / Kembali"}, {value:"selamat_datang", label:"Selamat datang"}, {value:"saya_baik", label:"Saya baik"}], correctAnswer: "sama_sama" },
                    { id: 'm3e3q3', type: QuestionType.MATCH, text: "Thanks a lot", matchOptions: [{value: "terima_kasih_banyak", label:"Terima kasih banyak"}, {value:"maaf_sekali", label:"Maaf sekali"}, {value:"banyak_sekali", label:"Banyak sekali"}], correctAnswer: "terima_kasih_banyak" },
                    { id: 'm3e3q4', type: QuestionType.MATCH, text: "No problem", matchOptions: [{value: "tidak_masalah", label:"Tidak masalah"}, {value:"ada_masalah", label:"Ada masalah"}, {value:"bukan_masalah_saya", label:"Bukan masalah saya"}], correctAnswer: "tidak_masalah" },
                    { id: 'm3e3q5', type: QuestionType.MATCH, text: "My pleasure", matchOptions: [{value: "dengan_senang_hati", label:"Dengan senang hati"}, {value:"kesenangan_saya", label:"Kesenangan saya"}, {value:"tolong_saya", label:"Tolong saya"}], correctAnswer: "dengan_senang_hati" },
                    { id: 'm3e3q6', type: QuestionType.MATCH, text: "Thank you very much", matchOptions: [{value: "terima_kasih_banyak_sekali", label:"Terima kasih banyak sekali"}, {value:"kamu_baik_sekali", label:"Kamu baik sekali"}, {value:"saya_sangat_senang", label:"Saya sangat senang"}], correctAnswer: "terima_kasih_banyak_sekali" },
                    { id: 'm3e3q7', type: QuestionType.MATCH, text: "A gift", matchOptions: [{value: "sebuah_hadiah", label:"Sebuah hadiah"}, {value:"sebuah_bantuan", label:"Sebuah bantuan"}, {value:"sebuah_pujian", label:"Sebuah pujian"}], correctAnswer: "sebuah_hadiah" },
                    { id: 'm3e3q8', type: QuestionType.MATCH, text: "To help", matchOptions: [{value: "menolong", label:"Menolong"}, {value:"meminta", label:"Meminta"}, {value:"memberi", label:"Memberi"}], correctAnswer: "menolong" },
                    { id: 'm3e3q9', type: QuestionType.MATCH, text: "A compliment", matchOptions: [{value: "pujian", label:"Pujian"}, {value:"keluhan", label:"Keluhan"}, {value:"pertanyaan", label:"Pertanyaan"}], correctAnswer: "pujian" },
                    { id: 'm3e3q10', type: QuestionType.MATCH, text: "Thanks", matchOptions: [{value: "makasih", label:"Makasih (informal)"}, {value:"maaf_ya", label:"Maaf ya"}, {value:"tolong_dong", label:"Tolong dong"}], correctAnswer: "makasih" },
                ]
            },
            {
                title: "Exercise 4: Jumbled Words",
                questions: [
                    { id: 'm3e4q1', type: QuestionType.JUMBLE, text: "you / Thank", correctAnswer: "Thank you" },
                    { id: 'm3e4q2', type: QuestionType.JUMBLE, text: "welcome / You're", correctAnswer: "You're welcome" },
                    { id: 'm3e4q3', type: QuestionType.JUMBLE, text: "a / Thanks / lot", correctAnswer: "Thanks a lot" },
                    { id: 'm3e4q4', type: QuestionType.JUMBLE, text: "No / problem", correctAnswer: "No problem" },
                    { id: 'm3e4q5', type: QuestionType.JUMBLE, text: "very / Thank / much / you", correctAnswer: "Thank you very much" },
                    { id: 'm3e4q6', type: QuestionType.JUMBLE, text: "the / for / help / Thanks", correctAnswer: "Thanks for the help" },
                    { id: 'm3e4q7', type: QuestionType.JUMBLE, text: "pleasure / My", correctAnswer: "My pleasure" },
                    { id: 'm3e4q8', type: QuestionType.JUMBLE, text: "gift / the / for / Thank / you", correctAnswer: "Thank you for the gift" },
                    { id: 'm3e4q9', type: QuestionType.JUMBLE, text: "so / are / kind / You", correctAnswer: "You are so kind" },
                    { id: 'm3e4q10', type: QuestionType.JUMBLE, text: "it / appreciate / I", correctAnswer: "I appreciate it" },
                ]
            }
        ],
    },
    {
        id: 4,
        title: "Meeting 4: Apologizing",
        materials: [
            {
                title: "1. Apologizing (Meminta Maaf)",
                points: ["I'm sorry.", "I am sorry for... (Saya minta maaf atas...)", "I apologize. (Saya minta maaf - lebih formal)"],
            },
            {
                title: "2. Responses (Merespon permintaan maaf)",
                points: ["That's all right.", "It's okay.", "No problem."],
            },
        ],
        dialogs: [
             {
                title: "Contoh Dialog 4",
                examples: [
                    {
                        bgColor: "bg-red-50",
                        lines: [
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "(Running and bumps into Mr. Edo)" },
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "Oh! I'm very sorry, Sir." },
                             { speaker: "Pak Edo", speakerColor: "text-gray-800", text: "That's all right, Andre. Please be careful next time." },
                             { speaker: "Andre", speakerColor: "text-gray-800", text: "Yes, Sir. I will." },
                        ]
                    }
                ]
             }
        ],
        exercises: [
             {
                title: "Exercise 1: Multiple Choice",
                questions: [
                    { id: 'm4e1q1', type: QuestionType.MCQ, text: "You accidentally break your mom's vase. You say...", options: ["(A) Thank you, Mom.", "(B) I'm very sorry, Mom.", "(C) See you later, Mom.", "(D) Hello, Mom."], correctAnswer: "(B) I'm very sorry, Mom." },
                    { id: 'm4e1q2', type: QuestionType.MCQ, text: 'Andre: "I\'m sorry for being late." Teacher: "..."', options: ["(A) You're welcome.", "(B) Thank you.", "(C) That's all right. Don't be late next time.", "(D) Nice to meet you."], correctAnswer: "(C) That's all right. Don't be late next time." },
                    { id: 'm4e1q3', type: QuestionType.MCQ, text: "Which phrase is used to apologize?", options: ["(A) My pleasure", "(B) I apologize", "(C) You're welcome", "(D) Good morning"], correctAnswer: "(B) I apologize" },
                    { id: 'm4e1q4', type: QuestionType.MCQ, text: 'You step on your friend\'s foot. You say...', options: ["(A) Thanks a lot!", "(B) Oh, I am sorry!", "(C) How are you?", "(D) It's my foot!"], correctAnswer: "(B) Oh, I am sorry!" },
                    { id: 'm4e1q5', type: QuestionType.MCQ, text: 'Which is a response to an apology?', options: ["(A) I'm sorry, too.", "(B) Thank you.", "(C) It\'s okay.", "(D) See you."], correctAnswer: "(C) It's okay." },
                    { id: 'm4e1q6', type: QuestionType.MCQ, text: '"I\'m sorry for losing your book." The correct response is...', options: ["(A) Thank you for losing it.", "(B) That\'s okay, we can find it.", "(C) You\'re welcome.", "(D) I like books."], correctAnswer: "(B) That's okay, we can find it." },
                    { id: 'm4e1q7', type: QuestionType.MCQ, text: '"I apologize" is a more ... way to say sorry.', options: ["(A) informal", "(B) funny", "(C) formal", "(D) happy"], correctAnswer: "(C) formal" },
                    { id: 'm4e1q8', type: QuestionType.MCQ, text: 'Monita: "Oops, I spilled water on your desk." Galang: "..."', options: ["(A) I'm sorry.", "(B) No problem, I can clean it up.", "(C) Thank you very much.", "(D) Goodbye."], correctAnswer: "(B) No problem, I can clean it up." },
                    { id: 'm4e1q9', type: QuestionType.MCQ, text: 'You forget your friend\'s birthday. You should say...', options: ["(A) Happy birthday!", "(B) I'm so sorry I forgot your birthday.", "(C) Thank you for your birthday.", "(D) I am from Jakarta."], correctAnswer: "(B) I'm so sorry I forgot your birthday." },
                    { id: 'm4e1q10', type: QuestionType.MCQ, text: '"That\'s all right" is used to...', options: ["(A) Greet someone", "(B) Thank someone", "(C) Introduce someone", "(D) Forgive someone"], correctAnswer: "(D) Forgive someone" },
                ]
            },
            {
                title: "Exercise 2: True or False",
                questions: [
                    { id: 'm4e2q1', type: QuestionType.TF, text: 'We say "I\'m sorry" to thank someone.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm4e2q2', type: QuestionType.TF, text: '"It\'s okay" is a good response when someone apologizes to you.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm4e2q3', type: QuestionType.TF, text: 'You should apologize if you hurt someone by accident.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm4e2q4', type: QuestionType.TF, text: '"I apologize" means the same as "Thank you".', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm4e2q5', type: QuestionType.TF, text: 'If you are late for class, you should say sorry to the teacher.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm4e2q6', type: QuestionType.TF, text: '"No problem" can only be used to respond to "Thank you".', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm4e2q7', type: QuestionType.TF, text: '"I am sorry for making noise" is a correct apology.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm4e2q8', type: QuestionType.TF, text: 'We say "That\'s all right" to make someone feel better after they apologize.', options: ["True", "False"], correctAnswer: "True" },
                    { id: 'm4e2q9', type: QuestionType.TF, text: 'It is rude to apologize for your mistakes.', options: ["True", "False"], correctAnswer: "False" },
                    { id: 'm4e2q10', type: QuestionType.TF, text: 'You can say "I\'m sorry" if you don\'t understand what someone said.', options: ["True", "False"], correctAnswer: "True" },
                ]
            },
            {
                title: "Exercise 3: Matching",
                questions: [
                    { id: 'm4e3q1', type: QuestionType.MATCH, text: "I'm sorry", matchOptions: [{value: "saya_minta_maaf", label:"Saya minta maaf"}, {value:"terima_kasih", label:"Terima kasih"}, {value:"sama_sama", label:"Sama-sama"}], correctAnswer: "saya_minta_maaf" },
                    { id: 'm4e3q2', type: QuestionType.MATCH, text: "That's all right", matchOptions: [{value: "tidak_apa_apa", label:"Tidak apa-apa"}, {value:"itu_benar", label:"Itu benar"}, {value:"semuanya_baik", label:"Semuanya baik"}], correctAnswer: "tidak_apa_apa" },
                    { id: 'm4e3q3', type: QuestionType.MATCH, text: "I apologize", matchOptions: [{value: "saya_minta_maaf_formal", label:"Saya minta maaf (formal)"}, {value:"saya_setuju", label:"Saya setuju"}, {value:"saya_berjanji", label:"Saya berjanji"}], correctAnswer: "saya_minta_maaf_formal" },
                    { id: 'm4e3q4', type: QuestionType.MATCH, text: "It's okay", matchOptions: [{value: "tidak_apa_apa_oke", label:"Tidak apa-apa / Oke"}, {value:"ini_milikku", label:"Ini milikku"}, {value:"ini_bagus", label:"Ini bagus"}], correctAnswer: "tidak_apa_apa_oke" },
                    { id: 'm4e3q5', type: QuestionType.MATCH, text: "Sorry for being late", matchOptions: [{value: "maaf_terlambat", label:"Maaf karena terlambat"}, {value:"maaf_mengganggu", label:"Maaf mengganggu"}, {value:"maaf_lupa", label:"Maaf saya lupa"}], correctAnswer: "maaf_terlambat" },
                    { id: 'm4e3q6', type: QuestionType.MATCH, text: "No problem", matchOptions: [{value: "tidak_masalah", label:"Tidak masalah"}, {value:"bukan_masalah", label:"Bukan masalah"}, {value:"jangan_khawatir", label:"Jangan khawatir"}], correctAnswer: "tidak_masalah" },
                    { id: 'm4e3q7', type: QuestionType.MATCH, text: "A mistake", matchOptions: [{value: "sebuah_kesalahan", label:"Sebuah kesalahan"}, {value:"sebuah_pertanyaan", label:"Sebuah pertanyaan"}, {value:"sebuah_jawaban", label:"Sebuah jawaban"}], correctAnswer: "sebuah_kesalahan" },
                    { id: 'm4e3q8', type: QuestionType.MATCH, text: "To forgive", matchOptions: [{value: "memaafkan", label:"Memaafkan"}, {value:"melupakan", label:"Melupakan"}, {value:"mengingat", label:"Mengingat"}], correctAnswer: "memaafkan" },
                    { id: 'm4e3q9', type: QuestionType.MATCH, text: "Be careful", matchOptions: [{value: "hati_hati", label:"Hati-hati"}, {value:"cepatlah", label:"Cepatlah"}, {value:"pelan_pelan", label:"Pelan-pelan"}], correctAnswer: "hati_hati" },
                    { id: 'm4e3q10', type: QuestionType.MATCH, text: "I'm very sorry", matchOptions: [{value: "saya_sangat_menyesal", label:"Saya sangat menyesal"}, {value:"saya_sangat_senang", label:"Saya sangat senang"}, {value:"saya_sangat_lelah", label:"Saya sangat lelah"}], correctAnswer: "saya_sangat_menyesal" },
                ]
            },
            {
                title: "Exercise 4: Jumbled Words",
                questions: [
                    { id: 'm4e4q1', type: QuestionType.JUMBLE, text: "sorry / I'm / so", correctAnswer: "I'm so sorry" },
                    { id: 'm4e4q2', type: QuestionType.JUMBLE, text: "all / That's / right", correctAnswer: "That's all right" },
                    { id: 'm4e4q3', type: QuestionType.JUMBLE, text: "okay / It's", correctAnswer: "It's okay" },
                    { id: 'm4e4q4', type: QuestionType.JUMBLE, text: "late / for / sorry / being / I'm", correctAnswer: "I'm sorry for being late" },
                    { id: 'm4e4q5', type: QuestionType.JUMBLE, text: "problem / No", correctAnswer: "No problem" },
                    { id: 'm4e4q6', type: QuestionType.JUMBLE, text: "apologize / I / sincerely", correctAnswer: "I sincerely apologize" },
                    { id: 'm4e4q7', type: QuestionType.JUMBLE, text: "my / It's / fault", correctAnswer: "It's my fault" },
                    { id: 'w4e4q8', type: QuestionType.JUMBLE, text: "please / me / Forgive", correctAnswer: "Please forgive me" },
                    { id: 'm4e4q9', type: QuestionType.JUMBLE, text: "next / careful / be / time", correctAnswer: "Be careful next time" },
                    { id: 'm4e4q10', type: QuestionType.JUMBLE, text: "I / did / mean / not / it", correctAnswer: "I did not mean it" },
                ]
            }
        ],
        readingComprehension: {
            title: "A Day at School",
            text: "It is Monday morning. Galang meets Monita at school. \"Good morning, Monita. How are you?\" says Galang. \"Good morning, Galang. I'm fine, thank you,\" replies Monita. <br/><br/> Later, Andre comes. \"Hi, Galang. Hi, Monita,\" says Andre. Galang says, \"Hello, Andre. This is Monita. She is my friend.\" Andre says, \"Nice to meet you, Monita.\" <br/><br/> Suddenly, Andre steps on Monita's foot. \"Ouch!\" says Monita. \"Oh, I am very sorry, Monita,\" says Andre. \"That's all right, Andre. No problem,\" says Monita. The school bell rings. \"It's time for class. See you later!\" says Galang. \"Goodbye!\" say Andre and Monita.",
            questions: [
                { id: 'm4rcq1', type: QuestionType.MCQ, text: "When does Galang meet Monita?", options: ["(A) Monday morning", "(B) Monday afternoon", "(C) Tuesday morning", "(D) At night"], correctAnswer: "(A) Monday morning" },
                { id: 'm4rcq2', type: QuestionType.MCQ, text: "Who introduces Monita to Andre?", options: ["(A) Monita", "(B) Andre", "(C) Galang", "(D) Pak Edo"], correctAnswer: "(C) Galang" },
                { id: 'm4rcq3', type: QuestionType.MCQ, text: 'Why does Andre say "I am very sorry"?', options: ["(A) He is late", "(B) He steps on Monita's foot", "(C) He drops a book", "(D) He meets Galang"], correctAnswer: "(B) He steps on Monita's foot" },
                { id: 'm4rcq4', type: QuestionType.MCQ, text: 'What does Monita say after Andre apologizes?', options: ["(A) Thank you", "(B) Ouch!", "(C) That's all right", "(D) Nice to meet you"], correctAnswer: "(C) That's all right" },
                { id: 'm4rcq5', type: QuestionType.MCQ, text: 'Why do they say "Goodbye!" at the end?', options: ["(A) Because they are happy", "(B) Because they just met", "(C) Because the school bell rings for class", "(D) Because they are going home"], correctAnswer: "(C) Because the school bell rings for class" },
            ]
        }
    },
];