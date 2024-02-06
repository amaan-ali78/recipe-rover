
export default function Items({data}){
    return <div>
        <img src={data.image} alt={data.title} />
        <h1>{data.title }</h1>
    </div>
}