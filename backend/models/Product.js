const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discountPrice: {
        type: Number,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    sku: {
        type: String,
        unique: true,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    sizes: {
        type: [String],
        required: true,
    },
    colors: {
        type: [String],
        required: true,
    },
    collections: {
        type: String,
        required: true,
    },
    material: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Men", "Women", "Unisex"]
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            },
            altText: {
                type: String,
            },
        },
    ],
    isFeatured: {
        type: Boolean,
        default: false
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    tags: [String],
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true,
    },
    metaTitle: {
        type: String,
    },
    metaDescription: {
        type: String,
    },
    metaKeywords: {
        type: String,
    },
    dimensions: {
        length: Number,
        width: Number,
        height: Number,
    },
    weight: Number,
},
{timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);













// {
//     "name": "Classic Deni Jacket"
//     "description": "A timeless denim jacket perfect for any season. Comfortable fit and durable material ",
//     "price": 59.99,
//     "discountPrice": 49.99,
//     "countInStock": 200,
//     "category":"Apparel",
//     "brand": "UrbanWear",
//     "sizes":["XS", "S", "M", "L", "XL"],
//     "colors": ["Blue", "Black"],
//     "collections":"Spring Collection",
//     "material":"Denim",
//     "gender":"Unisex",
//     "images":[{
//         "url": "https://picsum.photos/seed/denim1/500/500",
//         "altText": "Front view of the denim jacket"
//         },
//         {
//         "url": "https://picsum.photos/seed/denim2/500/500",
//         "altText": "Back view of the denim jacket"
//         },
// ],
//     "isFeatured": true,
//     "isPublished": true,
//     "tags":["denim", "jacket", "casual", "spring"],
//     "dimensions": {
//         "length": 12,
//         "width": 8,
//         "height": 1
//     },
//     "weight": 1.5,
//     "sku": "CLTH12345",
// }