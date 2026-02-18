import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products - NEBULAB",
  description: "NEBULABのプロダクト群。小さく作って、育てて、公開していきます。",
};

export default function ProductsPage() {
  return <ProductsClient />;
}
