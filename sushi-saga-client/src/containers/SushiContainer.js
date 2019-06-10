import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(0, 4).map(sushi => < Sushi key={sushi.id} sushi={sushi} eat={() => props.eat(sushi)} charge={() => props.charge(sushi)}/>)
        }
        <MoreButton more={props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer