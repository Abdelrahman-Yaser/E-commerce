
export interface Product {
  id: number;
  image:string
    title: string;
    price: number;
    description?: string;
    category?: string;
    quantity?:number 
  }
  
  // Argument type for any parameters passed into the async function (e.g., product ID for fetching a specific product).
  export interface FetchProductsArgs {
    categoryId?: number;
  }
  
  export interface CategoriesData {
    electronics: string[];
    jewelery: string[];
  mensclothing: string[];
  womenclothing: string[];
  }
  