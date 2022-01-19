const List = ({list,users})=>{
    const getUserById = (personId)=>{
        let person = users.find( item=>item.id == personId )?.name || '未知'
        return person
    }

    return (<div>
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map(item=>{
                      return  <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{ getUserById(item.personId)}</td>
                            {/* <td>{item.personId}</td> */}
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>)
}

export default List