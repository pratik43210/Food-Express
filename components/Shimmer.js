export const Shimmer=()=>{
    return (
        <>
            <div className="s-card">
                <div src="" alt="Restaurant" className="s-img"></div>
                <h2 className="s-title"></h2>
                <h3 className="s-cuisines"></h3>
                <h4 className="s-rating"></h4>
            </div>
        </>
    )
}

const a=[];
for(let i=0;i<15;i++){
    a.push(i);
}
export const Shimmerlist=()=>{
    // console.log(a);
    return(
    <>  
        <div className="search-container">
        <input 
            type="text"
            className="search-input"
            placeholder="search"
        />
        <button className="search-btn">Search</button>
        </div>
        <div className="restaurant-list">
        {a.map((val,index)=>{return <Shimmer key={index}/>})}
    </div>
    </>)
}