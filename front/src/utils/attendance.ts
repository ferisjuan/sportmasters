import { getDateMedWeekDay } from './format-date'

type Attendance = Record<string, string>

export const parseAttendanceData = (attendances: Attendance[]): Attendance[] =>
    attendances.map(miss => ({
        attendanceDate: getDateMedWeekDay(miss?.attendanceDate || ''),
        reason: miss?.reason || '',
        sport: miss?.sport || '',
    }))
