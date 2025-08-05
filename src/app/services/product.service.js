import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { delay, mockCategories, mockProducts, simulateError } from "./mockData";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `base/products`,
    prepareHeaders: (headers, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (token) {
        headers.set("Authorization", "Bearer " + token);
      }
    },
  }),
  tagTypes: ["Product", "Category"],
  endpoints: (builder) => ({
    // Product CRUD operations
    getProducts: builder.query({
      queryFn: async (params) => {
        await delay(500);
        simulateError();
        return { data: mockProducts };
      },
      providesTags: ["Product"],
    }),

    getProductById: builder.query({
      queryFn: async (id) => {
        await delay(300);
        simulateError();
        const product = mockProducts.find((p) => p.id === id);
        if (!product) {
          throw new Error("Product not found");
        }
        return { data: product };
      },
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    createProduct: builder.mutation({
      queryFn: async (product) => {
        await delay(800);
        simulateError();
        const newProduct = {
          ...product,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        mockProducts.push(newProduct);
        return { data: newProduct };
      },
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      queryFn: async ({ id, ...product }) => {
        await delay(600);
        simulateError();
        const index = mockProducts.findIndex((p) => p.id === id);
        if (index === -1) {
          throw new Error("Product not found");
        }
        const updatedProduct = {
          ...mockProducts[index],
          ...product,
          id,
          updatedAt: new Date().toISOString(),
        };
        mockProducts[index] = updatedProduct;
        return { data: updatedProduct };
      },
      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id },
        "Product",
      ],
    }),

    deleteProduct: builder.mutation({
      queryFn: async (id) => {
        await delay(400);
        simulateError();
        const index = mockProducts.findIndex((p) => p.id === id);
        if (index === -1) {
          throw new Error("Product not found");
        }
        mockProducts.splice(index, 1);
        return { data: { id } };
      },
      invalidatesTags: ["Product"],
    }),

    // Category CRUD operations
    getCategories: builder.query({
      queryFn: async () => {
        await delay(400);
        simulateError();
        return { data: mockCategories };
      },
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation({
      queryFn: async (category) => {
        await delay(600);
        simulateError();
        const newCategory = {
          ...category,
          id: Date.now().toString(),
          productCount: 0,
          createdAt: new Date().toISOString(),
        };
        mockCategories.push(newCategory);
        return { data: newCategory };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation({
      queryFn: async ({ id, ...category }) => {
        await delay(500);
        simulateError();
        const index = mockCategories.findIndex((c) => c.id === id);
        if (index === -1) {
          throw new Error("Category not found");
        }
        const updatedCategory = {
          ...mockCategories[index],
          ...category,
          id,
        };
        mockCategories[index] = updatedCategory;
        return { data: updatedCategory };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation({
      queryFn: async (id) => {
        await delay(300);
        simulateError();
        const index = mockCategories.findIndex((c) => c.id === id);
        if (index === -1) {
          throw new Error("Category not found");
        }
        mockCategories.splice(index, 1);
        return { data: { id } };
      },
      invalidatesTags: ["Category"],
    }),

    // Vendor specific operations
    getVendorProducts: builder.query({
      queryFn: async (vendorId) => {
        await delay(600);
        simulateError();
        // For now, return all products as vendor products
        return { data: mockProducts };
      },
      providesTags: ["Product"],
    }),

    getProductsByCategory: builder.query({
      queryFn: async (categoryId) => {
        await delay(400);
        simulateError();
        const filteredProducts = mockProducts.filter(
          (p) => p.categoryId === categoryId
        );
        return { data: filteredProducts };
      },
      providesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetVendorProductsQuery,
  useGetProductsByCategoryQuery,
} = productApi;
