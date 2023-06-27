export const Shimmer=()=>{
    return (
        <>
            <div className="s-card p-2 bg-orange-50 rounded-lg flex-col flex-grow-1 min-h-[320px] min-w-[160px] shadow-lg">
                <div src="" alt="Restaurant" className="s-img  w-[100%] h-[120px] bg-orange-100"></div>
                <h2 className="s-title w-[100%] h-[20px] mt-3 bg-orange-100"></h2>
                <h3 className="s-cuisines mt-2 mb-8 w-[100%] h-[40px] bg-orange-100"></h3>
                <h4 className="s-rating w-[40px] h-[20px] bg-orange-100"></h4>
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
        <div className="search-container flex justify-between p-2">
            <div>
                <input 
                    type="text"
                    className="search-input pl-2 bg-orange-100 text-gray-00 rounded-l w-28"
                    placeholder="search"
                />
                <button className="search-btn px-2 bg-orange-200 text-gray-800 rounded-r hover:bg-red-400 hover:text-white">Search</button>
            </div>
            <button className="clear-filter bg-orange-200 text-gray-800 rounded-md px-2 hover:bg-red-400 hover:text-white">Clear Filter</button>
        </div>
        <div className="restaurant-list flex flex-wrap">
            {a.map((val,index)=>{return <div className="min-w-[160px] w-[18%] h-[100%] grow m-2"><Shimmer key={index}/></div>})}
    </div>
    </>)
}