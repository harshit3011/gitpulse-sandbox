export function toCSV(rows) {
  return rows.map((r) => r.join(",")).join("
")
}
