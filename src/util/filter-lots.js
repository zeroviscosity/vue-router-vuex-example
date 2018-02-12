export default function (lots, query) {
  const address = query.address ?
    query.address.toLowerCase() : '';
  const category = query.category ?
    query.category.toLowerCase() : '';
  const maxRate = query.maxRate ?
    parseFloat(query.maxRate) : Infinity;

  return lots.filter(lot => (
    lot.address.toLowerCase().includes(address) &&
    lot.carpark_type.includes(category) &&
    lot.rate_half_hour <= maxRate &&
    lot.rate_half_hour
  ));
}
