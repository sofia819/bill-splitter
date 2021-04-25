import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';

type ListContainerProps = {
  children: React.ReactNode;
};

const ListContainer = ({ children }: ListContainerProps) => {
  return (
    <Box p={2}>
      <Card variant='outlined'>
        <Box my={2} mx={1}>
          {children}
        </Box>
      </Card>
    </Box>
  );
};

export default ListContainer;
