import { useLoaderData } from "react-router-dom"

const Phone = () => {
  const phone = useLoaderData()
  const {
    brand,
    model,
    display_size,
    resolution,
    processor,
    ram,
    storage,
    camera,
    battery,
    price,
  } = phone

  return (
    <div>
      <h1>
        {model}, {brand}
      </h1>
      <p>Display size: {display_size}</p>
      <p>Resolution: {resolution}</p>
      <p>Processor: {processor}</p>
      <p>RAM: {ram}</p>
      <p>Storage: {storage}</p>
      <p>Camera: {camera}</p>
      <p>Battery: {battery}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default Phone
