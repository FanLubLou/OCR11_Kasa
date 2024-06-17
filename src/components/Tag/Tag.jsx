export default function Tag({tags}) {
  return (
    <div>
      {tags.map((tag, index) => (
        <button key={index}>
          {tag}
        </button>
      ))}
    </div>
  )
}
