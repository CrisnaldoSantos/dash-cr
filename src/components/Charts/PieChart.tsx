import { Box, Text, theme } from '@chakra-ui/react';
import Chart from 'react-apexcharts';

interface PieChartProps {
  chartTitle: string;
  series: Array<number>;
}
export function PieChart({ chartTitle, series }: PieChartProps) {
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 450,
      type: 'pie',
    },
    labels: ['Admin', 'User'],
    colors: [theme.colors.blue['400'], theme.colors.gray['400']],
  };
  return (
    <Box p="8" bg="white" borderRadius={8} pb="4" boxShadow="xl">
      <Text fontSize="lg" mb="4">
        {chartTitle}
      </Text>
      <Chart type="pie" height={200} options={options} series={series} />
    </Box>
  );
}
