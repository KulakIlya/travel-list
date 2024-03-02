export default function Item({ item, onDeleteItem, onHandleToggleItem }) {
  const { quantity, description, packed, id } = item;
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => onHandleToggleItem(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>{' '}
      <button type="button" onClick={() => onDeleteItem(id)}>
        ❌
      </button>
    </li>
  );
}
