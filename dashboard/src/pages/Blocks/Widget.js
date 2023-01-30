import React, { useState } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { useEffect } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const widget = [
    {
        id: 1,
        title: 'Showing last',
        text: 'blocks',
        count: '30',
        dollor: true,
        icon: 'bx bxs-component text-primary',
        secondIcon: '',
        percentage: '2.65%',
        color: 'success',
        upArrow: true
    },
    {
        id: 2,
        title: 'Last Block',
        text: '',
        count: '0',
        dollor: true,
        icon: 'bx bxs-cube',
        secondIcon: '',
        percentage: '4.58%',
        color: 'success',
        upArrow: false
    },
    {
        id: 3,
        title: 'Size',
        text: '0 MB avg',
        count: '0',
        dollor: false,
        icon: 'mdi mdi-database text-primary',
        secondIcon: '',
        percentage: '14.33%',
        color: 'success',
        upArrow: true
    },
    {
        id: 4,
        title: 'Total Fees',
        text: 'Loading RVO avg',
        count: '0',
        dollor: false,
        icon: 'bx bx-money text-danger',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    },
    {
        id: 5,
        title: 'Transactions',
        text: '0 KB avg. TX size',
        count: '0',
        dollor: false,
        icon: 'bx bx-line-chart text-primary',
        secondIcon: '',
        percentage: '0.55%',
        color: 'warning',
        upArrow: true
    }
]


const Widget = props => {

    const [ widgetState, setWidgetState ] = useState(false);

    
useEffect(()=>{        
    //widget[0].count = "";
    let totalFees = 0;
    if((props.nodeData[10].tx).length > 2){
        Promise.all((props.nodeData[10].tx).slice(2).map(async (e,i) => {
                let response = await fetch(`https://api.revo.network/tx/${e}`, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                  });
                return response.json();
        })).then(txResponses => {
            txResponses.map(e=>{
                totalFees = totalFees + (e.fees / 100000000);
            });
        })
    }

    
let totalBlockSize = 0;
let totalTx = 0;
(props.lastestBlocks).map(e => {
    totalBlockSize = totalBlockSize + e.size;
    if((e.tx).length > 2){
        totalTx = totalTx + (e.tx).length - 2;
    }
})
    widget[1].count = props.nodeData[0].blocks;
    widget[1].text = props.farAway((props.nodeData[10].time)) + " ago";
    widget[2].count = props.lastestBlocks[0].size;
    widget[2].text = (totalBlockSize / 30).toFixed(2) + " bytes avg";
    widget[3].count = totalFees;
    widget[4].count = (props.nodeData[10].tx).length > 2 ? (props.nodeData[10].tx).length - 2 : 0;
    widget[4].text = (totalTx / 30).toFixed(2) + " KB avg. TX size"
    setWidgetState(widget);   
    
})

const [reloadStates, setReloadStates ] = useState(false);

function reloadAvgData(){

    let txHashes = ["ead29af20decef6b6d44a7bb60a148ed2be20acd1dfaf574d80620a3fa0aed2e","a66431004a74227cacc9929751faae12ffdf9f541c567b0ae725be07dba8ebdf","ec729d508c6eecaaf684d6fbd922727c7efe5478cec12959770150342af70c84","e66fc979a09392644547b6e2e6e394c80b861ad66c09661675280975428446d7","dea95f78a410e5440f71ccef67042515c10bbd136dd33c760bb09532ee3ec28c","ff19eefe664ec70bcd68cdd9ef37abed5d15fb0a76b1f87772c76cba899f0437","0e5197cb31f56506beab63a0a9c0eccd4afc8246f36858856e39d61264184398","2c9701ed718c59dba3b6ec5f80be9713ca70056efb012194ca559d0923ec2d01","7e72ae62f805b0ffdfdec62c74cb6e919aa1d158326fe6ed5413797191e48f57","1d94bee4ad22f4d53f6c273e7d274d636d3879608731cb1a85d85497357f0c52","bf91b48586727c31b389674c835cbc48037889db2bb5f9c947f7c061865c32bf","e18a556c6abaf0c513064e314d5f02bae8db47a2ec1193dc08f58136ea1f8a43","fc89868c253800ed376c7064fe8f401372aef174acd38c272774adb177eebce3","9fc3dbb5adcf8faee8852e9112630de7d683272fa03de33e17ff7fa6ff97c9f1","3c8f5294ddf9fe7d5557fc82b4aad415c248c78d465248ae54e3ea7304c0741d","f1b15ff2c1fc0fa1a79cf87c5693eb6125271c88646ebe604e7cca207290eb23","0adc06e2fa021052d52477e594a5ffb8679b9b6c006601e267f5f7d49b70c412","6fc10198fe7609bd1fda8db952ca6a56358d8cffc19888bf3324a4ddbed92d0a","71e9982a2a5768a8df1064c18b8d13f04f2110181c836719261f7a6fc099a155","e0f710857d6962f29a4511817781e79e220a14a2321542b127529ce8d4b61d61","f25487269177c9937a5a9e1e47e9aa030b70c72cb40d643110a8f538afb8cc51","1fd32eae7e07af3847b666f5a3576fd6dac2e962b3f390bac9b72a45fa2fc937","1a0ff6bde6462d1bac23dfc61ccee23593c92447cc85dad341b8f19165e85247","45f69130ddadc480b2d3041fcd874f940c88497b8f0df3fab8a899e0207e7359","9c64ed72aa7e5b0ec711275b73d812ee14231bc1dd9b425e9773fdea9d521cf7","d0ca82bce3137391afe7f39fb3f77463ca4fbb2a81ae95a3a7945ed1d4ea695f","9bcdf0f9d9fc4288dec831ccd61b8013a69121107f859cd35256d84ee8e22b97","0ccac906dbe1ee2e359535a082a508970f6a2d91bff98f93d4736886055e2db8","eb9b922d993a5d0e64fcb7b711af52d987836483656a9bada13bee30e7b034a1","77c0cb7d55985809a611f07dd85c53393ac9daf46aadb0b99b1b16355cfc6b13","612b320aba860bb6d3dc87e9d1dd9c25392cdcde456998ae1e47bf79dd3ce96a","b1721b10e94c928d2e4f174d42c7588dc6f39263e5a29dd99fb1ca6315b09be1"];
    /*
    
    (props.lastestBlocks).map((e, i) => {
        if((e.tx).length > 2){
            let currentTxs = (e.tx).slice(2) 
            txHashes = [...txHashes, ...currentTxs];
        }
    })
    */
    
    
    
    if(txHashes.length) {
        Promise.all((txHashes.map(async (e,i) => {
            if(txHashes.length >= 10){
                const prom = new Promise((resolve, reject) => {
                    setTimeout(async () => {
                    let response = await fetch(`https://api.revo.network/tx/${e}`, {
                        method: 'GET',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                      });
                    resolve(response.json());
                }, 100);
                  });
                return prom                
            }else {                
                let response = await fetch(`https://api.revo.network/tx/${e}`, {
                    method: 'GET',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                  });
                return response.json();
            }
        }))).then(txHashesResponses => {
            let feesAvg = 0;
            let feesCount = 0;
            txHashesResponses.map((e, i)=>{
                feesCount = feesCount + parseInt(e.fees);
                if(i == txHashesResponses.length-1){
                    feesAvg = (((feesCount) / 30) / 100000000).toFixed(9);
                    let widgetUpdate = widgetState;
                    widgetUpdate[3].text = feesAvg + " RVO avg";
                    setWidgetState(widgetUpdate);
                    reloadStates ? setReloadStates(false) : setReloadStates(true);
                }
            });
        })
    }else {
        let feesAvg = 0;
        let widgetUpdate = widgetState;
        widgetUpdate[3].text = feesAvg + " RVO avg";
        setWidgetState(widgetUpdate);
        reloadStates ? setReloadStates(false) : setReloadStates(true);
    }


}

widgetState && (widgetState[3]?.text).includes("Loading") && reloadAvgData();

    return (
        <React.Fragment>
            <Row>                
                    <Col md={6} xl={12} className="d-flex">
                    {widgetState && widgetState.map((widget, key) => (
                        <Col xl={2} key={key}>
                        <Card>
                            <CardBody>{/*
                                <div className="float-end">
                                    <div className="avatar-sm mx-auto mb-4">
                                        <span className="avatar-title rounded-circle bg-light font-size-24">
                                            <i className={widget.icon}></i>
                                        </span>
                                    </div>
                                </div>*/}
                                <div>
                                    <p style={{fontSize: '14px'}} className="text-muted text-uppercase p-title"><i className={widget.icon}></i>{" " + widget.title}</p>
                                    <h4 className="mb-1 mt-1">
                                        {/*widget.dollor === true ? '' : ''*/}
                                        <span className="counter-value" data-target="58425">
                                            {widget.id == 2 ? <a href={"https://mainnet.revo.network/block/" + widget.count} target="_blank" >{widget.count}</a> : widget.count}
                                        </span></h4>
                                </div>
                                <p className="text-muted mt-3 mb-0">
                                    <span className={""}>

                                        {/*widget.upArrow === true ?
                                            <i className="mdi mdi-arrow-up-bold me-1"></i> : <i className="mdi mdi-arrow-down-bold me-1"></i>
                                        */}
                                        <i className={widget.secondIcon}></i>{" " + widget.text}
                                    </span> 
                            </p>
                            </CardBody>
                        </Card>
                        </Col>
                ))}
                    </Col>
            </Row>
        </React.Fragment>
    );
}

export default Widget;
