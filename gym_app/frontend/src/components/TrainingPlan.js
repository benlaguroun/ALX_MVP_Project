import React from 'react';

const TrainingPlan = ({ plan }) => {
    return (
        <div>
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <p>Duration: {plan.duration} weeks</p>
        </div>
    );
}

export default TrainingPlan;

