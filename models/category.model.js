import mongo from 'mongoose';

const CategorySchema = mongo.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Category = mongo.model("Category", CategorySchema)

export default Category;