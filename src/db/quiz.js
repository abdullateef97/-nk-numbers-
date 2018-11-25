const db = [
    {
        level: 1,
        unlocked: false,
        arithmetic : [
            {
                exp: 'ọ̀kan + méjì',
                options: ['ọ̀kan', 'mẹ́rin', 'mẹ́ta', 'méjì'],
                correctOption: 2
            },{
                exp: 'ọ̀kan + mẹ́ta',
                options: ['ọ̀kan', 'méjì', 'márùn', 'mẹ́rin'],
                correctOption: 3
            },{
                exp: 'mẹ́rin - mẹ́ta',
                options: ['ọ̀kan', 'méjì', 'mẹ́ta', 'mẹ́rin'],
                correctOption: 0
            },{
                exp: 'márùn - ọ̀kan',
                options: ['mẹ́rin', 'méjì', 'ọ̀kan', 'mẹ́ta'],
                correctOption: 0
            },{
                exp: 'méjì * méjì',
                options: ['márùn', 'méjì', 'mẹ́rin', 'mẹ́ta'],
                correctOption: 2
            }
        ]
    },
    {
        level: 2,
        unlocked: false,
        arithmetic : [
            {
                exp: 'mẹ̀fà + méjì',
                options: ['mèje', 'mẹ́sàn', 'márùn', 'mẹ́jọ'],
                correctOption: 3
            },{
                exp: 'mẹ̀fà + mẹ́ta',
                options: ['mèje', 'mẹ́sàn', 'mẹ́wàá', 'mẹ́jọ'],
                correctOption: 0
            },{
                exp: 'mẹ́sàn - mẹ̀fà',
                options: ['mèje', 'mẹ́ta', 'méjì', 'ọ̀kan'],
                correctOption: 1
            },{
                exp: 'mẹ́wàá - mẹ́sàn',
                options: ['mẹ́rin', 'ọ̀kan', 'méjì', 'mẹ́ta'],
                correctOption: 1
            },{
                exp: 'mẹ́rin * méjì',
                options: ['mẹ́sàn', 'mẹ́wàá', 'mẹ̀fà', 'mẹ́jọ'],
                correctOption: 3
            },{
                exp: 'mẹ́rin * ọ̀kan',
                options: ['méjì', 'mẹ́rin', 'mẹ̀fà', 'mẹ́jọ'],
                correctOption: 2
            },{
                exp: 'mẹ́jọ / méjì',
                options: ['méjì', 'mẹ́rin', 'mẹ̀fà', 'mẹ́jọ'],
                correctOption: 1
            }
        ]
    },
     {
        level: 3,
        unlocked: false,
        arithmetic : [
            {
                exp: 'mókànlá + méjì',
                options: ['mẹ́talá', 'mẹ́rìnlá', 'mẹ́ẹ́dógún', 'mẹ́jọ'],
                correctOption: 0
            },{
                exp: 'mẹ́rìnlá + mẹ́ta',
                options: ['mókandínlogún', 'mẹ́rindínlogún', 'mókànlá', 'métàdílógún'],
                correctOption: 3
            },{
                exp: 'ogún - métàdílógún',
                options: ['mẹ̀fà', 'márùn', 'mèje', 'mẹ́rin'],
                correctOption: 2
            },{
                exp: 'mẹ́wàá * méjì',
                options: ['mókandínlogún', 'ogún', 'mẹ́rindínlogún', 'mókànlá'],
                correctOption: 1
            },{
                exp: 'mẹ́rin * mẹ́ta',
                options: ['mẹ́talá', 'mẹ́ẹ́dógún', 'mẹ́rindínlogún', 'méjìlá'],
                correctOption: 3
            },{
                exp: 'meéjìdílógún / méjì',
                options: ['mẹ́sàn', 'mẹ́jọ', 'mèje', 'mẹ̀fà'],
                correctOption: 0
            }
        ]
    }
]