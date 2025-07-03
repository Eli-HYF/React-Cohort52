import styles from './CategoryList.module.css';

function CategoryList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className={styles.wrapper}>
      {categories.map((category, index) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={index}
            onClick={() => onSelectCategory(category)}
            className={`${styles.button} ${isSelected ? styles.buttonSelected : ''}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryList;
