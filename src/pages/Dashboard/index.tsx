import { Box, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { DashContainer } from 'components/Structure/DashContainer';
import Chart from 'react-apexcharts';

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2022-01-02T00:00:00.000Z',
      '2022-01-03T00:00:00.000Z',
      '2022-01-04T00:00:00.000Z',
      '2022-01-05T00:00:00.000Z',
      '2022-01-06T00:00:00.000Z',
      '2022-01-07T00:00:00.000Z',
      '2022-01-08T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [{ name: 'series 1', data: [31, 120, 10, 28, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <DashContainer>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <Box p="8" bg="white" borderRadius={8} pb="4" boxShadow="xl">
          <Text fontSize="lg" mb="4">
            Inscritos da semana
          </Text>
          <Chart type="area" height={160} options={options} series={series} />
        </Box>
        <Box p="8" bg="white" borderRadius={8} boxShadow="xl">
          <Text fontSize="lg" mb="4">
            Taxa de abertura
          </Text>
          <Chart type="area" height={160} options={options} series={series} />
        </Box>
      </SimpleGrid>
    </DashContainer>
  );
}
