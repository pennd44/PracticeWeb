import React from 'react';

class Actions extends React.Component {
    state = {  }

    doActivity=(x,y)=>{
        return ()=>this.props.doActivity(x,y)
    }

    fight=(x,entity)=>{
        return ()=>this.props.fight(x,entity)
    }


    render() { 
        let enemies= this.props.enemies
        return ( <div>
            <div>{this.props.healthDisplay(this.props.playerStats)}</div>
            <div>Energy: {this.props.playerStats.energyCount}</div>
            <div>Money: ${this.props.playerStats.moneyCount}</div>
    

             {this.props.playerStats.energyCount>=1? <button onClick={this.doActivity(-1,5)}> Wash Car </button>:null}
             {this.props.playerStats.moneyCount>=20? <button onClick={this.doActivity(5,-20)}> Buy Soup </button>:null}
             {this.props.playerStats.energyCount>=15? <button onClick={this.doActivity(-15,90)}> Work Construction </button>:null}
             {this.props.playerStats.energyCount>=1? <button onClick={this.fight(-20, enemies.hooligans)}> Fight Hooligans </button>:null}
        </div> );
    }
}
 
export default Actions;