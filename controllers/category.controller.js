import Category from '../models/category.model.js';

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndUpdate(id, req.body);

        if (!category) {
            res.status(404).json({ message: "Category not found" });
        }

        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            res.status(404).json({ message: "Category not found" });
        }

        res.status(200).json( { message: "Category deleted successfully" } );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}