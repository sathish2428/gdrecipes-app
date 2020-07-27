import React from "react";

export const Recipe = (props) => {
    return (
       
        <div className="board">
            <div className="card-inner">
            <div className="card-front">
                <div style={{backgroundImage:"url("+props.image+")"}} className="banner"></div>
                
                <h2 className="name">{props.title}</h2>
                <div className="title">{props.totalTime !== 0 && props.totalTime +" mins"}</div>
                <div className="actions">
                    <div className="follow-info">
                        <h2><a href="/"><span>{Math.floor(props.calories,2)}</span><small>Calories</small></a></h2>
                        <h2><a href="/"><span>{Math.floor(props.totalWeight,2)}</span><small>Weight (gms)</small></a></h2>
                    </div>
                    <div className="follow-btn">
                        <button>See Recipe</button>
                    </div>
                </div>
            </div>
            <div className="card-back">
              <h4>Ingredients:</h4>  
            {props.ingredients.map((ingredient, i) => {
            return (<div class="card-text"key={i}> {i + 1}. {ingredient}</div>)
            })}
            </div>
            </div>    
        </div>
    );
}