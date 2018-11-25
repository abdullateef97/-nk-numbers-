import React from 'react';
import Realm from 'realm';

import { quizListSchema, arithSchema } from "./quizModel";
import {numberListSchema, numberSchema} from './numberModel'


export const dbOptions = {
    path: 'oonka.realm',
    schema: [quizListSchema, arithSchema, numberListSchema, numberSchema],
    schemaVersion: 0
}