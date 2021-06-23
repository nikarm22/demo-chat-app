import { Dayjs } from "dayjs";

export interface IMessage {
    from: number | null,
    to: number | null,
    timestamp: Dayjs,
    message: string,
}
