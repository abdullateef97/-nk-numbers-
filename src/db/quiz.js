const db = {
    Level1 : {
        unlocked: true,
        arithmetic : [
            {
                exp: 'ọ̀kan + méjì',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 2
            },{
                exp: 'ọ̀kan + mẹ́ta',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 3
            },{
                exp: 'mẹ́rin - mẹ́ta',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 0
            },{
                exp: 'márùn - ọ̀kan',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 3
            },{
                exp: 'méjì * méjì',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 3
            }
        ]
    },
    Level2 : {
        unlocked: false,
        arithmetic : [
            {
                exp: 'mẹ̀fà + méjì',
                options: [
                    'ọ̀kan', 'mèje', 'mẹ́ta', 'mẹ́jọ', 'mẹ́sàn'
                ],
                correctIndex: 3
            },{
                exp: 'mẹ̀fà + mẹ́ta',
                options: [
                    'ọ̀kan', 'mèje', 'mẹ́ta', 'mẹ́jọ', 'mẹ́sàn'
                ],
                correctIndex: 4
            },{
                exp: 'mẹ́sàn - mẹ̀fà',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 2
            },{
                exp: 'mẹ́wàá - mẹ́sàn',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 0
            },{
                exp: 'mẹ́rin * méjì',
                options: [
                    'mẹ̀fà', 'mèje', 'mẹ́jọ', 'mẹ́sàn', 'mẹ́wàá'
                ],
                correctIndex: 2
            },{
                exp: 'mẹ́jọ / méjì',
                options: [
                    'ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 3
            }
        ]
    },
    Level3 : {
        unlocked: false,
        arithmetic : [
            {
                exp: 'mókànlá + méjì',
                options: [
                    'ọ̀kan', 'mèje', 'mẹ́talá', 'mẹ́rìnlá', 'mẹ́ẹ́dógún'
                ],
                correctIndex: 2
            },{
                exp: 'mẹ́rìnlá + mẹ́ta',
                options: [
                    'métàdílógún', 'mókandínlogún', 'ogún', 'mẹ́rindínlogún', 'mókànlá'
                ],
                correctIndex: 0
            },{
                exp: 'ogún - métàdílógún',
                options: [
                    'mẹ̀fà', 'mèje', 'mẹ́ta', 'mẹ́rin', 'márùn'
                ],
                correctIndex: 1
            },{
                exp: 'mẹ́wàá * méjì',
                options: [
                    'métàdílógún', 'mókandínlogún', 'ogún', 'mẹ́rindínlogún', 'mókànlá'                
                ],
                    correctIndex: 2
            },{
                exp: 'mẹ́rin * mẹ́ta',
                options: [
                    'métàdílógún', 'mókandínlogún', 'ogún', 'mẹ́rindínlogún', 'méjìlá'],
                correctIndex: 4
            },{
                exp: 'meéjìdílógún / méjì',
                options: [
                    'mẹ̀fà', 'mèje', 'mẹ́jọ', 'mẹ́sàn', 'mẹ́wàá'
                ],
                correctIndex: 3
            }
        ]
    }
}