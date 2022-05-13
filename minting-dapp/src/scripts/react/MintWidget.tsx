import { utils, BigNumber } from 'ethers';
import React from 'react';

interface Props {
  maxSupply: number,
  totalSupply: number,
  tokenPrice: BigNumber,
  maxMintAmountPerTx: number,
  isPaused: boolean,
  isWhitelistMintEnabled: boolean,
  isUserInWhitelist: boolean,
  mintTokens(mintAmount: number): Promise<void>,
  whitelistMintTokens(mintAmount: number): Promise<void>,
}

interface State {
  mintAmount: number;
}

const defaultState: State = {
  mintAmount: 1,
};

export default class MintWidget extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private canMint(): boolean {
    return !this.props.isPaused || this.canWhitelistMint();
  }

  private canWhitelistMint(): boolean {
    return this.props.isWhitelistMintEnabled && this.props.isUserInWhitelist;
  }

  private incrementMintAmount(): void {
    this.setState({
      mintAmount: Math.min(this.props.maxMintAmountPerTx, this.state.mintAmount + 1),
    });
  }

  private decrementMintAmount(): void {
    this.setState({
      mintAmount: Math.max(1, this.state.mintAmount - 1),
    });
  }

  private async mint(): Promise<void> {
    if (!this.props.isPaused) {
      await this.props.mintTokens(this.state.mintAmount);

      return;
    }

    await this.props.whitelistMintTokens(this.state.mintAmount);
  }

  render() {
    return (
      <>
       {this.canMint() ?
        <>
          <div className="mint-widget">
            <div className="flex justify-center">           
              <div className="preview">
                <img src="/build/images/intro.gif" alt="Collection preview" className="hidden lg:block"/>
              </div>
              <div className="price">
                <h2>The Randoms <br></br>{this.props.isWhitelistMintEnabled ? <>Presale</> : <>Public Sale</>}</h2>
                <div className="controls">
                  <h4>{this.props.totalSupply} / {this.props.maxSupply} @ {utils.formatEther(this.props.tokenPrice)} ETH</h4>
                  <div className="flex flex-col justify-center">
                      <div className="h-12 flex flex-row">
                        <button className="decrease" onClick={() => this.decrementMintAmount()}>-</button>
                        <span className="mint-amount">{this.state.mintAmount}</span>
                        <button className="increase" onClick={() => this.incrementMintAmount()}>+</button>
                      </div>
                      <span className="mt-4 text-[#7a7a7a] text-sm text-center">Max {this.props.maxMintAmountPerTx} / wallet</span>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                    <button className="primary" onClick={() => this.mint()}>Mint Now</button>
                  </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 my-5 flex flex-col lg:flex-row text-center lg:text-left">
          <span className="mr-4">* ERC-721A</span>
            <span className="mr-4">** Commercial rights for holders</span>
            <span className="mr-4">*** 50% of royalties reinvested</span>
          </div>
          </>
          :
          <>
          <div className="mint-widget">
            <div className="flex justify-center">           
              <div className="preview">
                <img src="/build/images/intro.gif" alt="Collection preview" />
              </div>
              <div className="random-list-check">
                  <h2>Random List<br></br>Check</h2>
                  <div className="merkle-proof-manual-address">
                    <div>
                      <a className="validate-wallet" href="https://www.premint.xyz/the-randoms/" target="_blank">Validate Your Wallet</a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </>
          }
      </>
    );
  }
}
