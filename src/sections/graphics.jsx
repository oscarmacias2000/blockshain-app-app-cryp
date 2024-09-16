import { BarChart } from '@mui/x-charts/BarChart';


function GraphicsComponent(){ 
    return (
       <div className='container'>
                  <BarChart
  series={[
    { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Binence Coin' },
    { data: [4, 3, 1, 5, 8], stack: 'A', label: 'ETH' },
    { data: [4, 2, 5, 4, 1], stack: 'B', label: 'ETC' },
    { data: [2, 8, 1, 3, 1], stack: 'B', label: 'LTC' },
    { data: [10, 6, 5, 8, 9], label: 'Series C1' },
  ]}
  width={600}
  height={350}
/>
       </div>
    )
};

export default GraphicsComponent;