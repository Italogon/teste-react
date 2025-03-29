import React, { useState } from 'react';

const ToggleText = () => {
  const [showText, setShowText] = useState(true);

  return (
    <div>
      {showText && <p>Este é o texto que pode ser mostrado ou ocultado.</p>}
      <button onClick={() => setShowText(!showText)}>
        {showText ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};

export default ToggleText;