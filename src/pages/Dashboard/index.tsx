import { SimpleGrid } from '@chakra-ui/react';
import { PieChart } from 'components/Charts/PieChart';
import { CounterRegister } from 'components/Context/Dashboard/CounterRegister';
import { DashContainer } from 'components/Structure/DashContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getUsers } from 'store/users/users.ducks';
import { UserData } from 'models/userData';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const usersType = users.reduce(
    (acc, user: UserData) => {
      if (user.role === 'ADMIN') {
        acc.admins += 1;
      } else {
        acc.users += 1;
      }
      return acc;
    },
    { admins: 0, users: 0 }
  );

  return (
    <DashContainer>
      <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
        <CounterRegister counter={users.length} label="Usuários Cadastrados" />
        <PieChart
          chartTitle="Usuários por Perfil"
          series={[Number(usersType.admins), Number(usersType.users)]}
        />
      </SimpleGrid>
    </DashContainer>
  );
}
