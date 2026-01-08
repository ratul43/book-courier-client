const ItemCalc = ({ quantity, setQuantity }) => {
  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        className="btn btn-outline btn-sm"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      >
        −
      </button>

      <span className="font-bold">{quantity}</span>

      <button
        type="button"
        className="btn btn-outline btn-sm"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
};

export default ItemCalc;
