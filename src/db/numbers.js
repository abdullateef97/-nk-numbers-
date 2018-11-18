const DB = [
     {
        level :1,
        unlocked : true,
        numbers: [
        {
            number : 1,
            yoruba : 'ọ̀kan',
            explanation: 1,
            alaye : 'ọ̀kan'
        },{
            number :2,
            yoruba: 'méjì',
            explanation: 2,
            alaye: 'mejì'
        },{
            number:3,
            yoruba: 'mẹ́ta',
            explanation: 3,
            alaye: 'mẹ́ta'
        },{
            number: 4,
            yoruba: 'mẹ́rin',
            explanation: 4,
            alaye: 'ḿẹrin'
        },{
            number: 5,
            yoruba: 'márùn',
            explanation: '5',
            alaye: 'márùn'
        }
    ]},
     {
         level: 2,
        unlocked: false,
        numbers : [
            {
                number: 6,
                yoruba: 'mẹ̀fà',
                explanation: '6',
                alaye: 'mẹ̀fà'
            },{
                number: 7,
                yoruba: 'mèje',
                explanation: '7',
                alaye: 'mèje'
            },{
                number: 8,
                yoruba: 'mẹ́jọ',
                explanation: '8',
                alaye: 'mẹ́jọ'
            },{
                number: 9,
                yoruba: 'mẹ́sàn',
                explanation: '9',
                alaye: 'mẹ́sàn'
            },{
                number: 10,
                yoruba: 'mẹ́wàá',
                explanation: '10',
                alaye: 'mẹ́wàá'
            }
        ]
    },
     {
         level: 3,
        unlocked: false,
        numbers: [
            {
                number: 11,
                yoruba: 'mókànlá',
                explanation: '10 + 1',
                alaye: 'mókànlá'
            },{
                number: 12,
                yoruba: 'méjìlá',
                explanation: '10 + 2',
                alaye: 'méjìlá'
            },{
                number: 13,
                yoruba: 'mẹ́talá',
                explanation: '10 + 3',
                alaye: 'mẹ́talá'
            },{
                number: 14,
                yoruba: 'mẹ́rìnlá',
                explanation: '10 + 4',
                alaye: 'mẹ́rìnlá'
            },{
                number: 15,
                yoruba: 'mẹ́ẹ́dógún',
                explanation: '20 - 5',
                alaye: 'ogún - márùn'
            },{
                number: 16,
                yoruba: 'mẹ́rindínlogún',
                explanation: '20 - 4',
                alaye: 'ogún - mẹ́rin',
                ekun: 'ogún dín ni mẹ́rin'
            },{
                number: 17,
                yoruba: 'métàdílógún',
                explanation: '20 - 3',
                alaye: 'ogún - métà',
                ekun: 'ogún dín ni métà'
            },{
                number: 18,
                yoruba: 'meéjìdílógún',
                explanation: '20 - 2',
                alaye: 'ogún - méjì',
                ekun: 'ogún dín ni méjì'
            },{
                number: 19,
                yoruba: 'mókandínlogún',
                explanation: '20 - 1',
                alaye: 'ogún - oókàn',
                ekun: 'ogún dín ni oókàn'
            },{
                number: 20,
                yoruba: 'ogún',
                explanation: '20',
                alaye: 'ogún'
            }
        ]
    },
    {
        level: 4,
        unlocked: false, //21 23 25 27 29 30 32 34 36 38 40
        numbers: [
            {
                number: 21,
                yoruba: 'mókanlélogún',
                explanation: '20 + 1',
                alaye: 'ogún + oókàn',
                ekun: 'ogún lé ni oókàn'
            },{
                number: 23,
                yoruba: 'mẹ́talélogún',
                explanation: '20 +3',
                alaye: 'ogún + mẹ́ta',
                ekun: 'ogún lé ni mẹ́ta'
            },{
                number: 25,
                yoruba: 'mẹ́ẹ́dọ́gbọ̀n',
                explanation: '30 - 5',
                alaye: 'ọ́gbọ̀n - márùn',
                ekun: 'ọ́gbọ̀n dín ni márùn'
            },{
                number: 27,
                yoruba: 'mẹ́tadínlọgbọ̀n',
                explanation: '30 - 3',
                alaye: 'ọ́gbọ̀n - mẹ́ta',
                ekun: 'ọ́gbọ̀n dín ni mẹ́ta'
            },{
                number: 29,
                yoruba: 'mókandínlọgbọ̀n',
                explanation: '30 - 1',
                alaye: 'ọ́gbọ̀n - ókan',
                ekun: 'ọ́gbọ̀n dín ni ókan'
            },{
                number: 30,
                yoruba: 'ọgbọ̀n',
                explanation: '30',
                alaye: 'ọ́gbọ̀n',
                ekun: 'ọ́gbọ̀n'
            },{
                number: 32,
                yoruba: 'méjìlélọgbọ̀n',
                explanation: '30 + 2',
                alaye: 'ọ́gbọ̀n + méjì',
                ekun: 'ọ́gbọ̀n lé ni méjì'
            },{
                number: 34,
                yoruba: 'mẹ́rinlélọgbọ̀n',
                explanation: '30 + 2',
                alaye: 'ọ́gbọ̀n + méjì',
                ekun: 'ọ́gbọ̀n lé ni méjì'
            },{
                number: 36,
                yoruba: 'mẹ́rindínlogójì',
                explanation: '40 - 4',
                alaye: 'ogójì - mẹ́rin',
                ekun: 'ogójì dín ni mẹ́rin'
            },{
                number: 38,
                yoruba: 'méjìdínlogójì',
                explanation: '40 - 2',
                alaye: 'ogójì - méjì',
                ekun: 'ogójì dín ni méjì'
            },{
                number: 40,
                yoruba: 'ogójì',
                explanation: '40',
                alaye: 'ogójì (ogún * méjì)',
                ekun: 'ogún méjì'
            },

        ]},
         {
             level: 5,
            unlocked: false, //41 45  46 50 54 55 58 60 63 65 67 70 75 80 85 90 95 100
            numbers: [
                {
                    number: 41,
                    yoruba: 'mókanlélogójì',
                    explanation: '40 + 1',
                    alaye: 'ogójì + ókan',
                    ekun: 'ogún méjì lé ni ókan'
                }, {
                    number: 45,
                    yoruba: 'márùn-úndínlààdọ́ta',
                    explanation: '50 - 5',
                    alaye: 'ààdọ́ta - márùn',
                    ekun: 'ààdọ́ta dín ni márùn'
                },{
                    number: 46,
                    yoruba: 'mẹ́rindínlààdọ́ta',
                    explanation: '50 - 4',
                    alaye: 'ààdọ́ta - mẹ́rin',
                    ekun: 'ààdọ́ta dín ni mẹ́rin'
                },{
                    number: 50,
                    yoruba: 'ààdọ́ta',
                    explanation: '50 (20 * 3 - 10)',
                    alaye: 'ààdọ́ta (ọgọ́ta - mẹ́wàá )',
                    ekun: 'ogún mẹ̀ta dín ni mẹ́wàá'
                }, {
                    number: 54,
                    yoruba: 'mẹ́rinlélààdọ́ta',
                    explanation: '50 + 4',
                    alaye: 'ààdọ́ta + mẹ́rin',
                    ekun: 'ogún mẹ̀ta lé ni ókan'
                }, {
                    number: 55,
                    yoruba: 'márùn-úndínlọgọ́ta',
                    explanation: '60 - 5',
                    alaye: 'ọgọ́ta - márùn',
                    ekun: 'ogún mẹ̀ta dín ni márùn'
                }, {
                    number: 58,
                    yoruba: 'méjìdínlọgọ́ta',
                    explanation: '60 - 2',
                    alaye: 'ọgọ́ta - méjì',
                    ekun: 'ogún mẹ̀ta dín ni méjì'
                }, {
                    number: 60,
                    yoruba: 'ọgọ́ta',
                    explanation: '60 (20 * 3 - 10)',
                    alaye: 'ọgọ́ta',
                    ekun: 'ogún mẹ̀ta'
                }, {
                    number: 63,
                    yoruba: 'mẹ́talélọgọ́ta',
                    explanation: '50 + 4',
                    alaye: 'ààdọ́ta + mẹ́rin',
                    ekun: 'ogójì lé ni ókan'
                }, {
                    number: 65,
                    yoruba: 'márùn-úndínlààdọ́rin',
                    explanation: '70 - 5',
                    alaye: 'ààdọ́rin - márùn',
                    ekun: 'ààdọ́rin dín ni márùn'
                }, {
                    number: 68,
                    yoruba: 'méjìdínlààdọ́rin',
                    explanation: '70 - 2',
                    alaye: 'ààdọ́rin - méjì',
                    ekun: 'ààdọ́rin dín ni méjì'
                }, {
                    number: 70,
                    yoruba: 'ààdọ́rin',
                    explanation: '70 (20 * 4 - 10)',
                    alaye: 'ààdọ́rin (ọgọ́rin - mẹ́wàá )',
                    ekun: 'ogún mẹ̀rin dín ni mẹ́wàá'
                }, {
                    number: 75,
                    yoruba: 'márùn-úndínlọgọ́rin',
                    explanation: '80 - 5',
                    alaye: 'ọgọ́rin - márùn',
                    ekun: 'ọgọ́rin dín ni márùn'
                }, {
                    number: 80,
                    yoruba: 'ọgọ́rin',
                    explanation: '80 (20 * 4)',
                    alaye: 'ọgọ́rin',
                    ekun: 'ogún mẹ̀rin'
                }, {
                    number: 85,
                    yoruba: 'márùn-úndínlààdọ́rún',
                    explanation: '90 - 5',
                    alaye: 'ààdọ́rún - márùn ',
                    ekun: 'ààdọ́rún dín ni márùn'
                }, {
                    number: 90,
                    yoruba: 'ààdọ́rún',
                    explanation: '90 (20 * 5 - 10)',
                    alaye: 'ààdọ́rún (ọgọ́rún - mẹ́wàá )',
                    ekun: 'ogún márùn dín ni mẹ́wàá'
                }, {
                    number: 95,
                    yoruba: 'márùn-úndínlọgọ́rún',
                    explanation: '100 - 5',
                    alaye: 'ọgọ́rún - márùn',
                    ekun: 'ọgọ́rún dín ni márùn'
                }, {
                    number: 100,
                    yoruba: 'ọgọ́rún',
                    explanation: '100 (20 * 5)',
                    alaye: 'ọgọ́rún',
                    ekun: 'ogún márùn'
                }, 
            ]},
            {
            level: 6,
            unlocked :false, //105 110 115 120 125 130 135 140 145 150
            numbers: [
                {
                    number: 105,
                    yoruba: 'márùn-úndínlààdọ́fà',
                    explanation: '110 - 5',
                    alaye: 'ààdọ́fà - márùn (20 * 6 - 10 - 5 ) ',
                    ekun: 'ààdọ́fà dín ni márùn'
                }, {
                    number: 110,
                    yoruba: 'ààdọ́fà',
                    explanation: '110 (20 * 6 - 10)',
                    alaye: 'ààdọ́fà (ọgọ́fà - mẹ́wàá )',
                    ekun: 'ogún mefà dín ni mẹ́wàá'
                }, {
                    number: 115,
                    yoruba: 'márùn-úndínlọgọ́fà',
                    explanation: '120 - 5',
                    alaye: 'ọgọ́fà - márùn',
                    ekun: 'ọgọ́fà dín ni márùn'
                }, {
                    number: 120,
                    yoruba: 'ọgọ́fà',
                    explanation: '120 (20 * 6)',
                    alaye: 'ọgọ́fà',
                    ekun: 'ogún mẹ̀fà'
                }, {
                    number: 125,
                    yoruba: 'márùn-úndínlààdóje',
                    explanation: '130 - 5',
                    alaye: 'ààdóje - márùn (20 * 7 - 10 - 5 ) ',
                    ekun: 'ààdọ́fà dín ni márùn'
                }, {
                    number: 130,
                    yoruba: 'ààdóje',
                    explanation: '130 (20 * 7 - 10)',
                    alaye: 'ààdóje (ọgọ́je - mẹ́wàá )',
                    ekun: 'ogún meje dín ni mẹ́wàá'
                }, {
                    number: 135,
                    yoruba: 'márùn-úndínlogóje',
                    explanation: '140 - 5',
                    alaye: 'ọgọ́je - márùn',
                    ekun: 'ọgọ́je dín ni márùn'
                }, {
                    number: 140,
                    yoruba: 'ọgọ́je',
                    explanation: '140 (20 * 7)',
                    alaye: 'ọgọ́je',
                    ekun: 'ogún mèje'
                }, {
                    number: 145,
                    yoruba: 'márùn-úndínlààdọ́jọ',
                    explanation: '150 - 5',
                    alaye: 'ààdọ́jọ - márùn (20 * 8 - 10 - 5 ) ',
                    ekun: 'ààdọ́jọ dín ni márùn'
                }, {
                    number: 150,
                    yoruba: 'ààdọ́jọ',
                    explanation: '150 (20 * 8 - 10)',
                    alaye: 'ààdọ́jọ (ọgọ́jọ - mẹ́wàá )',
                    ekun: 'ogún mejọ dín ni mẹ́wàá'
                }
            ]
        },
         {
            level: 7,
            unlocked: false, // 160 170 180 190 200
            numbers: [
                {
                    number: 160,
                    yoruba: 'ọgọ́jọ',
                    explanation: '160 (20 * 8 )',
                    alaye: 'ọgọ́jọ',
                    ekun: 'ogún mejọ'
                } ,{
                    number: 170,
                    yoruba: 'ààdọ́sán',
                    explanation: '170 (20 * 9 - 10 )',
                    alaye: 'ààdọ́sán ( ọgọ́sán - mẹ́wàá )',
                    ekun: 'ogún mesán'
                }, {
                    number: 180,
                    yoruba: 'ọgọ́sán',
                    explanation: '180 (20 * 9 )',
                    alaye: 'ọgọ́sán',
                    ekun: 'ogún mesán'
                } ,{
                    number: 190,
                    yoruba: 'ààdọ́wá',
                    explanation: '190 (20 * 10 - 10 )',
                    alaye: 'ààdọ́wá ( ọgọ́wá - mẹ́wàá )',
                    ekun: 'ogún mewá'
                }, {
                    number: 200,
                    yoruba: 'igba',
                    explanation: '200',
                    alaye: 'igba',
                }
            ]
        }
    ]