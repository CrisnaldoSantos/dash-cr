import { render, screen } from '@testing-library/react';
import { PieChart } from './PieChart';

jest.mock('react-apexcharts', () => {
  return {
    __esModule: true,
    default: () => {
      return <div />;
    },
  };
});

describe('PieChart Component', () => {
  test('deve exibir as propriedades do PieChart', async () => {
    const chartTitle = 'Gráfico de Teste';
    const data = [2, 2];

    render(<PieChart chartTitle={chartTitle} series={data} />);

    const titlePieChart = screen.getByText(chartTitle);

    expect(titlePieChart).toBeInTheDocument();
  });

  test('não deve exibir título diferente das propriedades do PieChart', async () => {
    const chartTitle = 'Gráfico de Teste';
    const data = [2, 2];

    render(<PieChart chartTitle={chartTitle} series={data} />);

    const titlePieChart = screen.queryByText(`${chartTitle} .`);

    expect(titlePieChart).not.toBeInTheDocument();
  });
});
