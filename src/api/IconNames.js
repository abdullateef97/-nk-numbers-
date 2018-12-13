import { Platform } from 'react-native'

export const LOCK = Platform.select({ios: 'ios-lock', android: 'md-lock'})
export const UNLOCKED = Platform.select({ios: 'ios-unlock', android: 'md-unlock'})
export const MENU = Platform.select({ios: 'ios-menu', android: 'md-menu'})