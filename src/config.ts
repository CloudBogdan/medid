export interface IConfig {
    checked_to_down: boolean
    alarm_on_delete: boolean
    delete_delay: number
}

export const default_config: IConfig = {
    checked_to_down: true,
    alarm_on_delete: true,
    delete_delay: 7
}