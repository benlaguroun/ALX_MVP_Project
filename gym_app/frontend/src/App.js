import React from 'react';
import NavBar from './components/NavBar';
import TrainingPlan from './components/TrainingPlan';

const App = () => {
    const trainingPlans = [...]; // Fetch training plans from backend

    return (
        <div>
            <NavBar />
            <h1>Welcome to the Gym App!</h1>
            <h2>Training Plans</h2>
            {trainingPlans.map(plan => <TrainingPlan key={plan.id} plan={plan} />)}
        </div>
    );
}

export default App;

