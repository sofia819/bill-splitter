import { Typography } from '@material-ui/core';

type PanelHeaderProps = {
  title: string;
};

const PanelHeader = (props: PanelHeaderProps) => {
  return <Typography>{props.title}</Typography>;
};

export default PanelHeader;
