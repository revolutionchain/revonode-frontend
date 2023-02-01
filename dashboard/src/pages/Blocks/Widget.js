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
            txResponses.map((e,i)=>{
                totalFees = totalFees + (parseInt(e.fees) / 100000000).toFixed(9);
                if(txResponses.length -1 == i){                    
                    widget[3].count = totalFees;
                }
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
    widget[3].text = ' Loading RVO avg';
    widget[4].count = totalTx;
    widget[4].text = (totalTx / 30).toFixed(2) + " KB avg. TX size"
    setWidgetState(widget);   
    
})

const [reloadStates, setReloadStates ] = useState(false);

function reloadAvgData(){

    let txHashes = [];
    
    (props.lastestBlocks).map((e, i) => {
        if((e.tx).length > 2){
            let currentTxs = (e.tx).slice(2) 
            txHashes = [...txHashes, ...currentTxs];
        }
    })
    
    
    
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
