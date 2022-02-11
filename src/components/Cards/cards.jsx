export default function Cards({ name, types, img }) {
  //console.log(types)
  return (
      <div>
          <div>
              <h1>{name}</h1>

          </div>

          <img src={img}></img>
          <div>types:
              {types.length && types.map((elemento) => (
                  <span> {elemento}</span>
              ))}
          </div>
      </div>
  )
}