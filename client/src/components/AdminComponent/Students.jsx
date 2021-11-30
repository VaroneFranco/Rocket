import React, {useState, useEffect} from 'react'
import axios from "axios"
import s from "./Students.module.css"

function Students() {
    
    var [users, setUsers]=useState([])
    var [search, setSearch] = useState("")
    
    async function getStudents(){
        await axios("http://localhost:3001/getUsersByInstitution",{
            method:"post",
            data: {
                institution: JSON.parse(localStorage.getItem("user")).institution
            }
        })
    }
    
    useEffect(() => {
        getStudents()
    }, [])

    const handleChange=(e)=>{
        setSearch(e.target.value)
      }
      const handleSumbit = async (e) => {
        e.preventDefault();
        if (search) {
            let searchUsers = await axios(`http://localhost:3001/searchProfiles/${search}`).then(r=> r.data)
            setUsers(searchUsers);
            setSearch("")
        }
      }    
    
    return (
        <div className={s.container}>
            <h2>Students Panel</h2>
            <div className={s.filtros}>
                        
                        <div className={s.orderGroup}>
                            <h6>Group</h6>
                            <select value="FT 18-A">
                                
                                <option value="FT 18-A">
                                    FT 18-A
                                </option>
                                <option value="FT 20-B">
                                    FT 20-B
                                </option>
                            </select>
                        </div>
                        
                        <form onSubmit={(e) => handleSumbit(e)}>
                           
                            <input
                                placeholder="Find students..."
                                onChange={(e) => handleChange(e)}
                                className={s.formInput}
                                value={search}
                                type="text"
                            />
                            <button type="submit" className={s.btnSearch}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1659 16.3718L25 23.206L23.206 25L16.3718 18.1659C14.6533 19.5017 12.4939 20.2972 10.1486 20.2972C4.54369 20.2972 0 15.7536 0 10.1486C0 4.54369 4.54369 0 10.1486 0C15.7536 0 20.2972 4.54369 20.2972 10.1486C20.2972 12.4939 19.5017 14.6533 18.1659 16.3718ZM10.1486 17.7601C14.3523 17.7601 17.7601 14.3523 17.7601 10.1486C17.7601 5.94493 14.3523 2.53716 10.1486 2.53716C5.94493 2.53716 2.53716 5.94493 2.53716 10.1486C2.53716 14.3523 5.94493 17.7601 10.1486 17.7601Z" />
                                </svg>
                            </button>
                     </form>
                     <div className={s.orderBy}>
                        <h6>Order By</h6>
                        <select value="Default">
                                <option value="Higher Rockets">
                                    +Rockets
                                </option>
                                <option value="Higher Reports">
                                    +Reports
                                </option>
                                <option value="A-Z">
                                    A-Z
                                </option>
                                <option value="Z-A">
                                    Z-A
                                </option>
                            </select>
                     </div>
            </div>
            <div className={s.studentsContainer}>
                
            </div>
        </div>
    )
}

export default Students
