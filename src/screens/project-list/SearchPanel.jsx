import { useState,useEffect } from "react"

const SearchPanel = ( {users,param,setParam} ) => {

    useEffect( ()=>{
        console.log(users);
    },[] )

    

    const handleInputChange = (e)=>{
        setParam( { ...param,name:e.target.value } )
    }

    const handleSelectChange = (e)=>{
        setParam( { ...param,personId:e.target.value } )
    }

    return <form>
        <div>
            <input type="text" value={param.name} onChange={ (e)=>{ handleInputChange(e) } } />
            <select value={param.personId} onChange={ e=>{ handleSelectChange(e) } }>
                
                <option  value={''} >负责人</option>
                {
                    users.map( item=>{
                       return <option key={item.id} value={item.id}>{item.name}</option>
                    } )
                }
              
            </select>
        </div>
    </form>
}

export default SearchPanel