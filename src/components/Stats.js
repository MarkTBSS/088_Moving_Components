export function Stats({ items }) {
    if (items.length === 0) {
        return <footer className="stats">🌴 Your list is empty. Add some items! 🌴</footer>;
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "🎒 All packed and ready to go!" : `
                🎒 You have ${numItems} items in your list, and you already packed ${numPacked} (${percentage}%).`}
            </em>
        </footer>
    );
}
