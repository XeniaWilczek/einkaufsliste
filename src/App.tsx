import { Button } from "@/components/ui/button";
import { Input } from "./components/ui/input";
import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductList";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  amount: number;
}

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [amountValue, setAmountValue] = useState(1);
  const [products, setProducts] = useState<Product[]>(() => {
    const localData = localStorage.getItem("products");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  function handleProductInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setInputValue(event.target.value);
  }

  function handleAmountInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    setAmountValue(Number(event.target.value));
  }

  function addProduct(): void {
    if (inputValue.trim() === "") return;

    const isDuplicate = products.some(
      (product) =>
        product.name.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (isDuplicate) {
      toast.error(`${inputValue.trim()} ist schon in der Liste!`, {
        position: "top-center",
        duration: 2000,
        style: {
          backgroundColor: "#be123c",
          color: "white",
          border: "none",
          fontSize: "1.2rem",
        },
      });
      return;
    }

    setProducts([
      ...products,
      { id: Date.now(), name: inputValue.trim(), amount: amountValue },
    ]);
    setInputValue("");
    setAmountValue(1);
  }

  function deleteProduct(id: number) {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);

    toast.info("Das Produkt wurde entfernt!", {
      position: "top-center",
      duration: 2000,
      style: {
        backgroundColor: "#000",
        color: "white",
        border: "none",
        fontSize: "1.2rem",
      },
    });
  }

  return (
    <div className="mx-auto flex w-96 flex-col items-center justify-center gap-4">
      <h1 className="mt-16 mb-10 w-full text-center text-3xl font-semibold">
        Einkaufsliste
      </h1>
      <div className="flex w-full items-center justify-center gap-2">
        <Input
          type="text"
          className="border outline-none placeholder:text-gray-500 focus:border-black focus:ring-0"
          placeholder="Produkt eingeben..."
          value={inputValue}
          onChange={handleProductInputChange}
        />
        <Input
          type="number"
          min="1"
          max="100"
          value={amountValue}
          onChange={handleAmountInputChange}
          className="w-14"
        />
      </div>
      <Button
        className="w-full bg-gray-500 hover:bg-gray-600"
        onClick={addProduct}
        disabled={inputValue.length < 1}
      >
        Eintrag hinzufügen
      </Button>
      <ProductList products={products} onClickProduct={deleteProduct} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
