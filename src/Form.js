import React from 'react'
import Feature from './Feature'

function Form(props){
    const features = Object.keys(props.features).map((feature, idx) => 
        <Feature selected={props.selected} features={props.features} feature={feature} idx={idx} updateFeature={props.updateFeature}/>
    );

    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
    )
}

export default Form