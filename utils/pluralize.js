export default (number, singularWord) => {
  const text = `${number} ${singularWord}`
  if (text === 1) return text
  return text + 's'
}