import dayjs from "dayjs"

export const HourFormat = (date: Date, initialTime: string, amoutTime: string): [startTime: Date, endTime: Date] => {
    /**
     * Returns a array with the start and end time Date Format
     * @param date Date Format that is base day to calculate the time need to by yours and minute 00:00:000
     * @param initialTime Initial time to start the schedule format string "00:00"
     * @param amoutTime Amount of time to finish the schedule format string "00:00"
     * @returns Array with the start and end time Date Format
     */




    const [start_time, start_minutes] = initialTime.split(":")
    const [end_time, end_minutes] = amoutTime.split(":")
    const startTime = dayjs(date).add(Number(start_time), 'hours').add(Number(start_minutes), 'minutes').toDate();
    const endTime = dayjs(startTime).add(Number(end_time), 'hours').add(Number(end_minutes), 'minutes').toDate();
    return [startTime, endTime]
}

