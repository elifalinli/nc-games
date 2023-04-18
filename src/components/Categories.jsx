import { useEffect, useState } from "react";
import { fetchCategories } from "../utils/api";
import { Link } from "react-router-dom";

export const Categories = ({ setCategories, categories }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCategories().then((categories) => {
      console.log(categories)
      setCategories(categories);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <nav>
      <ul className="categories-list">
        {categories.map((category) => {
          return (
            <li key={category.slug}>
              <Link to={`reviews/${category.slug}`}>{category.slug} </Link>
            </li>
          );
        })}
      </ul>
    </nav> 
  );
};
