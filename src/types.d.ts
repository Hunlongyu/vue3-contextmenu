export type OptionsType = {
  x?: number | string
  y?: number | string
  id?: number | string
  zIndex?: number
  disabled?: boolean
  appendToBody?: boolean
  customClass?: string
  list: ContextmenuListType[]
}

export type ContextmenuListType = {
  icon?: string
  label: string
  divider?: boolean
  disabled?: boolean
  children?: ContextmenuListType[]
}
