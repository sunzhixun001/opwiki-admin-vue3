export const getQuery = (collection) => {
  const sql = []
  sql.push(`db.collection("${collection}")`)
  sql.push(`get()`)
  return sql.join('.')
}