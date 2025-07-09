import React from 'react';
import '../components/loading.css';

function LoadingOverlay() {


    return (
        <div className="loading-overlay">
            <div className="spinner"></div> 
            <p>Loading...</p>
        </div>
  );
}

export default LoadingOverlay;