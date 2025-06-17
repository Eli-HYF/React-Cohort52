function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onSelectCategory(cat)}
          style={{
            background: selectedCategory === cat ? 'black' : 'white',
            color: selectedCategory === cat ? 'white' : 'black',
            border: '1px solid black',
            padding: '8px 12px',
          }}
        >
          {cat.replace('FAKE: ', '')}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;
