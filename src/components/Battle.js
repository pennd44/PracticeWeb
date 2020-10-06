import React from 'react';

class Battle extends React.Component {
    state = {  }
    attack=(enemy)=>{
        return ()=>this.props.attack(enemy)
    }
    goBack=()=>{

    }
    
    finishBattle=(enemy,won)=>{
        return ()=>this.props.finishBattle(enemy,won)
    }
    render() { 
        let enemy = this.props.enemies[this.props.enemy.name.toLowerCase()]
        let player = this.props.playerStats
        return ( <div>
        <div>You</div>
        <div>{this.props.healthDisplay(player)}</div>
        <br />
        <div>{enemy.name}</div>
        <div>{this.props.healthDisplay(enemy)}</div>
        <br />
        {player.currentHealth===0?
            <button onClick={this.finishBattle(enemy,false)}>Go back</button>
            :enemy.currentHealth===0?(
                <button onClick={this.finishBattle(enemy,true)} >Go back</button>):
       <div>
       <button onClick={this.attack(enemy)}>Attack</button>
        <button onClick={this.props.goBack}>Run</button>
        </div>
    }

           
        </div> );
    }
}
 
export default Battle;