import { useEffect, useState } from 'react'
import '../../App.css'
import PrincipalModal from './PrincipalModal'
function Home() {
    const [modalFlag, SetModalFlag] = useState(false);
    function handleClick() {
        SetModalFlag(true);
    }
    const [formData, setFormData] = useState<{
        ID: number;
        firstname: string;
        lastname: string;
        qualification: string;
    }[]>([]);

    useEffect(() => {
        const handleLoadData = async () => {
            const response = await fetch('http://localhost:9000/teachers', {
                method: 'GET',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                credentials: 'include'
            });
            if (response.ok) {
                const datas = await response.json()
                setFormData(datas);
                return
            }
            console.log("Data could not fetched from frontend : ", response.statusText);

        }
        handleLoadData();
    }, [])

    return <div className="Home">
        <div className="home-header">
            <input type="text" placeholder='Search...' className='search' />
            <button className='modal-button' onClick={handleClick}>Add Student</button>
        </div>
        {modalFlag && <PrincipalModal SetModalFlag={SetModalFlag} />}
        <table className='table'>
            <colgroup>
                <col span={3} />
            </colgroup>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Qualification</th>
            </tr>
            {formData.map((data) => (
                <tr className='listItem' key={data.ID}>
                    <td>{data.ID}</td>
                    <td>{data.firstname + " " + data.lastname}</td>
                    <td>{data.qualification}</td>
                </tr>
            ))}
        </table>
    </div>
}

export default Home