import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  amount: number;
  onDelete: () => void;
  isChecked: false;
}

//function deleteProduct(id: number): void {
//const updatedProducts = products.filter((p) => p.id !== id);
// setProducts(updatedProducts);
//}

export function ProductCard({
  name,
  amount,
  isChecked,
  onDelete,
}: ProductCardProps) {
  function handleCheckEvent() {
    if (isChecked) {
      return (
        <Card className="w-full p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-gray-500">{amount}</p>
            </div>
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                onClick={onDelete}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Button>
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                  />
                </svg>
                Zurück
              </Button>
            </div>
          </div>
        </Card>
      );
    } else {
      return (
        <Card className="w-full p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-gray-500">{amount}</p>
            </div>
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="flex items-center gap-2"
                isChecked={handleCheckEvent}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Abhaken
              </Button>
            </div>
          </div>
        </Card>
      );
    }
  }
}
