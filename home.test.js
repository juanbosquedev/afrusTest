import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './src/conteinerComponentes/home/home.jsx';

// Mockear fetch para simular la respuesta de la API
jest.mock('node-fetch', () => {
  return (url) => {
    if (url === 'URL_DE_PRUEBA') {
      return Promise.resolve({
        json: () =>
          Promise.resolve({
            items: [
              {
                id: '1',
                volumeInfo: {
                  title: 'Libro de prueba',
                  description: 'Descripción de prueba',
                  imageLinks: {
                    smallThumbnail: 'imagen.jpg',
                  },
                  pageCount: 100,
                },
              },
            ],
          }),
      });
    } else {
      return Promise.reject(new Error('URL desconocida'));
    }
  };
});

describe('Pruebas de fetchBooks en Home', () => {
  it('debería obtener libros de la API y actualizar el estado', async () => {
    render(<Home />);

    // Asegúrate de que la función fetch se haya llamado con la URL correcta
    expect(fetch).toHaveBeenCalledWith('URL_DE_PRUEBA');

    // Espera a que se carguen los libros
    await waitFor(() => screen.getByText('Libro de prueba'));

    // Verifica que el libro se haya cargado en el estado y se esté mostrando
    expect(screen.getByText('Libro de prueba')).toBeInTheDocument();
    expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
  });
});
