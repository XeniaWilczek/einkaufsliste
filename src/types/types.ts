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
  onDelete: (id: number) => void;
  onCheck: (id: number) => void;
}

// Props für die einzelne Karte
export interface ProductCardProps {
  name: string;
  amount: number;
  checked: boolean;
  onDelete: () => void;
  onCheck: () => void;
}
