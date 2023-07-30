export default function Product ({details = {}}) {
  const {id, name, description, price, discount, imgUrl} = details;

  const _isNull = (val) => (val === null || typeof val === 'undefined')

  return (<div key={id} className="flex flex-col justify-start items-center p-5 mb-5">
    <div className="relative h-80 w-44">
      <img
        alt=""
        src={require('../../../static/images/mobile-2.png')}
        className="w-full h-full absolute z-0"
      />
      <img
        alt=""
        src={require(`../../../static/images/${imgUrl}`)}
        className="w-full h-full absolute -z-10 rounded-3xl border-4"
      />
    </div>
    <h3 className="text-xl md:text-2xl font-bold mt-4 md:mt-12">{name}</h3>
    <p className="mt-3">{description}</p>
    { !_isNull(price.value) && price?.value >= 0 && <p className={`price-${id} text-xl md:text-2xl mt-3 ${discount?.percent > 0 ? 'line-through' :'' }`}>{price?.code}{price?.value}</p>}
    {discount?.percent > 0 && <p className="text-xl md:text-2xl">{discount?.code}{discount?.discountedPrice} ({discount?.percent}%)</p>}
  </div>);
}