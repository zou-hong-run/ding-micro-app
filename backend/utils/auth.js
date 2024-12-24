
export const signToken = () => {
  // token签名操作
  return "1234"
}

export const checkToken = (token) => {
  // token校验操作操作
  const check = (token) => {
    // xxxxx操作
    return token === '1234'
  }
  return check(token)
}