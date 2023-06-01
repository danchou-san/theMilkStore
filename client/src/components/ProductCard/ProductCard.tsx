import logo from '../../assets/milk.png';

interface Product {
  name: string,
  type: string
}

const ProductCard = ({name, type}: Product) => {
  return (
    <div className='w-card p-4 bg-white mb-10 rounded-md border-2 border-solid border-neutral-200 hover:scale-95 ease-in duration-100 cursor-pointer'>
      <div className='flex justify-center'>
        <img className='w-48 mt-2 mb-8' src={logo} alt='Not Found :(' />
      </div>
      <div>
        <p>{name}</p>
        <br />
        <p className='text-neutral-400'>{type}</p>
      </div>
    </div>
  )
}

export default ProductCard;