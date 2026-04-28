import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  amount: number;
}

interface ProductListProps {
  products: Product[];
  onClickProduct: (id: number) => void;
}

export function ProductList({ products, onClickProduct }: ProductListProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      {products.length === 0 ? (
        <p className="mt-4 text-center text-sm text-gray-500">
          Die Liste ist leer.
        </p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            amount={product.amount}
            onDelete={() => onClickProduct(product.id)}
          />
        ))
      )}
    </div>
  );
}
