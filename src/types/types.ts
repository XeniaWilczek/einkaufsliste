//Modell für ein Produkt
export interface Product {
  id: number;
  name: string;
  amount: number;
  checked: boolean;
}

// Props für die Liste
export interface ProductListProps {
  products: Product[];
  onClickProduct: (id: number) => void;
  onCheck: (id: number) => void;
}

// Props für die einzelne Karte
export interface ProductCardProps {
  id: number;
  name: string;
  amount: number;
  checked: boolean;
  onDelete: () => void;
  onCheck: () => void;
}
