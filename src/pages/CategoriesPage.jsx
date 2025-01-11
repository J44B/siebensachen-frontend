import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Category, SubCategory } from '../components/indexComponents.js';

function CategoriesPage() {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/categories`,
                );
                setCategories(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error('Error fetching item data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, [id]);

    useEffect(() => {
        async function fetchSubCategories() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/subcategories`,
                );
                setSubCategories(response.data);

                setLoading(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setError(true);
                } else {
                    console.error('Error fetching item data:', error);
                }
            } finally {
                setLoading(false);
            }
        }
        fetchSubCategories();
    }, [id]);

    if (loading) return <p>ItemsPage says: Loading...</p>;
    if (error) return <p>ItemsPage says: Error loading item.</p>;
    if (!categories) return <p>ItemsPage says: Could not fetch items.</p>;
    if (!subCategories) return <p>ItemsPage says: Could not fetch items.</p>;

    return (
        <>
            <div id="heading">
                <h1 className="text-center text-2xl font-bold text-[#3C3D37] sm:text-3xl">
                    Categories and sub-categories
                </h1>
            </div>
            <span className="mt-4 mb-2 flex items-center">
                <span className="pr-2">Categories</span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#173B45] via-gray-500 to-transparent opacity-75"></span>
            </span>

            <div id="categories-list" className="space-y-2">
                {categories.length > 0 ? (
                    categories.map((category) => (
                        <Category key={category.id} category={category} />
                    ))
                ) : (
                    <p>No categories found.</p>
                )}
            </div>
            <span className="mt-4 mb-2 flex items-center">
                <span className="pr-2">Sub-categories</span>
                <span className="h-px flex-1 bg-transparent bg-gradient-to-r from-[#173B45] via-gray-500 to-transparent opacity-75"></span>
            </span>
            <div id="subcategories-list" className="space-y-2">
                {subCategories.length > 0 ? (
                    subCategories.map((subCategory) => (
                        <SubCategory
                            key={subCategory.id}
                            subCategory={subCategory}
                        />
                    ))
                ) : (
                    <p>No categories found.</p>
                )}
            </div>
        </>
    );
}

export default CategoriesPage;
