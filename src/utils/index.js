export function formatMoney(amount, prefix) {
  return `${prefix} ${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
