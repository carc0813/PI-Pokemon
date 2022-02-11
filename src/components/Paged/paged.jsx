export default function Paged ({pokePerPage,paged,poquemoncitos}){
  const numberPag = []
  for(let i=1; i<=Math.ceil(poquemoncitos/pokePerPage); i++){
      numberPag.push(i)
  }
  return (
      <div >
          <div>
              {numberPag&&numberPag.map(n =>(
                  <>
                      <p onClick={() => paged(n)} key={n}>{n} </p>
                  </>
              ))
              }
          </div>
      </div>
  )
}