import type { ProductListProps } from "@/types/types";
import { ProductCard } from "./ProductCard";

export function ProductList({
  products,
  onClickProduct,
  onCheck,
}: ProductListProps) {
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
            onCheck={() => onCheck(product.id)}
            checked={product.checked}
          />
        ))
      )}
    </div>
  );
}
