import { useEffect, useState } from 'react'
import SearchPanel from './SearchPanel'
import List from './List'
import qs from 'qs'
import { cleanObject, useMount, useDebounce } from 'utils/utils'

const api = process.env.REACT_APP_API_URL

export default ()=>{
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const [param,setParam] = useState({
        name:'',
        personId:''
    })

    const debounceParam = useDebounce( param , 2000 )
    

    useEffect(() => {
        fetch(`${api}/users`).then( async res=>{
            if(res.ok){
                let users = await res.json()
                // console.log(users);
                setUsers( users )
            }
        } )
    }, [])

    useEffect(() => {
        fetch(`${api}/projects?${qs.stringify(cleanObject(debounceParam))}`).then( async res=>{
            if(res.ok){
                let r = await res.json()
                console.log(r);
                setList( r )
            }
        } )
    }, [debounceParam])

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List list={list} users={users} />
    </div>
}