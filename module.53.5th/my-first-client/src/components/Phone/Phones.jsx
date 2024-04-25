import { Link, useLoaderData } from "react-router-dom"

const Phones = () => {
  const phones = useLoaderData()

  return (
    <div>
      <h1>All phones: {phones.length}</h1>
      <div>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`/phone/${phone.id}`}>{phone.model}</Link>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Phones
