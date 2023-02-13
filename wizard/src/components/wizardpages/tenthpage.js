import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from 'react-modal';
import failedIcon from '../../styles/images/failed.png'
import copyIcon from '../../styles/images/copy-icon.png'
import printIcon from '../../styles/images/print-icon.png'

export default function Tenthpage({ walletData }) {

    const [rpcData, setRpcData] = useState(false);
    const [arrayData, setArrayData] = useState(false);
    const [privData, setPrivData] = useState(false);


    useEffect(async () => {
      let url;
      if((window.location.hostname).includes("revo.host")){
        url = `https://${window.location.hostname}/api`
      }else {
        url = `http://${window.location.hostname}:3001/api`
      }
  
        let masterState = await axios.post(`${url}/getwalletaddress`);
        walletData.walletAddress = masterState.data;
        let getarrayinfo = await axios.post(`${url}/getarrayinfo`);
        setArrayData(["md0"].concat(getarrayinfo.data.arrayStatus.split("md0")[1].split(" ").filter((e, i) => [3, 4, 5, 11].includes(i))));
        let result = await axios.post(`${url}/getrevoconfig`);
        let arr = []
        arr[0] = result.data.split("rpc")[1];
        arr[1] = result.data.split("rpc")[2];
        arr[2] = result.data.split("uacomment=")[1];
        let obj = {
            user: arr[0].slice(5, (arr[0]).length - 1),
            pass: arr[1].slice(9, (arr[1]).length - 1),
            nodeName: arr[2].slice(0, arr[2].length - 3)
        }
        setRpcData(obj);
        let privKeyObj = { walletKey: walletData?.walletPass};
        let getPrivKey = await axios.post(`${url}/getprivkey`, privKeyObj);
        setPrivData(getPrivKey.data)
    }, []);

    const [textArea, setTextArea] = useState(false);

    arrayData.length && rpcData?.user && privData.length && !textArea && setTextArea(`Disk Array Level: Raid ${arrayData[1].split("d")[1]}
Disk Array Size:  ${(parseFloat(arrayData[4]) / 1000000).toFixed(2)}GB

RPC Username: ${rpcData?.user}
RPC Password: ${rpcData?.pass}

Your node name: ${rpcData?.nodeName}
Wallet name: ${walletData?.walletName}
Wallet password: ${walletData?.walletPass}
Wallet Address: ${walletData.walletAddress}
Private Key: ${privData}`);

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

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal(e) {
        setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
        setIsOpen(false);
    }

    function printReports(divId){
        let content = document.createElement('div');
        content.innerHTML = `
        <h2>My Revo Node configuration details</h2>
        Disk Array Level: Raid ${arrayData[1]?.slice(4)}<br>
        Disk Array Size:  ${(parseFloat(arrayData[4]) / 1000000).toFixed(2)}GB <br><br>        
        RPC Username: ${rpcData?.user}<br>
        RPC Password: ${rpcData?.pass}<br><br>        
        Your node name: ${rpcData?.nodeName}<br>
        Wallet name: ${walletData?.walletName}<br>
        Wallet password: ${walletData?.walletPass}<br>
        Wallet Address: ${walletData.walletAddress}<br>
        Private Key: ${privData}`
        let mywindow = window.open('', 'Print', 'height=600,width=800');
    
        mywindow.document.write('<html><head><title>Print</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write(content.innerHTML);
        mywindow.document.write('</body></html>');
    
        mywindow.document.close();
        mywindow.focus()
        mywindow.print();
        mywindow.close();
        return true;
    }




    return (
        <div className=''>
            <div className='content-container'>
                <h2>We did it!</h2>
                <h3>Installation complete! Before accessing the Dashboard of your Revo node, take the time to make a copy of the data you have entered! Print or save the data below and be sure to keep it safe!</h3>
                <div className='tenth-container'>
                    <div className='left' style={{textAlign: `left`}}>
                    {textArea && <span style={{ position: `absolute`, backgroundColor: `white`, marginLeft: `10px`, padding: `0px 5px`, fontSize: `16px` }}>Your Node Data</span>}
                    {textArea && <textarea id='print-content' style={{ resize: `none`, minHeight: `250px`, minWidth: `85%`, marginTop: `10px`, padding: `15px`, border: `3px solid #050A30`, borderRadius: `5px`, fontSize: `16px` }}>
                        {                            
                            textArea
                        }
                        </textarea>}
                    </div>
                    <div className='right'>
                    <CopyToClipboard text={`My Revo Node configuration details

${textArea}`}
                        onCopy={() => { }}>
                        <button style={{marginTop: `10px`}} className='button-style'><img className='copy-icon' src={copyIcon} /></button>
                    </CopyToClipboard>
                    <button style={{marginTop: `10px`}} onClick={() => printReports("print-content")} className='button-style'><img className='copy-icon' src={printIcon} /></button>
                    </div>
                </div>
            </div>
            <div className='buttons-container'>
                <div className='left'>
                </div>
                <div className='right'>
                    <button onClick={() => window.location.reload()} className='button-style next-button'>Finish</button>
                </div>
            </div>
        </div>
    )
}