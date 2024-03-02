export default function Stats({ items }) {
  const itemsNumber = items.length;

  if (!itemsNumber)
    return (
      <p className="stats">
        <em>Start adding some ideas to your packing list 🚀</em>
      </p>
    );

  const packedItemsNumber = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemsNumber * 100) / itemsNumber);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼 You have ${itemsNumber} item in your list, and you already packed ${packedItemsNumber}(${percentage})%`
          : 'You got everything! Ready to go ✈️'}
      </em>
    </footer>
  );
}
