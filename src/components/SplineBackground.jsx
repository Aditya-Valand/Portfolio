// SplineBackground.jsx
import React from 'react';

function SplineBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <spline-viewer
         url="https://prod.spline.design/452x7d60ZxG9TL5B/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          z : '10000'
        }}
      ></spline-viewer>
    </div>
  );
}

export default SplineBackground;
