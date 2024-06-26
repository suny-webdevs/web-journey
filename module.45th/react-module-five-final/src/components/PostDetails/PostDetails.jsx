import { useLoaderData, useNavigate } from "react-router-dom"
import MissingPhoto from "../../assets/missing-photo.png"

const PostDetails = () => {
  const post = useLoaderData()
  const navigate = useNavigate()
  const {
    cover_image,
    id,
    title,
    description,
    comments_count,
    public_reactions_count,
    positive_reactions_count,
  } = post

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className="w-[90vw] md:w-[900px] mx-auto">
      <img
        src={cover_image || MissingPhoto}
        alt={title}
      />
      <p>Blog ID: {id}</p>
      <h3 className="text-3xl font-bold">{title}</h3>
      <p>{description}</p>
      <div className="flex gap-10 mt-5">
        <span>Comments: {comments_count}</span>
        <span>Public reaction: {public_reactions_count}</span>
        <span>Positive reaction: {positive_reactions_count}</span>
      </div>
      <button
        className="btn btn-ghost btn-primary text-lg text-white"
        onClick={handleClick}
        type="button"
      >
        Go Back
      </button>
    </div>
  )
}

export default PostDetails
