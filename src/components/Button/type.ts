export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'


export type ButtonProps = {
    type?: ButtonType
    size?: ButtonSize
    plain?: boolean
    round?: boolean
    circle?: boolean
    disabled?: boolean
    nativeType?: NativeType
    autofocus?: boolean
}

export type ButtonInstance = {
    ref: HTMLButtonElement
}
