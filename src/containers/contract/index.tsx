/**
 * 交易详情页
 */
import * as React from 'react';
import TitleText from '@/components/titletext/index';
import * as formatTime from 'utils/formatTime';
import './index.less'
import { inject, observer } from 'mobx-react';
import { injectIntl } from 'react-intl';
import AssetTable from './assettable';
import AllTable from './alltable';
import Nep5Table from './nep5table';
import Toast from '@/components/Toast';
import { IContractProps } from './interface/contract.interface';

@inject('contract')
@observer
class ContractInfo extends React.Component<IContractProps> {
    public state = {
        showTranFlag: false,// 显示表格列表选择
        showTabletype: 0, // 交易表格的切换，0为默认所有交易，1为nep5的交易

    }
    public intrl = this.props.intl.messages;
    public componentDidMount()
    {
        const params = this.props.match.params;
        this.props.contract.contractHash = '0x' + params["hash"].replace('0x', '');
        const hash: Neo.Uint160 = Neo.Uint160.parse(params["hash"].replace('0x', ''));
        this.props.contract.contractAddr = ThinNeo.Helper.GetAddressFromScriptHash(hash);
        this.getContractInfo()
    }
    public componentWillUnmount()
    {

        this.props.contract.contractHash = '';
        this.props.contract.conInfo = null;
        this.props.contract.balanceList = [];
        this.props.contract.nep5BalanceList = [];
        this.props.contract.allTxCount = 0;
        this.props.contract.allTxList = [];
        this.props.contract.nep5TxCount = 0;
        this.props.contract.nep5TxList = [];
    }
    // 请求数据
    public getContractInfo = () =>
    {
        return this.props.contract.getContractData();
    }
    // 返回上一页
    public onGoBack = () =>
    {
        this.props.history.go(-1);
    }
    // 显示标题下拉
    public onShowType = () =>
    {
        this.setState({
            showTranFlag: !this.state.showTranFlag
        })
    }
    // 点击选择标题
    public onClickType = (type: number) =>
    {
        if (type === 0)
        {
            this.setState({
                showTabletype: 0
            })
        }
        else if (type === 1)
        {
            this.setState({
                showTabletype: 1
            })
        }
    }
    public handleToCopyHash = (hash: string) =>
    {
        console.log(hash);
        const oInput = document.createElement('input');
        oInput.value = hash;
        document.body.appendChild(oInput);
        oInput.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        oInput.className = 'oInput';
        oInput.style.display = 'none';
        Toast(this.intrl.contract.copy);
    }
    // 跳转到nep5的详情页
    public handleToNep5Info = (hash: string) =>
    {
        this.props.history.push('/nep5/' + hash)
    }
    public render()
    {
        if (!this.props.contract.conInfo)
        {
            return (
                <div className="nodata-wrap">
                    <img src={require('@/img/tran-nodata.png')} alt="" />
                    <p>{this.intrl.nodata.msg}</p>
                </div>
            )
        }
        return (
            <div className="contractinfo-page">
                <div className="goback-wrapper">
                    <span className="goback-text" onClick={this.onGoBack}>&lt;&lt;  {this.intrl.btn.goback2}</span>
                </div>
                <div className="info-content">
                    <TitleText text={this.intrl.contract.title1} isInfoTitle={true} />
                    <div className="info-list">
                        <ul>
                            <li>
                                <span className="type-name">{this.intrl.contract.name}</span>
                                <span className="type-content">{this.props.contract.conInfo.name}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.hash}</span>
                                <span className="type-content">
                                    {this.props.contract.conInfo.hash} &nbsp;
                                    <img src={require('@/img/copy.png')} alt="copy" onClick={this.handleToCopyHash.bind(this, this.props.contract.conInfo.hash)} style={{ width: 20, height: 20 }} />
                                    {
                                        this.props.contract.conInfo.isNep5Asset && (
                                            <>
                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                ( <a href="javascript:;" onClick={this.handleToNep5Info.bind(this, this.props.contract.conInfo.hash)}>{this.props.contract.conInfo.assetName}</a>  {this.intrl.contract.contract})
                                            </>
                                        )
                                    }
                                </span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.author}</span>
                                <span className="type-content">
                                {this.props.contract.conInfo.author}（{this.props.contract.conInfo.email}）
                                </span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.createtime}</span>
                                <span className="type-content">{formatTime.format('yyyy/MM/dd | hh:mm:ss', this.props.contract.conInfo.createDate.toString(), this.props.intl.locale)}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.version}</span>
                                <span className="type-content">{this.props.contract.conInfo.version}</span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.des}</span>
                                <span className="type-content">
                                    {this.props.contract.conInfo.description}
                                </span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.tx24}</span>
                                <span className="type-content">
                                    {this.props.contract.conInfo.txCount24h}（{this.intrl.contract.all}：{this.props.contract.conInfo.txCount}）
                                </span>
                            </li>
                            <li>
                                <span className="type-name">{this.intrl.contract.usr24}</span>
                                <span className="type-content">
                                    {this.props.contract.conInfo.usrCount24h}（{this.intrl.contract.all}：{this.props.contract.conInfo.usrCount}）
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <AssetTable {...this.props} />
                <div className="contract-title-wrapper" onClick={this.onShowType}>
                    <h3 className="contract-title">{this.state.showTabletype === 0 ? this.intrl.contract.title3 : this.intrl.contract.title4}</h3>
                    <div className="select-contracttype">
                        <span className="triangle" />
                        {
                            this.state.showTranFlag && (
                                <div className="contracttype-list">
                                    <div className="qipao-wrapper">
                                        <div className="arrow" />
                                    </div>
                                    <ul className="type-list">
                                        <li onClick={this.onClickType.bind(this, 0)}>{this.intrl.contract.title3}</li>
                                        <li onClick={this.onClickType.bind(this, 1)}>{this.intrl.contract.title4}</li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
                {
                    this.state.showTabletype === 0 && (<AllTable {...this.props} />)
                }
                {
                    this.state.showTabletype === 1 && (<Nep5Table {...this.props} />)
                }
            </div>
        );
    }
}

export default injectIntl(ContractInfo);
