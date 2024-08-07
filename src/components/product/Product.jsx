export default function Product({ product }) {

  return (
    <>
    <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
    </>
  );
}
