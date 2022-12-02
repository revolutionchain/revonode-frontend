import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
const { REACT_APP_LOCAL_NODE_IP } = process.env;




export default function Thirdpage({currentPage, setCurrentPage}) {

    const [ arrayData, setArrayData ] = useState(false);

    useEffect( async () => {
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        setArrayData(getarrayinfo.data.arrayStatus.split(" ").filter((e,i) => [3, 6, 7, 8, 14].includes(i)));
    },[])


    

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(e) {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }



    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '70%',
            textAlign: 'center',
            backgroundColor: 'transparent'
        },
    };

    async function handleRemoveArray() {
        let arrInfo = { disk1: arrayData[3].slice(0,3), disk2: arrayData[2].slice(0,3) };
        let removeArray = await axios.post(`http://${REACT_APP_LOCAL_NODE_IP}:3001/removearray`, arrInfo);
        let getarrayinfo = await axios.get(`http://${REACT_APP_LOCAL_NODE_IP}:3001/getarrayinfo`);
        if(!getarrayinfo.data.arrayStatus.includes('md0')){
            setCurrentPage(currentPage - 1)                        
        }

        
    }




    return (
        <div className=''>
            <h2>Array Created successfully!</h2>
            <h3>Your storage array has been successfully created!</h3>
            <div>
                {
                    arrayData.length && arrayData?.map((e,i) => {
                        let res = i == 0 ? e.slice(1) : e;
                        return <div>{res}</div>
                    })
                }                
            </div>
            
            <div className='Modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="div-balance-title div-abm-title">Are you sure?</div>
                    <button onClick={closeModal} className='button-style back-button'>Cancelar</button>
                    <button onClick={() => handleRemoveArray()} className='button-style next-button'>Yes</button>
                </Modal>
            </div>
            <button onClick={() => openModal()} className='button-style back-button'>Back</button>
            <button onClick={() => setCurrentPage(currentPage + 1)} className='button-style next-button'>Next</button>
        
        </div>
    )
}
