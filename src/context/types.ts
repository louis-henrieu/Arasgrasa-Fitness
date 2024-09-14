export type ErrCallbackType = (err: { [key: string]: string }) => void

export type UserDataType = {
  id: number
  role: string
  email: string
  fullName: string
  username: string
  password: string
  avatar?: string | null
}