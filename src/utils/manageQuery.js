export function manageQuery(query) {
  return query.trim().split(' ').join('%20');
}
