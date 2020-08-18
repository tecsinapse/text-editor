import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EditText } from '../src/EditText';

test('Render Editor', () => {
  const { container } = render(
    <EditText
      onChange={(e) => e}
      error="Erro no editor"
      skinUrl="/text-editor/skins/oxide"
    />
  );
  const errorMessage = container.querySelector('p');
  const textArea = container.querySelector('textarea');
  fireEvent.change(textArea, { target: { value: 'Teste de componente' } });
  expect(errorMessage.firstChild.textContent).toBe('Erro no editor');
  expect(textArea.value).toEqual('Teste de componente');
});
