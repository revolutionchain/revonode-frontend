import React, { useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { useEffect } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const blockchainInfo = [
    {
        title: "Chain",
        icon: "mdi mdi-checkbox-multiple-blank-outline text-info",
        value: ""
    },
    {
        title: "Blocks Size",
        icon: "far fa-hdd text-info",
        value: ""
    },
    {
        title: "Blockchain Size",
        icon: "far fa-hdd text-info",
        value: ""
    },
    {
        title: "Difficulty",
        icon: "mdi mdi-key-variant text-info",
        value: ""
    },
    {
        title: "Mediantime",
        icon: "mdi mdi-clock-time-nine-outline text-info",
        value: ""
    },
]

const walletInfo = [
    {
        title: "Name",
        icon: "bx bx-wallet text-info",
        value: "walletname"
    },
    {
        title: "Balance",
        icon: "bx bx-money text-info",
        value: "0.00000000 RVO"
    },
    {
        title: "Stake",
        icon: "mdi mdi-pickaxe text-info",
        value: "0.00000000 RVO"
    },
    {
        title: "Unconfirmed",
        icon: "bx bxs-time-five text-info",
        value: "0.00000000 RVO"
    },
    {
        title: "Immature",
        icon: "bx bx-left-down-arrow-circle text-info",
        value: "0.00000000 RVO"
    }
]


function WalletChainInfoWidget(props) {

    const [peersState, setPeersState] = useState(false);
    const [totalPeers, setTotalPeers] = useState(false);
    const [randomColorsState, setRandomColorsState] = useState (false);

      function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

      
      
const [ blockchainInfoState, setBlockchainInfoState ] = useState(false);
const [ walletState, setWalletState ] = useState(false);

    useEffect(() => {
        blockchainInfo[0].value = <button style={{ fontSize: "12px", marginLeft: "5px", }} type="button" className="btn btn-dark btn-sm">{props.nodeData[0].chain}</button>
        blockchainInfo[1].value = ((props.nodeData[7].size_on_disk) / 1000000000).toFixed(2) + " GB";
        blockchainInfo[2].value = (props.nodeData[8]).includes('G') ? (props.nodeData[8]).split("G")[0] + " GB" : (props.nodeData[8]).split("M")[0] + " MB";
        blockchainInfo[3].value = (props.nodeData[0].difficulty.proof_of_stake).toFixed(3);
        const dateoptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'CET' };
        blockchainInfo[4].value = new Date((props.nodeData[7].mediantime)*1000).toLocaleString("en-US",dateoptions);
        setBlockchainInfoState(blockchainInfo);
        walletInfo[0].value = props.nodeData[9].walletname
        walletInfo[1].value = (props.nodeData[9].balance).toFixed(8) + " RVO"
        walletInfo[2].value = (props.nodeData[9].stake).toFixed(8) + " RVO"
        walletInfo[3].value = (props.nodeData[9].unconfirmed_balance).toFixed(8) + " RVO"
        walletInfo[4].value = (props.nodeData[9].immature_balance).toFixed(8) + " RVO"
        setWalletState(walletInfo);
        let peersCount = [];
        let peers = 0;
        props.peersData.map(e => {
            let target = peersCount.find(elem => elem?.name == e.subver.split("/")[1].split("(")[0]);
            if (target) {
                target.count = target.count + 1;
            } else {
                peersCount.push({ name: e.subver.split("/")[1].split("(")[0], count: 1 });
            }
            peers = peers + 1;
        });
        peersCount.sort(function (a, b) {
            if (a.count < b.count) {
                return 1;
            }
            if (a.count > b.count) {
                return -1;
            }
            return 0;
        });
        var randomColors = [];
        peersCount.map((e, i) => {
            function getRandomColor() {
                var num=Math.floor(Math.random() * 256);
                var color = [];
                color[0] = 86;
                color[1] = num;
                color[2] = 226;                

                if(randomColors.includes(color)){
                  return getRandomColor();
                }
                else{
                  let definedColor = rgbToHex(color[0], color[1], color[2]);
                  randomColors.push(definedColor)
                }                       
            }
            getRandomColor()
        })
        setPeersState(peersCount);
        setTotalPeers(peers);
        !randomColorsState && setRandomColorsState(randomColors);         
    })

    

    return (
        <React.Fragment>
            <Col xl={3}>
                <Card>
                    <CardBody>

                        <h4 className="card-title mb-2">Blockchain</h4>
                        <hr />
                        <div className="mt-1">
                            {blockchainInfoState && blockchainInfoState.map((e,i) => {
                                return (<div className="d-flex">
                                    <div style={{ width: "60%", padding:"3px" }}>
                                        <i className={e.icon}></i>{" " + e.title}
                                    </div>
                                    <div style={{ width: "40%", padding: "3px" }}>
                                        {e?.value}
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>

                        <h4 className="card-title mb-2">Wallet</h4>
                        <hr />
                        <div className="mt-1">
                            {walletState && walletState.map(e => {
                                return (<div className="d-flex">
                                    <div style={{ width: "50%", padding:"3px" }}>
                                        <i className={e.icon}></i>{" " + e.title}
                                    </div>
                                    <div style={{ width: "50%", padding: "3px 0" }}>
                                        {e?.value}
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl={5}>
                <Card className='top-peers-container' >
                    <CardBody>

                        <h4 className="card-title mb-6">Top Peer Clients</h4>
                        <hr />
                        <div className="mt-1 piechart-container" >
                            <div className='col-xl-6 '>
                                {totalPeers && <PieChart
                                    animation
                                    animationDuration={500}
                                    animationEasing="ease-out"
                                    center={[75, 75]}
                                    data={peersState.map((e, i) => {                                        
                                        return  {
                                            color: randomColorsState[i],
                                            title: e.name,
                                            value: e.count
                                        }
                                        
                                    })}
                                    labelPosition={50}
                                    lengthAngle={360}
                                    lineWidth={50}
                                    paddingAngle={1}
                                    radius={50}
                                    startAngle={0}
                                    viewBoxSize={[150, 150]}
                                />}
                            </div>
                            {props.peersData.length && peersState.length && peersState?.map((e, i) => {
                                return (<div key={i} className="col-xl-6">
                                    <div className='d-flex col-xl-12 mb-2 ' style={{borderBottom: "1px solid #CCC", padding: "0 5px"}}>
                                    <div style={{ width: "80%" }}>
                                        {`${i+1}. ${e.name}`}
                                    </div>
                                    <div style={{ width: "20%", textAlign: "right" }}>
                                        {totalPeers && totalPeers >= 1 ? e?.count / totalPeers * 100 + "%" : '100%'}
                                    </div>
                                    </div>
                                </div>)
                            })
                            }
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default WalletChainInfoWidget;