import { Box } from '@material-ui/core';

type PanelContainerProps = {
  children: React.ReactNode;
};

const PanelContainer = ({ children }: PanelContainerProps) => {
  return <Box overflow='visible'>{children}</Box>;
};

export default PanelContainer;
