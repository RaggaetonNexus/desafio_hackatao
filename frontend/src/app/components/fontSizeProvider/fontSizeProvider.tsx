'use client'

import react, { useEffect } from 'react';

export const FontSizeContext = react.createContext({ // o objeto inicial é o valor padrão e é o valor do contexto
  FontSize: '1',
  setFontSize: (value: number) => {},
});

export const useFontSize = () => {
  const context = react.useContext(FontSizeContext);
  if (context === undefined) {
    throw new Error('useFontSize must be used within a FontSizeProvider');
  }
  return context;
}

export const FontSizeProvider = ({ children }: { children: react.ReactNode }) => {
  const [FontSize, setFontSize] = react.useState(1);

  useEffect(() => {
    const localFontSize = localStorage.getItem('FontSize');
    setFontSize(parseFloat(localFontSize || '1'));
  }, [setFontSize]);

  const setFontSizeF = (value: number) => {
    setFontSize(value);
    localStorage.setItem('FontSize', value.toString());
  };

  return (
    <FontSizeContext.Provider value={{ FontSize: FontSize.toString(), setFontSize: setFontSizeF }}>
      <div id='FontSizeApplyier' style={{'--font-size-multiplier': FontSize} as any}>
        {children}
      </div>
    </FontSizeContext.Provider>
  );
};
