import { useGetProductByIdQuery } from "@app/services";
import Button from "@components/Button";
import { FiArrowLeft, FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary1"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500">Error loading product: {error.message}</p>
        <Link to="/vendor/products" className="text-primary1 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Product not found</p>
        <Link to="/vendor/products" className="text-primary1 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Link
            to="/vendor/products"
            className="text-gray-600 hover:text-gray-900"
          >
            <FiArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-semibold text-primary1">
            Product Details
          </h1>
        </div>
        <Link to={`/vendor/products/${id}/edit`}>
          <Button
            text="Edit Product"
            variant="primary"
            icon={<FiEdit className="w-4 h-4" />}
          />
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Product Images */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <img
            src={product.image || "/src/assets/images/image 57.png"}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="p-6">
          {/* Basic Information */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                {product.category}
              </span>
              <span
                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  product.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.status}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Product Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Product Information
              </h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Price</dt>
                  <dd className="text-sm text-gray-900 font-semibold">
                    ${product.price}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Stock</dt>
                  <dd className="text-sm text-gray-900">
                    {product.stock} units
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">SKU</dt>
                  <dd className="text-sm text-gray-900">
                    {product.sku || "N/A"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Weight</dt>
                  <dd className="text-sm text-gray-900">
                    {product.weight || "N/A"}
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Additional Details
              </h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Created</dt>
                  <dd className="text-sm text-gray-900">
                    {product.createdAt
                      ? new Date(product.createdAt).toLocaleDateString()
                      : "N/A"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">
                    Last Updated
                  </dt>
                  <dd className="text-sm text-gray-900">
                    {product.updatedAt
                      ? new Date(product.updatedAt).toLocaleDateString()
                      : "N/A"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Vendor</dt>
                  <dd className="text-sm text-gray-900">
                    {product.vendor || "N/A"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Brand</dt>
                  <dd className="text-sm text-gray-900">
                    {product.brand || "N/A"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Specifications */}
          {product.specifications && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm font-medium text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </dt>
                        <dd className="text-sm text-gray-900">{value}</dd>
                      </div>
                    )
                  )}
                </dl>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <Link
              to="/vendor/products"
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Back to Products
            </Link>
            <Link to={`/vendor/products/${id}/edit`}>
              <Button
                text="Edit Product"
                variant="primary"
                icon={<FiEdit className="w-4 h-4" />}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
